import "./App.css";

function App() {
  return (
    <>
      <header className="top-nav">
        <div className="nav-brand">Prameswara</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">

          <div className="hero-bg"></div>

          <div className="hero-content">

            <div className="divider"></div>

            <div className="avatar">
              <img src="./profile.jpg" alt="Profile" />
            </div>

            <div className="hero-text-grid">
              <div className="left">
                <h1>Hi, I’m Prameswara.</h1>
                <p>
                  Student developer into software engineering, game design,
                  and interactive systems. I like figuring out how things connect.
                </p>
              </div>

              <div className="right">
                <h2>Contact</h2>
                <p>This site documents what I’m building and learning over time.</p>

                <div className="links">
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="cards">
            <div className="card">
              <h3>Project 1</h3>
              <p>Short description goes here.</p>
            </div>
            <div className="card">
              <h3>Project 2</h3>
              <p>Short description goes here.</p>
            </div>
            <div className="card">
              <h3>Project 3</h3>
              <p>Short description goes here.</p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">Put your email and socials here.</p>

          <div className="contact-box">
            <a href="mailto:u1558647@umail.utah.edu">u1558647@umail.utah.edu</a>
            <a href="https://github.com/thebambeh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/prameswara-wardhana/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;