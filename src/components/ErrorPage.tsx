import { useLocation } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

export function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;

  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h1>OPA!</h1>
      <p>Foi mal, consagrado(a), parece que surgiu um probleminha.</p>
      <p>
        <i>{error?.statusText || error?.message || "Erro desconhecido :("}</i>
      </p>
    </div>
  );
}
