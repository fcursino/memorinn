import { CardContainer, CardTitle, CardContent } from "./style";

interface CardProps {
    children: React.ReactNode,
    title: string,
    marginTop?: number
}

const Card: React.FC<CardProps> = ({children, title, marginTop}) => {
    return (
        <CardContainer marginTop={marginTop || 0}>
            <CardTitle>
                {title}
            </CardTitle>
            <CardContent>
                {children}
            </CardContent>
        </CardContainer>
    )
}
export default Card