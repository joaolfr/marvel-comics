import { authWithGitHub } from "../../services/hooks/useAuth";
import { useDispatch } from "react-redux";
import {
  logIn,
  setUserEmail,
  setUserName,
  setAvatarUrl,
} from "../../redux/user/userSlice";

export default () => {
  const dispatch = useDispatch();

  const handleAuth = async () => {
    const result = await authWithGitHub();
    localStorage.setItem("accessToken", result.credential.token);
    localStorage.setItem("userEmail", result.user.email);
    localStorage.setItem("userName", result.user.displayName);
    localStorage.setItem("userAvatar", result.user.photoURL);
    dispatch(logIn());
    dispatch(setUserEmail(result.user.email));
    dispatch(setUserName(result.user.displayName));
    dispatch(setAvatarUrl(result.user.photoURL));
  };

  return { handleAuth };
};
