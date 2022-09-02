import "./BannerComponente_styles.css";
import Banner from "./ImagensBanner/banner.jpg";

export default function BannerComponente() {
  return (
    <div className="banner">
      <img src={Banner} alt="banner" />
    </div>
  );
}
