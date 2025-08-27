import { useNavigate } from "react-router-dom";

const Unathorized = () => {
  const navigate = useNavigate();
  const goback = () => navigate(-1);
  return (
    <section>
      <h1>Unathorized</h1>
      <br />
      <p>You do not have access tothe requested page.</p>
      <div className="flexGrow">
        <button onClick={goback}>Go Back</button>
      </div>
    </section>
  );
};

export default Unathorized;
