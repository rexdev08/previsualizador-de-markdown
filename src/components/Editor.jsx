import styles from "../styles/Editor.module.scss";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";

const Editor = ({ start, onChangeHandler }) => {
  return (
    <div className={styles.editor}>
      <header className={styles.editor__header}>
        <span className={styles.editor__span}>Markdown Editor</span>
        <button className={styles.editor__button}>
          <FaExpandArrowsAlt className={styles.button__expand} />
          <FaCompressArrowsAlt className={styles.button__compress} />
        </button>
      </header>
      <textarea
        value={start}
        onChange={onChangeHandler}
        className={styles.editor__text}
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Editor;
