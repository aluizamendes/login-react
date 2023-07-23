import Card from "src/components/Card";
import SideImage from "src/assets/side-image.png"
import * as S from "./styles";

export default function Login() {

    return (
        <>
            <S.Main>
                <Card />
                <div>
                    <S.Illustration src={SideImage} alt="" />
                </div>
            </S.Main>
        </>
    )
}
