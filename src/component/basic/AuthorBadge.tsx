import useImages from "../../tools/hook/useImages";
import "./AuthorBadge.scss";
import moment from "moment";
export const AuthorBadge = ({
  authorName,
  timeCreate,
}: {
  authorName: string;
  timeCreate: Date;
}) => {
  const image = useImages().getImageURL;
  return (
    <div className="author">
      <img
        className="authorImage"
        src={image("authorImage")}
        alt="Author"
      ></img>
      <div className="authorNamespaces">
        <div className="authorName">{authorName}</div>
        <div className="authorCreateDate">
          {moment(timeCreate).format("DD MMMM YYYY")}
        </div>
      </div>
    </div>
  );
};
