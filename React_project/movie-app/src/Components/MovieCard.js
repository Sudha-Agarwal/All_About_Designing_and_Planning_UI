import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className='card h-100'>
            <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>Rating:{movie.rating}</p>
                <p className='card-text'>Genre:{movie.genre_name}</p>
            </div>
        </div>
    )

}

export default MovieCard;