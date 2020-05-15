import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
//
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import FoodCard from "../card/foodCard";
import { getFood } from "../../actions/foodActions";
class Food extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFood(id);
  }

  render() {
    const { food } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <FoodCard food={food} />

          <div className="similares"></div>
          <div className="favorites">
            <h1 className="favorites-title">Te provoca</h1>
            <div className="favorites-container">
              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </p>
              </div>

              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
              </div>

              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since
                </p>
              </div>
            </div>
          </div>
          <div className="comments">
            <h3 className="comments-title">Comentarios</h3>
            <div className="comment">
              <div className="comment-imgs">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf&usqp=CAU"
                  alt="usuario"
                  className="comment-img"
                />
              </div>
              <div className="comment-description">
                <div className="comment-description-box">
                  <h3>Nombre del usuario</h3>
                  <p>Publicado hace un mes</p>
                </div>
                <p className="comment-description-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer too
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-imgs">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf&usqp=CAU"
                  alt="usuario"
                  className="comment-img"
                />
              </div>
              <div className="comment-description">
                <div className="comment-description-box">
                  <h3>Nombre del usuario</h3>
                  <p>Publicado hace un mes</p>
                </div>
                <p className="comment-description-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer too
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-imgs">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf&usqp=CAU"
                  alt="usuario"
                  className="comment-img"
                />
              </div>
              <div className="comment-description">
                <div className="comment-description-box">
                  <h3>Nombre del usuario</h3>
                  <p>Publicado hace un mes</p>
                </div>
                <p className="comment-description-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer too
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
Food.protoTypes = {
  food: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  food: state.food.food,
});

export default connect(mapStateToProps, { getFood })(Food);
