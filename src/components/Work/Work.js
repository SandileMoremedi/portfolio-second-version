export default function Gallery() {
  return (
    <>
      <head>
        <title>Sandile Moremedi | Gallery</title>
      </head>
      <div className="gallery">
        <div className="info">
          <h1>The Gallery of Work</h1>
          <p>
            These are all the basic projects I have done in my free time to gain
            experience in both front-end and backend. As a result they are
            fundamental to my current status of skills.
          </p>
          <div className="gallery-items">
            <div className="item">
              <div className="item-image">
                <img
                  src="/portfolio-one.png"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://sandile-moremedi.netlify.app">
                    <span>Website</span>
                  </a>
                  <a href="https://github.com/SandileMoremedi/personal_portfolio">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src="/project.png" width="100%" height="auto" alt="" />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://crowful-project-masandza.netlify.app/">
                    <span>Website</span>
                  </a>
                  <a href="https://github.com/Ma-Sandza/crowdfunding-product-page-main">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src="/orange.png" width="100%" height="auto" alt="" />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://sunny-side-masandza.netlify.app/">
                    <span>Website</span>
                  </a>
                  <a href="https://github.com/Ma-Sandza/sunny-side-website">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/error.jpg" alt="phone" />
        </div>
      </div>
    </>
  );
}
