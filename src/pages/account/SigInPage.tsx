import {FC} from "react";
import { SelectLanguage } from "../../components/select-language/SelectLanguage";
import { Login } from "../../components/login/Login";

export const SigInPage: FC = () => {
  // const navigation = useNavigate();
  // const { authentificate } = useAppSelector((state: RootState) => state.user);
  // useEffect(() => {
  //   if (authentificate) navigation("/");
  // }, [authentificate, navigation]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "60px",
        }}
      >
        <SelectLanguage />
      </div>
      <Login />
    </>
  );
};
