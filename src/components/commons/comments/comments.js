import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getComments } from "../../actions/commentsActions";
class Comments extends Component {
  state = {
    src: ["https://m.eldiario.es/fotos/Foto-Pixabay_EDIIMA20190930_0672_4.jpg"],
  };
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const { src } = this.state;
    const { comments } = this.props;
    return (
      <div className="comments">
        <h3 className="comments-title">Comentarios</h3>
        {comments.map((comment) =>
          comment.postId === 1 ? (
            <div className="comment" key={comment.id}>
              <div className="comment-imgs">
                <img src={src[0]} alt={comment.name} className="comment-img" />
              </div>
              <div className="comment-description">
                <div className="comment-description-box">
                  <h3>{comment.name}</h3>
                  <p>Publicado hace un mes</p>
                </div>
                <p className="comment-description-text">{comment.body}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

Comments.protoTypes = {
  comments: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  comments: state.comment.comments,
});

export default connect(mapStateToProps, { getComments })(Comments);
