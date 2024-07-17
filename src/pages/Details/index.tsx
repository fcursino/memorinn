import { useEffect, useState } from "react"
import Logo from "../../components/Logo"
import { DetailsBookTitle, DetailsBottomContainer, DetailsCommentButton, DetailsCommentContainer, DetailsCommentTextarea, DetailsCommentThread, DetailsContainer, DetailsContentContainer, DetailsLeftContainer, DetailsLogoTitle, DetailsNoCommentsMessage, DetailsRightContainer, DetailsThreadComment, DetailsThreadTitle } from "./style"
import geminiAPI from "../../services/geminiAPI"
import memorinnAPI from "../../services/memorinnAPI"
import { useDetails } from "../../hooks/DetailsContext"
import { useAuth } from "../../hooks/AuthContext"
import { useNavigate } from "react-router-dom"
import ListItem from "../../components/ListItem"

interface Comment {
  text: string;
  bookId: string;
  id: string;
  userOwner: {
    userName: string;
  }
  [key: string]: unknown;
}

function Details () {
  const [summary, setSummary] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [registerCommentEnabled, setRegisterCommentEnabled] = useState(true)
  const { book, setBook } = useDetails()
  const { user, getFromStorage } = useAuth()
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
    let currentUser = user
    if(!currentUser) currentUser = getFromStorage()
      if(!currentUser) {
        navigate('/login')
        return false
      }
    await memorinnAPI.post(`/comments`, {
      text: comment,
      userOwner: currentUser,
      bookId: book?.id
    }, {
      headers: {
        authorization: currentUser?.token
      }
    })
    setRegisterCommentEnabled(true)
  }

  async function searchBookComments(book: any) {
    const response = await memorinnAPI.post('/comments/book', {
      bookId: book?.id
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
          <DetailsCommentButton onClick={registerComment} disabled={!registerCommentEnabled}>
            Enviar comentário para análise
          </DetailsCommentButton>
        </DetailsLeftContainer>
        <DetailsRightContainer>
          {comments.length === 0 ?
            <DetailsNoCommentsMessage>
              Ainda não temos nenhum comentário sobre este livro
            </DetailsNoCommentsMessage> : 
            <DetailsCommentThread>
              <DetailsThreadTitle>
                <h3>Comentários</h3>
              </DetailsThreadTitle>
              {comments.map((comment: Comment) => (
              <DetailsThreadComment key={comment.id}>
               <i>"{comment.text}"</i><b> - {comment.userOwner.userName}</b>
               
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