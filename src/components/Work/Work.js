export default function Gallery() {
  return (
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
              <img src="/portfolio-one.png" width="100%" height="auto" alt="" />
            </div>
            <div className="item-para">
              <div className="item-links">
                <span>Website</span>
                <span>Code</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="/project.png" width="100%" height="auto" alt="" />
            </div>
            <div className="item-para">
              <div className="item-links">
                <span>Website</span>
                <span>Code</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src="/orange.png" width="100%" height="auto" alt="" />
            </div>
            <div className="item-para">
              <div className="item-links">
                <span>Website</span>
                <span>Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/error.jpg" alt="phone" />
      </div>
    </div>
  );
}
