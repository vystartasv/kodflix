import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from "../dao/gallery-get";
import './Details.css';

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
        this.backendFetchingTest();
        if (oneMovie === undefined){
            this.setState({
                redirect: true
            });
        } else {
            this.setState({
                title: oneMovie.title,
                cover: oneMovie.cover,
                synopsis: oneMovie.synopsis
            });
        }
    }

    backendFetchingTest() {
        const port = process.env.PORT || 5000;
        const home = process.env.HOME || 'http://localhost';
        fetch(`${home}:${port}/api/shows`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
    }

    render () {


            if (this.state.redirect) {
                return <Redirect to='/not-found' />;
            } else {
                return [
                    <div>
                        <div className='details'>
                            <h1 className='title'>{this.state.title}</h1>
                            <div className='pictures'>
                                <h2 className='synopsis'>{this.state.synopsis}</h2>
                                <div className='coverPicture'>
                                    <img className='image' src={this.state.cover} alt={this.state.title}/>
                                </div>
                            </div>
                    </div>
                        <Link to='/'>Back to home page</Link>
                    </div>
                ];
            }
    }
}
