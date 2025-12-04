import React from "react";
import "./Blog.css";
import left_img from "@/assets/card-left.png";
import right_img from "@/assets/card-right.png";
import blog_blur from "@/assets/blog-blur.png";
import card_arrow from "@/assets/card-arrow.svg";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* TOP SECTION */}
        <div className="blog-top">
          <div className="blog-title">
            <h2>
              Blog <span>About</span> <br /> Personal Portfolio
            </h2>
          </div>

          <div className="blog-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>

            <button className="blog-view-btn">View All Blog</button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="blog-bottom">
          {/* LEFT BIG CARD */}
          <div className="blog-left">
            <div className="blog-card">
              <img src={left_img} alt="" className="blog-card-img" />

              <div className="blog-card-lower">
                <div className="blog-card-text">
                  <h5>Website</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <img src={card_arrow} alt="" className="blog-card-arrow" />
              </div>
            </div>
          </div>

          {/* RIGHT TWO CARDS */}
          <div className="blog-right">
            <div className="blog-card right-card">
              <img src={right_img} alt="" className="blog-card-img" />

              <div className="blog-card-lower">
                <div className="blog-card-text">
                  <h5>Website</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <img src={card_arrow} alt="" className="blog-card-arrow" />
              </div>
            </div>

            <div className="blog-card right-card">
              <img src={right_img} alt="" className="blog-card-img" />

              <div className="blog-card-lower">
                <div className="blog-card-text">
                  <h5>Website</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <img src={card_arrow} alt="" className="blog-card-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blur background */}
      {/* <img src={blog_blur} alt="" className="blog-blur" /> */}
    </section>
  );
};

export default Blog;
