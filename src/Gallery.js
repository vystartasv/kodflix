import React from "react"
import Stack from "./Stack";
import alien from "./images/alien-poster-3-lareg.jpg";
import darkest from "./images/darkest-hour-poster2-large.jpg";
import dunkirk from "./images/dunkirkmain.jpg";
import disaster from "./images/disaster-artist-poster-2-xl.jpg";
import gold from "./images/gold-poste-uk.jpg";
import daddys from "./images/daddy-poster-2.jpg";
export default function Gallery() {
    return (
        <div>
            <div className="container">
                <Stack name="Daddy's Home 2" logo={daddys} />
                <Stack name="Darkest Hour" logo={darkest} />
                <Stack name="Dunkirk" logo={dunkirk} />
            </div>
            <div className="container">
                <Stack name="Disaster" logo={disaster} />
                <Stack name="Alien: Covenant" logo={alien} />
                <Stack name="Gold" logo={gold} />
            </div>
        </div>
    );
}