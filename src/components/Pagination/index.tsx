import { PaginationContainer, PaginationArrow } from "./style";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const Pagination = () => {
    return (
        <PaginationContainer>
          <PaginationArrow>
            <ArrowLeft htmlColor="black" />
          </PaginationArrow>
          <PaginationArrow>
            <ArrowRight htmlColor="black" />
          </PaginationArrow>
        </PaginationContainer>
    )
}
export default Pagination