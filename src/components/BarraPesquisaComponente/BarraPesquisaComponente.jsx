import { FaSearch } from "react-icons/fa";
import "./BarraPesquisaComponente_styles.css";
export default function BarraPesquisaComponente() {
  return (
    <div className="container-barra-pesquisa">
      <input type="search" name="CampoPesquisa" />
      <button type="submit">
        {" "}
        <FaSearch />
      </button>
    </div>
  );
}
