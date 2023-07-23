import * as S from "./styles"

export default function InputCheckbox({ name, label, align }) {
    return (
        <S.Container align={align}>
            <S.Input 
                type="checkbox" 
                name={name} 
                id={name} 
            />
            <S.Label htmlFor={name}>
                {label}
            </S.Label>
        </S.Container>
    )
}