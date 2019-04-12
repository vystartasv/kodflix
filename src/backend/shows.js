exports.shows = (showId) => {
    const showList = [
        {
            "id": "daddys-home-2",
            "title": "Daddys Home Two",
            "cover": "daddy-poster-2",
            "synopsis": "After finally becoming friends at the end of the first 'Daddy's Home' film, Brad Whittaker (Will Ferrell) and Dusty Mayron (Mark Wahlberg) have a co-dad system where their two children, Megan and Dylan, take turns at each father's house. Dusty has also remarried, this time to Karen (Alexandra Ambrosio), a writer, and is stepdad to Adrianna, Karen's daughter."
        },
        {
            "id": "darkest",
            "title": "Darkest Hour",
            "cover": "darkest-hour-poster2-large",
            "synopsis": "In May 1940, a million German troops are at the Belgian Border with the intent to conquer the rest of Europe. In Britain, Parliament has lost faith in their current prime minister Neville Chamberlain (Ronald Pickup) and are already looking to find his replacement."
        },
        {
            "id": "dunkirk",
            "title": "Dunkirk",
            "cover": "dunkirkmain",
            "synopsis": "The film alternates between three different periods of time involving separate groups of people, leading up to their encounter at the Channel off the coast of Dunkirk, France. As such, the film follows a non-linear narrative."
        },
        {
            "id": "disaster-artist",
            "title": "Disaster Artist",
            "cover": "disaster-artist-poster-2-xl",
            "synopsis": "The film starts with a bunch of celebrities (Kristen Bell, Ike Barinholtz, Kevin Smith, Adam Scott, Lizzy Caplan, Keegan-Michael Key, JJ Abrams, and Danny McBride among others) talking about a particular movie that is incomparable, unlike anything they've seen before, and perhaps even a bit amazing. That movie is 'The Room'."
        },
        {
            "id": "alien-covenant",
            "title": "Alien: Covenant",
            "cover": "alien-poster-3-lareg",
            "synopsis": "In a prologue, business magnate Peter Weyland speaks with his newly activated android, who chooses the name 'David' after observing a replica of Michelangelo's statue of David. Weyland tells David that one day they will search for mankind's creator together. David comments on his own unlimited lifespan compared to his creator's limited one."
        },
        {
            "id": "gold",
            "title": "Gold",
            "cover": "gold-poste-uk",
            "synopsis": "Kenny Wells (Matthew McConaughey) is talking to his girlfriend, Kay (Bryce Dallas Howard) in his father's mining company, named Washoe. He explains how to mine for gold, using her purse. First he digs down with his hand and pulls out a nickel to simulate nickel; then comes up with a dime to simulate silver; then produces a gold watch and tells her what they're looking for is gold. She is ecstatic about the gift."
        }
    ];
    if (showId === undefined) {
        return showList;
    } else {
        return showList.find(show => show.id === showId);
    }

}
