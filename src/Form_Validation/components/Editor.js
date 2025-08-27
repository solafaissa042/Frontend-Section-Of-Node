import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <h1>Editors Page</h1>
      <br />
      <p>You are an Editor</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Editor;
