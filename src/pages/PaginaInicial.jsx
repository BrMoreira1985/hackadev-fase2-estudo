import "./Paginas_styles.css";
import BannerComponente from "../components/BannerComponente/BannerComponente";
import CatalogoComponente from "../components/CatalogoComponente/CatalogoComponente";

export default function PaginaInicial() {
  return (
    <div className="container pagina-inicial">
      <BannerComponente />
      <CatalogoComponente />
    </div>
  );
}
