import React from "react";

function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="info">
          <h1>Contact</h1>
          <div className="form-parent">
            <form
              action="https://formsubmit.co/sandilemoremedi070501@gmail.com"
              method="post"
              className="form"
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Please Add Your Name"
                required
                name="name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Please Enter Your Email"
                required
                name="Email"
              />
              <label htmlFor="comment">Comment</label>
              <textarea
                id=""
                cols="30"
                rows="10"
                required
                placeholder="Please Say What You Need To..."
                name="Comment"
              ></textarea>
              <button type="submit">Send</button>
            </form>
            <div className="right">
              <h2>Have a project you want to work with me?</h2>
              <p>
                There are multiple ways in this page from Twitter, Github,
                contact form. So don't be shy.
              </p>
              <div className="details">
                <div className="detail">
                  <i className="fa-solid fa-phone"></i>Phone Number: +27 64 241
                  9022
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
        </div>
      </div>
    </>
  );
}

export default Contact;

// https://www.patreon.com/sandilemoremedi
