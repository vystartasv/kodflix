import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryStack(props) {
  return (
    <div>
      {
        props.id
          ? (
            <Link to={`/shows/${props.id}`} className="cover">
              <img
                src={require(`./../common/images/${props.cover}.jpg`)}
                alt={props.title}
              />
              <div className="overlay">
                <h1>{props.title}</h1>
              </div>
            </Link>
          )
          : null
      }
    </div>
  );
}
