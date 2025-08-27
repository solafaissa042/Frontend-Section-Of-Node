import { useContext } from "react";
import AuthContext from "../Form_Validation/context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
