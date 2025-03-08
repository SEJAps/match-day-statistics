import { FC } from "react";
import SignUpUserPAge from "./SignUpUserPage";
import { MDSLogo } from "../../components/Logo";

const Account: FC = () => {
    return <section style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url('./Leonardo_Anime_XL_About_the_ProjectMatch_Day_Statistics_is_an_0.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    }}>
        <article style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            height: "100%",
        }}>
            <header style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <MDSLogo width={256} height={128} />
            </header>
            <section>
                <SignUpUserPAge />
            </section>
        </article>
    </section>;
}

export default Account;