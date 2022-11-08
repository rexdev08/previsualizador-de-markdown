import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor.jsx";
import Previewer from "./components/Previewer.jsx";

function App() {
  const info = `# Hola, soy Raimundo Rincon 
  ## El entusiasta

  ![alt text](https://www.codewars.com/users/rexdev08/badges/large)
  
  1. 💼 [Portafolio](https://rexdev08.github.io/)
  
  2. 🔷 [Twitter](https://twitter.com/RexDev08)
  
  3. ◽ [Linkedin](https://www.linkedin.com/in/rexdev08/)
  
  
  Desarrollador web | HTML | CSS | Javascript | SCSS | ReactJS
  
  Soy un apasionado de la programación, con buenos valores, tengo soft skills (soy amable y respetuoso...) y tambien dispuesto a trabajar con nuevas tecnologias.
  
  Una de mis mayores motivaciones es aprender. Así empecé haciendo cursos, devorando libros , tutoriales y ademas complemento lo anterior siendo autodidacta.
  
  ![coding](https://user-images.githubusercontent.com/101665808/195746743-c3f64ae4-34ae-46f0-85d6-1aaffb506734.gif)
  

## Texto de relleno

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  ## Texto de Ejemplo
  
\`Codigo\`

> cita :  "Context and memory play powerful roles in all the truly great meals in one's" life.

\`\`\`
function test() {
  console.log("notice the blank line before this function?");
}
\`\`\`
**gracias por usar mi editor**
  `;

  const [content, setContent] = useState(info);

  const text = (e) => {
    setContent(e.currentTarget.value);
  };

  return (
    <div className="App">
      <Editor start={content} onChangeHandler={text} />
      <Previewer elements={content} />
    </div>
  );
}

export default App;
