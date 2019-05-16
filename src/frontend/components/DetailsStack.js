import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailsStack(props) {
  return (
    <div>
      {
        props.id
          ? (
            <div className="details">
              <h1 className="title">{props.title}</h1>
              <div className="pictures">
                <h2 className="synopsis">{props.synopsis}</h2>
                <div className="coverPicture">
                  <img className="image" src={require(`./../common/images/${props.cover}.jpg`)} alt={props.title} />
                </div>
              </div>
              <Link to="/">Back to home page</Link>
            </div>
          )
          : null
      }
    </div>
  );
}
