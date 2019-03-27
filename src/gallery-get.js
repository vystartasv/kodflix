import alien from "./images/alien-poster-3-lareg.jpg";
import darkest from "./images/darkest-hour-poster2-large.jpg";
import dunkirk from "./images/dunkirkmain.jpg";
import disaster from "./images/disaster-artist-poster-2-xl.jpg";
import gold from "./images/gold-poste-uk.jpg";
import daddys from "./images/daddy-poster-2.jpg";

export default function getGallery(){
    return [
        {id:'daddys-home-2', title:"Daddy's Home 2", cover: daddys},
        {id:'darkest', title:'Darkest Hour', cover: darkest},
        {id:'dunkirk', title:'Dunkirk', cover: dunkirk},
        {id:'disaster-artist', title:'Disaster Artist', cover: disaster},
        {id:'alien-covenant', title:'Alien: Covenant', cover: alien},
        {id:'gold', title: 'Gold', cover: gold}
    ];
}