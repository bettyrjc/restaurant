import React from "react";

function favorites(props) {
  const { title } = props;
  return (
    <div className="favorites">
      <h1 className="favorites-title">{title}</h1>
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
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
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
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text
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
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
    </div>
  );
}
export default favorites;
