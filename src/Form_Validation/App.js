import "./App.css";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Unathorized from "./components/Unathorized";
import Lounge from "./components/Lounge";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PersistLogin from "./components/PersistLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkPage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unathorized />} />

        {/* protected */}
        <Route element={<PersistLogin />}>
          <Route path="/" element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/" element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
          <Route path="/" element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/" element={<RequireAuth allowedRoles={[1984, 5150]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
