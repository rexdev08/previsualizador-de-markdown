import { marked } from "marked";
import styles from "../styles/Previewer.module.scss";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";

const Previewer = ({ elements }) => {
  return (
    <div className={styles.preview}>
      <header className={styles.preview__header}>
        <span className={styles.preview__span}>Previewer</span>
        <button className={styles.preview__button}>
          <FaExpandArrowsAlt className={styles.button__expand} />
          <FaCompressArrowsAlt className={styles.button__compress} />
        </button>
      </header>
      <div
        id="preview"
        className={styles.preview__result}
        dangerouslySetInnerHTML={{
          __html: marked.parse(
            elements.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, "")
          ),
        }}
      />
    </div>
  );
};

export default Previewer;
