import { useNavigate } from "react-router-dom";

function ButtonSmall({ content, classElement, navigateAuth }) {
  const navigate = useNavigate();
  return (
    <button
      className={`button button_small ${classElement}`}
      onClick={() => navigate(`/${navigateAuth}`)}
    >
      {content}
    </button>
  );
}

export default ButtonSmall;
