import { Search, Clear, StarRate, Stars } from '@material-ui/icons'
import Card from '../../components/Card'
import Input from '../../components/Input'
import ListItem from '../../components/ListItem'
import Logo from '../../components/Logo'
import { HomeBottomContainer, HomeContainer, HomeFeaturedBooks, HomeFeaturedBooksTitle, HomeLeftContainer, HomeLogoTitle, HomeRightContainer, HomeSearchTitle } from './style'
import Icon from '../../components/Icon'
import bookAPI from '../../services/bookAPI'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'

interface Result {
  title: string;
  author_name: string[];
  [key: string]: unknown;
}

interface Ranked {
  title: string;
  author_name: string[];
  ratings_average: number;
  [key: string]: unknown;
}

function Home () {
  const [search, setSearch] = useState('')
  const [searchPage, setSearchPage] = useState(1)
  const [searchResults, setSearchResults] = useState([])
  const [totalOfPages, setTotalOfPages] = useState(0)
  const [isSearchEnable, setIsSearchEnable] = useState(true)
  const [rankedResults, setRankedResults] = useState<Ranked[]>([])
  
  async function sortedByRating() {
    try {
      const response = await bookAPI.get(`/search.json?subject=literature&sort=rating desc&page=1&limit=10`)
      setRankedResults(response.data.docs.sort((a: Ranked, b: Ranked) => b.ratings_average - a.ratings_average))
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  async function searchBooks() {
    try {
      const searchUrl = search.replace('  ', ' ').replace(' ', '+').concat(`&page=${searchPage}&limit=10`)
      const response = await bookAPI.get(`/search.json?subject=literature&title=${searchUrl}`.replace('/', ''));
      setSearchResults(response.data.docs)
      const newTotalOfPages = Math.ceil(response.data.numFound / 10);
      setTotalOfPages(newTotalOfPages)
      setTimeout(() => {
        setIsSearchEnable(true)
      }, 1000)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  function clearSearch() {
    setSearchPage(1)
    setSearch("")
    setSearchResults([])
  }

  function updateSearchPage(newPage: number) {
    if(newPage === 0 || !isSearchEnable) return false
    setSearchPage(newPage)
  }

  function searchPreparation() {
    if(!isSearchEnable) return false
    setIsSearchEnable(false)
    setSearchPage(1)
    searchBooks()
  }

  useEffect(() => {
    sortedByRating();
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
            <Icon onClick={searchPreparation}>
              <Search 
                titleAccess='buscar' 
                color="inherit" 
              />
            </Icon>   
            {
              search ?
              <Icon onClick={clearSearch} >
                <Clear 
                  titleAccess='limpar' 
                  color="inherit" 
                />
              </Icon> : null
            }       
        </Input>
        {searchResults.length && isSearchEnable ?
        <>
        {
          searchResults.map((result: Result) => (
            <Link to={`details/${result.title}/${result.author_name ? result.author_name[0] : 'desconhecido'}`}>
              <ListItem type='search'>
                <b>{result.title}</b> escrito por {result.author_name ? result.author_name[0] : 'desconhecido'}
              </ListItem>
            </Link> 
          ))
        }
        <Pagination 
          searchPage={searchPage} 
          updateSearchPage={updateSearchPage} 
          totalOfPages={totalOfPages}  
        />
        </> : null
        }
        {
          !isSearchEnable ?
          <Loading message='Procurando...' /> : null
        }
        
      </HomeLeftContainer>
      <HomeRightContainer>
        <HomeFeaturedBooksTitle>
          Destaques da semana:
        </HomeFeaturedBooksTitle>
        <HomeFeaturedBooks>
          {rankedResults.length ?
          <>
          <Card title={rankedResults[1].title} marginTop={30}>
             <p><Stars htmlColor='#C0C0C0' fontSize='large'/>{rankedResults[1].ratings_average.toFixed(2)}</p>
           </Card>
           <Card title={rankedResults[0].title}>
             <p><Stars htmlColor='#FFD700' fontSize='large'/>{rankedResults[0].ratings_average.toFixed(2)}</p>
           </Card>
           <Card title={rankedResults[2].title} marginTop={30}>
             <p><Stars htmlColor='#CD7F32' fontSize='large'/>{rankedResults[2].ratings_average.toFixed(2)}</p>
           </Card>
          </> : null 
          }
       
        </HomeFeaturedBooks>
      
      {
        rankedResults.slice(3, 10).map((book) => (
          <ListItem type='ranking'>
            <b>{book.title} - {book.ratings_average.toFixed(2)}<StarRate /></b> escrito por {book.author_name}
          </ListItem>
        ))
      }
    
      </HomeRightContainer>
      </HomeBottomContainer>
    </HomeContainer>
  )
}

export default Home
