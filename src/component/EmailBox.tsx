import useImages from "../hook/useImages";
import Button from "./Button";
import "./EmailBox.scss";
function EmailBox() {
  const image = useImages().getImageURL;
  return (
    <section className={"emailBox"}>
      <h4 className="emailBoxHeader">Deliciousness to your inbox</h4>
      <p className="emailBoxTitle">
        {
          "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        }
      </p>
      <div className="emailBoxInput">
        <input
          className="emailBoxInputEmail"
          type="email"
          placeholder={"Your email address..."}
        ></input>
        <Button className="emailBoxInputButton" label={"Subscribe"} />
        <img className="emailBoxLeft" alt="" src={image("emailBoxLeft")}></img>
        <img
          className="emailBoxRight"
          alt=""
          src={image("emailBoxRight")}
        ></img>
      </div>
    </section>
  );
}
export default EmailBox;
