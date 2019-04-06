import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={`/${props.id}`} className="cover">
            <img src={props.cover} alt={props.title} />
            <div className='overlay'>
                <h1>{props.title}</h1>
            </div>
        </Link>
    );
}
