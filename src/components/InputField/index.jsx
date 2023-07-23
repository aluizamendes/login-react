import { useState } from "react"
import { HiEyeOff } from "react-icons/hi"
import * as S from "./styles"


export default function InputField({ icon, type, placeholder }) {
    const [passwordShowing, setPasswordShowing] = useState(false)

    function handleClick() {
        if (type === "password") {
            setPasswordShowing(!passwordShowing)
        }
        return
    }

    return (
        <>
            <S.Container>
                <S.Input 
                    aria-label={placeholder}
                    type={ passwordShowing ? "text" : type }
                    name={type}
                    placeholder={placeholder}
                />

                <S.IconContainer name={type} onClick={handleClick}>
                    { passwordShowing ? <HiEyeOff size={20} color="#7F57F1" /> : icon }
                </S.IconContainer>
            </S.Container>
        </>
    )
}
