import { useEffect, useState } from "react"
import Logo from "../../components/Logo"
import { DetailsBookTitle, DetailsBottomContainer, DetailsCommentContainer, DetailsCommentTextarea, DetailsContainer, DetailsContentContainer, DetailsLeftContainer, DetailsLogoTitle, DetailsNoCommentsMessage, DetailsRightContainer } from "./style"
import geminiAPI from "../../services/geminiAPI"
import { useDetails } from "../../hooks/DetailsContext"

function Details () {
  const [summary, setSummary] = useState("")
  const [comment, setComment] = useState("")
  const { book } = useDetails()

  async function generateSummary() {
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
  useEffect(() => {
    generateSummary()
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
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <DetailsNoCommentsMessage>
            Ainda não temos nenhum comentário sobre este livro
          </DetailsNoCommentsMessage> 
        </DetailsRightContainer>
      </DetailsBottomContainer>
    </DetailsContainer>
  )
}
export default Details