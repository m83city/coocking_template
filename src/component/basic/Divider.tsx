import "./Divider.scss";
export const Divider = ({
  dividerType,
}: {
  dividerType: "Vertical" | "Horizontal";
}) => {
  return <span className={`divider ${"divider" + dividerType}`}></span>;
};
