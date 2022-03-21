function Freelancing() {
  return (
    <>
      <div className="freelancing" id="freelancing">
        <div className="info">
          <h1>Freelancing</h1>
          <p>
            These are all the website I have made during my freelancing journey,
            I only listed two because most of the other clients did not agree on
            me being able to showcase my work through their websites.
          </p>
          <div className="freelancing-terms">
            <div className="term">
              <h2>Step 1: Consultation</h2>
              <p>
                This is when we consider the items I need, the requirement you
                need. Talk about the charges of labour and combine ideas.
              </p>
            </div>
            <div className="term">
              <h2>Step 2: Proposal</h2>
              <p>
                With all the we have discussed I will provide you a statement of
                everything of the product and finalizing all your requirements.
              </p>
            </div>
            <div className="term">
              <h2>Step 3: Development</h2>
              <p>
                This will be the phase where I actually make your website and
                make it come to life.
              </p>
            </div>
            <div className="term">
              <h2>Step 4: Delivery</h2>
              <p>
                This is when I hand you your well earned website and all the
                contents, from the code, the logo I make if I made you one and
                etc.
              </p>
            </div>
          </div>
          <h1>Freelance website examples</h1>
          <div className="freelancing-items">
            <div className="item">
              <div className="item-image">
                <img
                  src="/lively-picnic.png"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://lively-picnics.vercel.app">
                    <span>Website</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src="/mryoungjoey.png" width="100%" height="auto" alt="" />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://mr-young-joey.netlify.app">
                    <span>Website</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src="/thecarheart.png" width="100%" height="auto" alt="" />
              </div>
              <div className="item-para">
                <div className="item-links">
                  <a href="https://thecarheart.vercel.app">
                    <span>Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freelancing;
