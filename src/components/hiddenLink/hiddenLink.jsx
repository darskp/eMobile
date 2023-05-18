import { useSelector } from "react-redux";
import { selectIsLoggedIN } from "../../redux/slice/authSlice";

const ShowOnLogin = ({ children }) => {
    let isLoggenIn = useSelector(selectIsLoggedIN);
    if (isLoggenIn) {
        return children;
    }
    return null;
}
const ShowOnLogoff = ({ children }) => {
    let isLoggenIn = useSelector(selectIsLoggedIN);
    if (!isLoggenIn) {
        return children;
    }
    return null;
}
export {ShowOnLogin,ShowOnLogoff}