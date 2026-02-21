function About() {
  return (
    <section id="about" className="about-section">
      {/* Background image layer */}
      <div className="about-bg"></div>

      {/* Content card */}
      <div className="about-card">
        {/* Profile picture */}
        <div className="profile-wrapper">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-pic"
          />
        </div>

        {/* Left text */}
        <div className="about-left">
          <h3>About Me</h3>
          <p>
            I’m a student developer interested in software engineering, game
            design, and interactive systems. I enjoy understanding how things
            connect under the hood instead of treating tools as black boxes.
          </p>
        </div>

        {/* Right text / links */}
        <div className="about-right">
          <p>
            This site documents what I’m building and learning over time.
          </p>

          <div className="about-links">
            <a href="#projects">Projects</a>
            <a href="#playground">Playground</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
