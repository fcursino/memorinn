import { Search } from '@material-ui/icons'
import Card from '../../components/Card'
import Input from '../../components/Input'
import ListItem from '../../components/ListItem'
import Logo from '../../components/Logo'
import { HomeBottomContainer, HomeContainer, HomeFeaturedBooks, HomeFeaturedBooksTitle, HomeLeftContainer, HomeLogoTitle, HomeRightContainer, HomeSearchTitle } from './style'
import Icon from '../../components/Icon'
import bookAPI from '../../services/bookAPI'
import { useEffect, useState } from 'react'

const books = [
  {
    name: "Nome do livro1",
    author: "Nome do autor1"
  },
  {
    name: "Nome do livro2",
    author: "Nome do autor2"
  },
  {
    name: "Nome do livro3",
    author: "Nome do autor3"
  },
  {
    name: "Nome do livro4",
    author: "Nome do autor4"
  },
]

function Home () {

  const [search, setSearch] = useState('')
  async function searchBooks() {
    try {
      const response = await bookAPI.get(`${search}`.replace('/', ''));
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
    searchBooks();
  }, []);

  return (
    <HomeContainer>
      <Logo>
        <HomeLogoTitle>
          MemorInn
        </HomeLogoTitle>
      </Logo>
      <HomeBottomContainer>
      <HomeLeftContainer>
        <HomeSearchTitle>
          Pesquise por seus livros favoritos e veja o que outras pessoas comentaram sobre eles
        </HomeSearchTitle>
        <Input changeSearch={setSearch}>
        <Icon onClick={searchBooks} >
        <Search color="inherit" />
        </Icon>
        </Input>
        {
          searchResults.map((result: Result) => (
            <ListItem type='search'>
              <b>{result.title}</b> escrito por {result.author_name[0]}
            </ListItem>
          ))
        }
        
      </HomeLeftContainer>
      <HomeRightContainer>
        <HomeFeaturedBooksTitle>
          Destaques da semana:
        </HomeFeaturedBooksTitle>
        <HomeFeaturedBooks>
        <Card title='Titulo de card' marginTop={30}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card title='Titulo de card'>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>
      <Card title='Titulo de card' marginTop={30}>
        <p>Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr</p>
      </Card>
        </HomeFeaturedBooks>
      
      {
        books.map((book) => (
          <ListItem type='ranking'>
            <b>{book.name}</b> escrito por {book.author}
          </ListItem>
        ))
      }
    
      </HomeRightContainer>
      </HomeBottomContainer>
      
      
      
    </HomeContainer>
  )
}

export default Home
