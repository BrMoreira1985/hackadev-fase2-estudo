import "./Layouts_styles.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import BarraPesquisaComponente from "../components/BarraPesquisaComponente/BarraPesquisaComponente";
import MenuDropdownComponente from "../components/MenuDropdownComponente/MenuDropdownComponente";
import LinkCustomizadoComponente from "../components/MenuDropdownComponente/LinkCustomizadoComponente";
import LogoOcean from "../imagens/Ocean_logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-area">
        <img className="icone" src={LogoOcean} alt="" />

        <BarraPesquisaComponente />
        <div className="menu-usuario">
          <div className="area-de-clique">
            <div className="cadastro">
              <FaUser />
              <span>Meu cadastro</span>
            </div>
            <MenuDropdownComponente
              conteudo={
                <>
                  <LinkCustomizadoComponente nome="Entrar" rota={"/"} />
                  <LinkCustomizadoComponente nome="Cadastrar" rota={"/"} />
                </>
              }
            />
          </div>

          <div className="area-de-clique">
            <div className="carrinho">
              <FaShoppingCart />
              <span>Meu carrinho</span>
            </div>
            <MenuDropdownComponente />
          </div>
        </div>
      </div>
    </div>
  );
}
