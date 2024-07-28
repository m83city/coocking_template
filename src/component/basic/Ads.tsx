import useImages from "../../hook/useImages";
import "./Ads.scss";
function Ads() {
  const image = useImages().getImageURL;
  return (
    <div className="ads">
      <img className="adsMask" alt="" src={image("adsMask")}></img>
      <img className="adsFood" alt="" src={image("adsFood")}></img>
    </div>
  );
}
export default Ads;
