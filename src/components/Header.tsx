import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

import { FaHouse } from "react-icons/fa6";

import styles from "./Header.module.scss";

interface HeaderProps {
  onSubmit: (searchValue: string) => void;
  onGoHome: () => void;
}

export function Header(props: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    props.onSubmit(searchValue);
    setSearchValue("");
  }

  return (
    <div className={styles.header}>
      <button className={styles.buttonGoBack}>
        <Link to={"/"}>
          <img
            src="https://fontmeme.com/permalink/240112/f9a1a7db7ff88a2e6ec855c2b9c7f4de.png"
            alt="netflix-font"
          />
        </Link>
      </button>
      <button className={styles.house} onClick={props.onGoHome}>
        <Link to={`/`}>
          <FaHouse size={35} />
        </Link>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search for movies"
        />
      </form>
    </div>
  );
}
