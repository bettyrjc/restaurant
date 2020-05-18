import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import icons from "../components/styles/img/sprite.svg";
import { getBlogs } from "../actions/blogActions";
class Blog extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { blogs } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main class="container blog-container">
          <div class="change">
            <Link to="./blogGrilla">
              <svg class="header-menuicon-icon change-icon">
                <use href={`${icons}#icon-sweden`}></use>
              </svg>
            </Link>
          </div>
          <div class="blog-list">
            {blogs.map((blog) =>
              blog.albumId === 1 ? (
                <div class="cards-card blog-list-card" key={blog.id}>
                  <div class="cards-card-image blog-list-card-image">
                    <img src={blog.url} alt={blog.title} />
                  </div>
                  <div class="cards-card-box">
                    <h3 class="cards-card-box-title">{blog.title}</h3>

                    <p class="cards-card-box-text">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leaps
                    </p>

                    <div class="cards-card-box-calification">
                      <h3 class="cards-card-box-secondary">Clasificacion</h3>
                      <div class="cards-card-box-calification-stars">
                        <svg class="cards-card-box-calification-stars-icon">
                          <use href={`${icons}#icon-star`}></use>
                        </svg>
                        <svg class="cards-card-box-calification-stars-icon">
                          <use href={`${icons}#icon-star`}></use>
                        </svg>
                        <svg class="cards-card-box-calification-stars-icon">
                          <use href={`${icons}#icon-star`}></use>
                        </svg>
                        <svg class="cards-card-box-calification-stars-icon">
                          <use href={`${icons}#icon-star`}></use>
                        </svg>
                        <svg class="cards-card-box-calification-stars-icon">
                          <use href={`${icons}#icon-star`}></use>
                        </svg>
                      </div>
                    </div>

                    <div class="cards-card-box-btns blog-list-card-btns">
                      <button class="cards-card-box-btns-btn fill blog-list-card-btn">
                        Leer mas
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
Blog.protoTypes = {
  blogs: PropTypes.object.isRequired,
  getBlogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  blogs: state.blog.blogs,
});

export default connect(mapStateToProps, { getBlogs })(Blog);
