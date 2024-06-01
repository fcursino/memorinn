import { Search, Clear } from '@material-ui/icons'
import Card from '../../components/Card'
import Input from '../../components/Input'
import ListItem from '../../components/ListItem'
import Logo from '../../components/Logo'
import { HomeBottomContainer, HomeContainer, HomeFeaturedBooks, HomeFeaturedBooksTitle, HomeLeftContainer, HomeLogoTitle, HomeRightContainer, HomeSearchTitle } from './style'
import Icon from '../../components/Icon'
import bookAPI from '../../services/bookAPI'
import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'

interface Result {
  title: string;
  author_name: string[];
  [key: string]: unknown;
}

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
  const [searchPage, setSearchPage] = useState(1)
  const [searchResults, setSearchResults] = useState([])
  const [totalOfPages, setTotalOfPages] = useState(0)
  const [isSearchEnable, setIsSearchEnable] = useState(true)

  async function searchBooks() {
    try {
      if(!isSearchEnable) return false
      setIsSearchEnable(false)
      const response = await bookAPI.get(`${search}`.replace('/', '').concat(`&page=${searchPage}&limit=10`));
      setSearchResults(response.data.docs)
      const newTotalOfPages = Math.ceil(response.data.numFound / 10);
      setTotalOfPages(newTotalOfPages)
      setTimeout(() => {
        setIsSearchEnable(true)
      }, 1500)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  function clearSearch() {
    setSearch("")
    setSearchResults([])
  }

  function updateSearchPage(newPage: number) {
    if(newPage === 0 || !isSearchEnable) return false
    setSearchPage(newPage)
  }

  useEffect(() => {
    searchBooks();
  }, [searchPage]);

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
        <Input changeSearch={setSearch} search={search}>
          {
            !searchResults.length ?
            <Icon onClick={searchBooks}>
              <Search titleAccess='buscar' color="inherit" />
            </Icon> :
            <Icon onClick={clearSearch} >
              <Clear titleAccess='limpar' color="inherit" />
            </Icon>
          }
        </Input>
        {searchResults.length ?
        <>
        {
          searchResults.map((result: Result) => (
            <ListItem type='search'>
              <b>{result.title}</b> escrito por {result.author_name ? result.author_name[0] : 'desconhecido'}
            </ListItem>
          ))
        }
        <Pagination searchPage={searchPage} updateSearchPage={updateSearchPage} totalOfPages={totalOfPages}  />
        </> : null
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
