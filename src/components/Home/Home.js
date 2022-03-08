export default function Home() {
  return (
    <div className="home">
      <head>
        <title>Sandile Moremedi | Home</title>
      </head>
      <div className="info">
        <h1>Sandile Moremedi</h1>
        <p>
          I am Sandile Moremedi. I am an experienced full-stack web developer,
          UI/UX designer, and soccer player. I put my passion into my projects
          and love into my freelance work.
        </p>
        <p>
          My goal is to make projects that help others and websites that give
          businesses the needed push for displaying their abilities and
          experiences.
        </p>
        <p>
          So if you need to see my projects, head to the gallery page. Wanna see
          my freelance work, head to the freelancing page. If you're impressed
          contact me and let's work together.
        </p>

        <div className="icons">
          <a href="https://twitter.com/masandza_1">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/SandileMoremedi">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/sandilemoremedi70">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="image">
        <img src="/soccer.jpg" alt="soccer" />
      </div>
    </div>
  );
}
