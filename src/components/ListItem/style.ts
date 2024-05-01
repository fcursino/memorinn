import styled from "styled-components";

const listItemBackgroundColors: { [key: string]: string } = {
  search: '#FFF',
  ranking: '#F7F0E8',
};

interface ListItemContainerProps {
  type: string;
}

export const ListItemContainer = styled.li<ListItemContainerProps>`
  background-color: ${(props: { type: string }) => listItemBackgroundColors[props.type]};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #151313;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition: all .3s ease-in-out;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  margin: 5px auto;
  max-width: 600px;
  
  &:hover {
    transform: scale(1.05);
}
`