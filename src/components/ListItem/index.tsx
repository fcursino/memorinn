import { ListItemContainer } from "./style";

interface ListItemProps {
  children?: React.ReactNode
  type: string
  onClick?: () => void
}

const ListItem: React.FC<ListItemProps> = ({type, children, onClick}) => {
  return (
    <ListItemContainer type={type} onClick={onClick}>
      {children}
    </ListItemContainer>
  )
}
export default ListItem