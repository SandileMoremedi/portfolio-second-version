import React from "react";

function Freelancing() {
  return (
    <div className="freelancing">
      <div className="info">
        <h1>Freelancing</h1>
        <p>
          These are all the website I have made during my freelancing journey, I
          only listed two because most of the other clients did not agree on me
          being able to showcase my work through their websites.
        </p>
        <div className="freelancing-items">
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
              <img src="/joey.png" width="100%" height="auto" alt="" />
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
              <img src="/the-car-heart.png" width="100%" height="auto" alt="" />
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
        <img src="/mountains.jpg" alt="mountain landscape" />
      </div>
    </div>
  );
}

export default Freelancing;
