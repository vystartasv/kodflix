import React from 'react';
import {Link} from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={`/shows/${props.id}`} className="cover">
            {
                props.cover ?
                    <img src={require(`./../common/images/${props.cover}.jpg`)}
                         alt={props.title}/>
                    : null
            }
            <div className='overlay'>
                <h1>{props.title}</h1>
            </div>
        </Link>
    );
}
