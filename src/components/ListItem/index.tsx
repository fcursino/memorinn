import { ListItemContainer } from "./style";

interface ListItemProps {
  children?: React.ReactNode
  type: string
}

const ListItem: React.FC<ListItemProps> = ({type, children}) => {
  return (
    <ListItemContainer type={type}>
      {children}
    </ListItemContainer>
  )
}
export default ListItem