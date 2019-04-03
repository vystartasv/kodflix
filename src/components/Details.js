import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from "../dao/gallery-get";
import NotFound from "./NotFound";

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        let name = this.props.match.params.details;
        let oneMovie = getGallery().find(movie => movie.id === name);
        if (oneMovie === undefined){
            this.setState({
                redirect: true
            });

        } else {
            this.setState({
                title: oneMovie.title,
                cover: oneMovie.cover
            });
        }

    }

    render () {


            if (this.state.redirect) {
                return <Redirect to='/not-found' />;
            } else {
                return (
                    <div>
                        <div><h1>{this.state.title}</h1></div>
                        <div><img src={this.state.cover} alt={this.state.title}/></div>
                        <Link to='/'>Back to home page</Link>
                    </div>
                );
            }
    }
}
