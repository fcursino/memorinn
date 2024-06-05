import { PaginationContainer, PaginationArrow } from "./style";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

interface PaginationProps {
  searchPage: number,
  updateSearchPage: (page: number) => void,
  totalOfPages: number
}

const Pagination: React.FC<PaginationProps> = ({searchPage, updateSearchPage, totalOfPages}) => {
    return (
        <PaginationContainer>
          <PaginationArrow disabled={searchPage === 1} onClick={() => updateSearchPage(searchPage - 1)}>
            <ArrowLeft htmlColor="#151313" />
          </PaginationArrow>
          <b>página {searchPage} de {totalOfPages} </b>
          <PaginationArrow disabled={searchPage === totalOfPages} onClick={() => updateSearchPage(searchPage + 1)}>
            <ArrowRight htmlColor="#151313" />
          </PaginationArrow>
        </PaginationContainer>
    )
}
export default Pagination