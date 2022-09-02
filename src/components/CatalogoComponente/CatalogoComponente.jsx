import "./CatalogoComponente_styles.css";
import ProdutoCatalogoComponente from "../ProdutoCatalogoComponente/ProdutoCatalogoComponente";
import { Dados } from "../../assets/Dados";

export default function CatalogoComponente() {
  return (
    <div className="catalogo-container">
      {Dados.map((roupa) => (
        <ProdutoCatalogoComponente
          key={roupa.id}
          imagem={roupa.image}
          nome={roupa.nome}
          preco={roupa.precoOriginal}
          precoDesconto={roupa.precoDesconto}
          desconto={roupa.desconto}
        />
      ))}
    </div>
  );
}
