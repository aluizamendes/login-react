import * as S from "./styles"
import Logo from "src/assets/logo.svg"
import InputField from "src/components/InputField"
import Button from "src/components/Button"

export default function Card() {
    return (
        <>
            <S.Container>
                <S.Content>
                    <img src={Logo} alt="Logo empresa" />

                    <S.Title>Welcome!</S.Title>
                    <InputField
                        type="email"
                        placeholder="your email"
                    />
                    <InputField
                        type="password"
                        placeholder="your password"
                    />

                    <Button primary={true}>
                        Log in
                    </Button>                   
                </S.Content>
            </S.Container>
        </>
    )
}