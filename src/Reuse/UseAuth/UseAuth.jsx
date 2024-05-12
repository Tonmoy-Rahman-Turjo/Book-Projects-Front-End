import { useContext } from "react";
import { AuthContxt } from "../../AuthProvider/AuthProvider";


const UseAuth = () => {
    const all = useContext(AuthContxt)
    return all
};

export default UseAuth;