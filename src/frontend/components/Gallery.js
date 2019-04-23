import React from 'react';
import GalleryStack from './GalleryStack';
import LoadingIndicator from './LoadingIndicator';

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      isLoading: 'yes',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/shows/');
      const json = await response.json();
      this.setState({ shows: json, isLoading: 'no' });
    } catch (e) {
      alert('Failed to fetch data from the backend!');
    }
  }

  render() {
    if (this.state.isLoading === 'yes') {
      return <LoadingIndicator />;
    }
    return (
      <div className="container">
        {
          this.state.shows.map(show => (
            <GalleryStack
              key={show.id}
              id={show.id}
              title={show.title}
              cover={show.cover}
            />
          ))
        }
      </div>
    );
  }
}
