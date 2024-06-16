import { useEffect, useState } from "react"
import Logo from "../../components/Logo"
import { DetailsBookTitle, DetailsBottomContainer, DetailsContainer, DetailsContentContainer, DetailsLeftContainer, DetailsLogoTitle, DetailsNoCommentsMessage, DetailsRightContainer } from "./style"
import geminiAPI from "../../services/geminiAPI"
import { useParams } from "react-router-dom"

function Details () {
  const { title, author } = useParams()
  const [summary, setSummary] = useState("")

  async function generateSummary() {
    const response = await geminiAPI.post(`v1beta/models/gemini-1.5-flash:generateContent`, {
      "generationConfig":{},
      "safetySettings":[],
      "contents":[
        {
          "role":"user",
          "parts":[
            {
              text:`Gere um resumo, em português brasileiro, sobre o livro ${title}, do autor ${author}. Caso você não encontre informações sobre o livro, retorne simplesmente uma string vazia como resposta.`
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
            {title}
          </DetailsBookTitle>
          {summary ? 
            <DetailsContentContainer>
              <p>{summary}</p>
            </DetailsContentContainer>
            : null
          }
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