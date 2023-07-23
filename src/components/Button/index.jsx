import * as S from "./styles"

export default function Button({ children, primary }) {
    return (
        <S.Button primary={primary}>
            {children}
        </S.Button>
    )
}