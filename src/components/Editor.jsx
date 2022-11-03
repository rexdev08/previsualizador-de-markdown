import styles from "../styles/Editor.module.scss"
import {FaExpandArrowsAlt} from "react-icons/fa"
import {FaCompressArrowsAlt} from "react-icons/fa"

const Editor = ({onChangeHandler}) => {

return (<div id="editor" className={styles.editor}>
    <header className={styles.editor__header}>
        <span className={styles.editor__span}>Editor</span>
        <button className={styles.editor__button}>
            <FaExpandArrowsAlt className={styles.button__expand}/>
            <FaCompressArrowsAlt className={styles.button__compress}/>
        </button>
    </header>
    <textarea onChange={onChangeHandler} className={styles.editor__text} name="info" id="info" cols="30" rows="10"></textarea>
</div>)


}


export default Editor