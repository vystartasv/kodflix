import React from 'react';
import {Link} from "react-router-dom";
export default function NotFound() {
    return (
        <div>
            <h1>Ooops, it looks like this page doesn't exist :()</h1>
            <Link to='/'>Come back to home page</Link>
        </div>
    );

}