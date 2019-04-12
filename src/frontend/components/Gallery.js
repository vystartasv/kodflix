import React from "react";
import Stack from "./Stack";
// import { strictEqual } from "assert";
export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {shows: []}

    }

    componentWillMount() {
        let home = '';
        if (process.env.NODE_ENV === 'dev') {
            home = 'https://kodflix-by-vilius.herokuapp.com';
        } else if (process.env.NODE_ENV === 'prod') {
            const port = process.env.PORT || 5000;
            home = `http://localhost:${port}`;
        }
        fetch(`${home}/api/shows/`)
            .then(result => result.json())
            .then(data => this.setState({shows: data}));
    }

    render() {
        return (
            <div>
                <div className="container">
                    {

                        this.state.shows.map(stack => (
                            <Stack
                                key={stack.id}
                                id={stack.id}
                                title={stack.title}
                                cover={stack.cover}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}