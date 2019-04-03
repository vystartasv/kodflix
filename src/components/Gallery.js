import React from "react"
import Stack from "./Stack";
import getGallery from '../dao/gallery-get.js';
// import { strictEqual } from "assert";
export default function Gallery() {
    return (
        <div>
            <div className="container">
            {
                getGallery().map(stack =>(
                    <Stack 
                        key={stack.id}
                        id={stack.id}
                        title={stack.title} 
                        cover={stack.cover} />
                ))
            }
            </div>
        </div>
    );
}