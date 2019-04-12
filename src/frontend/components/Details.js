import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Details.css';


export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }

    }

    componentWillMount() {
        let home = '';
        if (process.env.NODE_ENV === 'dev') {
            home = 'https://kodflix-by-vilius.herokuapp.com';
        } else if (process.env.NODE_ENV === 'prod') {
            const port = process.env.PORT || 5000;
            home = `http://localhost:${port}`;
        }
        let name = this.props.match.params.details;
        fetch(`${home}/api/shows/${name}`)
            .then(result => {

                return result.json().then(data => {
                    return this.setState({
                        key: data.id,
                        id: data.id,
                        title: data.title,
                        cover: data.cover,
                        synopsis: data.synopsis
                    });
                });

            })
            .catch(e => this.setState({redirect: true}));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/not-found'/>;
        } else {
            return [
                <div>
                    <div className='details'>
                        <h1 className='title'>{this.state.title}</h1>
                        <div className='pictures'>
                            <h2 className='synopsis'>{this.state.synopsis}</h2>
                            <div className='coverPicture'>\
                                {
                                    this.state.cover ?
                                        <img className='image'
                                             src={require(`./../common/images${this.state.cover}.jpg`)}
                                             alt={this.state.title}/>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                    <Link to='/'>Back to home page</Link>
                </div>
            ];
        }
    }
}
