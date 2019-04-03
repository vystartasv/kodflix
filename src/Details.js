import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from "./gallery-get";

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        let name = this.props.match.params.details;
        console.log(name);
        let oneMovie = getGallery().find(movie => movie.id === name);

        console.log(oneMovie);

            this.setState({
                title : oneMovie.title,
                cover: oneMovie.cover
            });

    }

    render () {
        return (
            <div>
                <div><h1>{this.state.title}</h1></div>
                <div><img src={this.state.cover} alt={this.state.title}/></div>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}
