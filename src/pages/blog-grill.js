import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import icons from "../components/styles/img/sprite.svg";
import { getBlogs } from "../components/actions/blogActions";
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
            <Link to="./blog">
              <svg class="header-menuicon-icon change-icon">
                <use href={`${icons}#icon-sweden`}></use>
              </svg>
            </Link>
          </div>
          <div class="categories-grilla blog-grill">
            {blogs.map((blog) =>
              blog.albumId === 1 ? (
                <div class="categories-box blog-grill-box" key={blog.id}>
                  <div class="categories-box-img">
                    <img src={blog.url} alt={blog.title} />
                  </div>
                  <div className="categories-box-text blog-grill-box-text">
                    <h2>{blog.title}</h2>
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry.
                    </p>
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
