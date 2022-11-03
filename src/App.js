import { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Previewer from './components/Previewer.jsx';



function App() {

  useEffect(()=>{
   setContent(`### Hola, soy Raimundo Rincon 👋🏻👨🏻‍💻 

   ![alt text](https://www.codewars.com/users/rexdev08/badges/large)
   
   💼 [Portafolio](https://rexdev08.github.io/)
   
   🔷 [Twitter](https://twitter.com/RexDev08)
   
   ◽ [Linkedin](https://www.linkedin.com/in/rexdev08/)

   🐈‍⬛ [Github](https://github.com/rexdev08)
   
   
   Desarrollador web | HTML | CSS | Javascript | SCSS | ReactJS
   
   Soy un apasionado de la programación, con buenos valores, tengo soft skills (soy amable y respetuoso...) y tambien dispuesto a trabajar con nuevas tecnologias.
   
   Una de mis mayores motivaciones es aprender. Así empecé haciendo cursos, devorando libros , tutoriales y ademas complemento lo anterior siendo autodidacta.
   
   ![coding](https://user-images.githubusercontent.com/101665808/195746743-c3f64ae4-34ae-46f0-85d6-1aaffb506734.gif)
   
   `)
  },[])

const [content, setContent] = useState("")


 
  const text = (e) =>{
      setContent(e.currentTarget.value)
  }

  return (
    <div className="App">
      <Editor start={content} onChangeHandler={text} />
      <Previewer elements={content} />
    </div>
  );
}

export default App;
