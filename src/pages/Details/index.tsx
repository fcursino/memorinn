import { useEffect, useState } from "react"
import Logo from "../../components/Logo"
import { DetailsBookTitle, DetailsBottomContainer, DetailsCommentButton, DetailsCommentContainer, DetailsCommentTextarea, DetailsCommentThread, DetailsContainer, DetailsContentContainer, DetailsLeftContainer, DetailsLogoTitle, DetailsNoCommentsMessage, DetailsRightContainer, DetailsThreadComment, DetailsTextContainer, DetailsCommentEditButton } from "./style"
import geminiAPI from "../../services/geminiAPI"
import memorinnAPI from "../../services/memorinnAPI"
import { useDetails } from "../../hooks/DetailsContext"
import { useAuth } from "../../hooks/AuthContext"
import { useNavigate } from "react-router-dom"
// import { Check, Close, Edit } from "@material-ui/icons"
import { FaCheck, FaEdit } from "react-icons/fa"
import { MdClear } from "react-icons/md"

interface Comment {
  text: string;
  bookId: string;
  id: string;
  userOwner: {
    userName: string;
    id: string;
  }
  [key: string]: unknown;
}

function Details () {
  const [summary, setSummary] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [registerCommentEnabled, setRegisterCommentEnabled] = useState(true)
  const [commentEdited, setCommentEdited] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [commentSent, setCommentSent] = useState(false)
  const { book, setBook } = useDetails()
  const { user } = useAuth()
  const navigate = useNavigate()

  async function generateSummary(book: any) {
    const response = await geminiAPI.post(`v1beta/models/gemini-1.5-flash:generateContent`, {
      "generationConfig":{},
      "safetySettings":[],
      "contents":[
        {
          "role":"user",
          "parts":[
            {
              text:`Gere uma sinopse, em português brasileiro, no formato html sobre o livro ${book?.title}, do autor ${book?.author}. Retorne somente o que estiver em tags html, sem título, e caso você não encontre informações sobre o livro, retorne simplesmente uma string vazia como resposta.`
            }
          ]
        }
      ]
    })
    setSummary(response.data.candidates[0].content.parts[0].text)
  }

  async function registerComment() {
    setRegisterCommentEnabled(false)
      if(!user.token) {
        navigate('/login')
        return false
      }
    await memorinnAPI.post(`/comments`, {
      text: comment,
      userOwner: user,
      bookId: book?.id
    }, {
      headers: {
        authorization: user.token
      }
    })
    setCommentSent(true)
    setTimeout(() => {
      setRegisterCommentEnabled(true)
      setCommentSent(false)
    }, 2000)
  }

  async function searchBookComments(book: any) {
    const response = await memorinnAPI.post('/comments/book', {
      bookId: book?.id
    })
    response.data.map((item: Comment) => {
      console.log(item.userOwner.id, user?.id)
    })
    setComments(response.data)
  }
  function getFromLocalstorage() {
    const currentBook = localStorage.getItem('currentBook')
    if(!currentBook) {
      navigate('/') 
      return false
    } 
    setBook(JSON.parse(currentBook))
    generateSummary(JSON.parse(currentBook))
    searchBookComments(JSON.parse(currentBook))
  }
  function editComment (comment: string) {
    setIsEditing(true)
    setCommentEdited(comment)
  }
  function cancelEditing () {
    setIsEditing(false)
    setCommentEdited("")
  }
  function saveEditing () {
    setIsEditing(false)
    setCommentEdited("")
  }
  useEffect(() => {
    if(!book) {
      getFromLocalstorage()
    } else {
      generateSummary(book)
      searchBookComments(book)
    }
  },[])
  return (
    <DetailsContainer>
      <Logo>
        <DetailsLogoTitle>
          MemorInn
        </DetailsLogoTitle>
      </Logo>
      <DetailsBottomContainer>
        <DetailsLeftContainer>
          <DetailsBookTitle>
            {book?.title}
          </DetailsBookTitle>
          {summary ? 
            <DetailsContentContainer>
              <div dangerouslySetInnerHTML={{ __html: summary }} />
            </DetailsContentContainer>
            : null
          }
          <DetailsCommentContainer>
            <DetailsCommentTextarea 
              placeholder="deixe seu comentário aqui..." 
              value={comment} 
              onChange={e => setComment(e.target.value)}
            />
          </DetailsCommentContainer>
          <DetailsCommentButton 
            title="Digite algum comentário para e clique aqui para enviá-lo."
            onClick={registerComment} 
            disabled={!comment.trim() || !registerCommentEnabled}>
            Enviar comentário para análise
          </DetailsCommentButton>
          {commentSent ?
            <DetailsTextContainer>
              <h5>Comentário enviado!</h5>
            </DetailsTextContainer>
          : null}
          
        </DetailsLeftContainer>
        <DetailsRightContainer>
          {comments.length === 0 ?
            <DetailsNoCommentsMessage>
              Ainda não temos nenhum comentário sobre este livro
            </DetailsNoCommentsMessage> : 
            <DetailsCommentThread>
              <DetailsTextContainer>
                <h3>Comentários</h3>
              </DetailsTextContainer>
              {comments.map((cmt: Comment) => (
              <DetailsThreadComment key={cmt.id}>
                {cmt.userOwner.id && user && cmt.userOwner.id === user?.id ? isEditing?
                  <>
                  <DetailsCommentContainer>
                    <DetailsCommentTextarea
                      value={comment} 
                      onChange={e => setComment(e.target.value)} 
                    />
                  </DetailsCommentContainer>
                    <DetailsCommentEditButton onClick={() => cancelEditing()}>
                      <MdClear fontSize="small"/>
                    </DetailsCommentEditButton>
                    <DetailsCommentEditButton onClick={() => saveEditing()}>
                      <FaCheck fontSize="small"/>
                    </DetailsCommentEditButton>
                  </> :
                  <DetailsCommentEditButton onClick={() => editComment(cmt.text)}>
                    <FaEdit fontSize="small"/>
                  </DetailsCommentEditButton>
                  : <><i>"{cmt.text}"</i><b> - {cmt.userOwner.userName}</b></>
                }
              </DetailsThreadComment>
            ))}
            </DetailsCommentThread>
          }
        </DetailsRightContainer>
      </DetailsBottomContainer>
    </DetailsContainer>
  )
}
export default Details