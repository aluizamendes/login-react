import * as S from "./styles"

export default function InputField({ label, type, placeholder }) {
    return (
        <>
            <S.Input 
                aria-label={placeholder}
                type={type}
                name={type}
                placeholder={placeholder}
            />
        </>
    )
}
