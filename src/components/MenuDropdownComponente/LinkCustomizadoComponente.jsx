import "./MenuDropdownComponente_styles.css";
import { Link } from "react-router-dom";

export default function LinkCustomizadoComponente({ nome, rota }) {
  return (
    <span className="link-customizado">
      <Link to={rota}>{nome}</Link>
    </span>
  );
}
