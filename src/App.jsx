import { useState } from "react";
import "./App.css";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

return (
  <>
      <About />
      <section id="projects">
      <h2>Projects</h2>

      </section>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#playground">Playground</a>
      </nav>

      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my portfolio.</p>
      </section>
      
      <section id="projects">
        <h2>Projects</h2>
        <p>Project cards will go here.</p>
      </section>

      <section id="playground">
        <h2>Playground</h2>

        <p className="count">{count}</p>

        <div className="row">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </section>
    </>
  );
}

export default App;
