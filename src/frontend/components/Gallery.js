import React from 'react';
import Stack from './Stack';
import LoadingIndicator from './LoadingIndicator';

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      isLoading: 'yes',
    };
  }

  componentDidMount() {
    fetch('/api/shows/')
      .then(result => result.json())
      .then(data => this.setState({ shows: data, isLoading: 'no' }));
  }

  render() {
    if (this.state.isLoading === 'yes') {
      return <LoadingIndicator />;
    }
    return (
      <div>
        <div className="container">
          {
            this.state.shows.map(stack => (
              <Stack
                key={stack.id}
                id={stack.id}
                title={stack.title}
                cover={stack.cover}
              />
            ))
                        }
        </div>
      </div>
    );
  }
}
