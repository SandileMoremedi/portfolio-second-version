export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="info">
          <div className="top">
            <div className="text">
              <h1>Sandile Moremedi</h1>
              <p>
                I am Sandile Moremedi. I am an experienced web developer, and
                soccer player. I put my passion into my projects and love into
                my freelance work.
                <br />
                My goal is to make projects that help others and websites that
                give businesses the needed push for displaying their abilities
                and experiences.
                <br />
                So if you need to see my projects, head to the gallery page.
                Wanna see my freelance work, head to the freelancing page. If
                you're impressed contact me and let's work together.
              </p>
              <div className="explore">
                <a href="#about">
                  <button>Find Out More</button>
                </a>
              </div>
            </div>
            <div className="image">
              <img src="/11_Success-1.jpg" alt="" />
            </div>
          </div>

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
      </div>
    </>
  );
}
