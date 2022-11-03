import { useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Previewer from './components/Previewer.jsx';



function App() {

const [content, setContent] = useState("")
 
  const text = (e) =>{
      setContent(e.currentTarget.value)
  }

  return (
    <div className="App">
      <Editor onChangeHandler={text} />
      <Previewer elements={content}/>
    </div>
  );
}

export default App;
