import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    const { update } = this.props;
    let unwatched = [];
    movies.forEach((movie) => {
      if (movie.watched === 0) {
        unwatched.push(movie);
      }
    });
    return (
      <div id="movie-list">
        {unwatched.map((movie, i) =>
          <MovieListEntry
            key={movie + i}
            movie={movie}
            update={update}
          />
        )}
      </div>
    );
  }
}

export default MovieList;

