import React, { Component } from "react";
import PropTypes from "prop-types";
class WorkerCard extends Component {
  render() {
    const { name } = this.props.user;
    return (
      <div className="workers-box">
        <div className="workers-box-img">
          <img
            src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
            alt="favorito"
          />
        </div>
        <h3 className="workers-box-title">Chef</h3>
        <h3 className="workers-box-text">{name}</h3>
      </div>
    );
  }
}
WorkerCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default WorkerCard;
