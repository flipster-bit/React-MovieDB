import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			<div className='container'>
				<div className='row' >
					{props.movies.map((movie, index) => (
						<div className='image-container  justify-content-start m-3 col-xs-3' key={index}>
							<img src={movie.Poster} alt='movie'></img>
							<div
								onClick={() => props.handleFavouritesClick(movie)}
								className='overlay align-items-center justify-content-center '
							>
								<FavouriteComponent />
							</div>
						</div>	
					))}
				</div>
			</div>
		</>
	);
};

export default MovieList;
