import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  const [user, reset, attributeObj] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ user, accessToken });
      reset();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            autoComplete="off"
            ref={userRef}
            {...attributeObj}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          />

          <button>Sign In</button>
          <div className="persistCheck">
            <input
              type="checkbox"
              id="persist"
              onChange={toggleCheck}
              checked={check}
            />
            <label htmlFor="persist">Trust This Device</label>
          </div>
        </form>
        <p>
          Need An Account? <br />
          <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </>
  );
};

export default Login;
