import * as S from "./styles"
import Logo from "src/assets/logo.svg"
import InputField from "src/components/InputField"
import Button from "src/components/Button"
import InputCheckbox from "src/components/CheckboxInput"

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

                    <S.LinksWrapper>
                        <InputCheckbox
                            name="rememberMe"
                            label="Remember me"
                            align="flex-start"
                        />
                        <a href="/">Forgot password?</a>
                    </S.LinksWrapper>

                    <Button primary="true">
                        Log in
                    </Button>

                    <S.SpanDivisor>or</S.SpanDivisor>
                    <Button>
                        Create account
                    </Button>                   
                </S.Content>
            </S.Container>
        </>
    )
}