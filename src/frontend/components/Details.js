import React from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css';
import DetailsStack from './DetailsStack';
import LoadingIndicator from './LoadingIndicator';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      redirect: false,
      isLoading: 'yes',
    };
  }

  async componentDidMount() {
    try {
      const name = this.props.match.params.details;
      const response = await fetch(`/api/shows/${name}`);
      const json = await response.json();
      await json.length === 0
        ? this.setState({ redirect: true, isLoading: 'no' })
        : this.setState({ shows: json, isLoading: 'no' });
    } catch (e) {
      alert('Failed to fetch data from the backend!');
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/not-found" />;
    } if (this.state.isLoading === 'yes') {
      return <LoadingIndicator />;
    }
    return (
      <div>
        {
          this.state.shows.map(show => (
            <DetailsStack
              id={show.id}
              title={show.title}
              cover={show.cover}
              synopsis={show.synopsis}
            />
          ))
        }
      </div>
    );
  }
}
