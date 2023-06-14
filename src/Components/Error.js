import style from "./Error.module.css";

function ErrorContent({ title, children }) {
  return (
    <div className={style.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default ErrorContent;
