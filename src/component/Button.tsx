import "./Button.scss";
interface IButton {
  label: string;
  buttonImageURL?: string;
  buttonAlt?: string;
  onClick?: () => void;
  className?: string;
}
function Button({
  label,
  onClick,
  buttonAlt,
  buttonImageURL,
  className,
}: IButton) {
  return (
    <button className={`button ${className}`} onClick={() => onClick}>
      <span className="buttonLabel">{label}</span>
      {buttonImageURL ? (
        <img className="buttonImage" src={buttonImageURL} alt={buttonAlt} />
      ) : null}
    </button>
  );
}
export default Button;
