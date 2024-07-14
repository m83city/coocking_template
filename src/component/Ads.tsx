import "./Ads.scss";
import adsMask from "../img/adsMask.png";
import adsFood from "../img/adsFood.png";
//
function Ads() {
  return (
    <div className="ads">
      <img className="adsMask" alt="" src={adsMask}></img>
      <img className="adsFood" alt="" src={adsFood}></img>
    </div>
  );
}
export default Ads;
