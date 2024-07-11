import "./TagFood.scss";
import { v4 as uuidv4 } from "uuid";

type TagBackgroundColor = "Transparent" | "White" | "Dark";
export interface ITagFood {
  logoUrl: string;
  title: string;
  backgroundColor: TagBackgroundColor;
}

function TagFood({ logoUrl, title, backgroundColor }: ITagFood) {
  return (
    <div className={`tag tag${backgroundColor}`} key={uuidv4()}>
      <img src={logoUrl} alt="Tag logo" key={uuidv4()}></img>
      <div key={uuidv4()}>{title}</div>
    </div>
  );
}
export default TagFood;
