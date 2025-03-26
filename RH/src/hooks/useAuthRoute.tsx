import { ReactNode, FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: ReactNode;
};

const AuthRoute: FunctionComponent<Props> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("Token")) {
            navigate("/login");
        }
    }, [navigate]);

    if (!localStorage.getItem("Token")) {
        return null;
    }

    return <>{children}</>;
};

export default AuthRoute;