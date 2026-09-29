import {useRef} from 'react'
import MovieItem from '../movieitem'
import './index.css'

import panipatImage from '../../assets/panipat.png'
import pagglaitImage from '../../assets/pagglait.png'
import pkImage from '../../assets/Pk.png'
import powerImage from '../../assets/power.png'
import oxygenImage from '../../assets/oxygen.png'
import sawImage from '../../assets/saw.png'

const popularMovies = [
  {
    id: 11,
    title: 'Panipat',
    rating: 7.3,
    poster: panipatImage,
  },
  {
    id: 12,
    title: 'Pagglait',
    rating: 7.8,
    poster: pagglaitImage,
  },
  {
    id: 13,
    title: 'PK',
    rating: 8.8,
    poster: pkImage,
  },
  {
    id: 14,
    title: 'Power',
    rating: 7.6,
    poster: powerImage,
  },
  {
    id: 15,
    title: 'Oxygen',
    rating: 7.2,
    poster: oxygenImage,
  },
  {
    id: 16,
    title: 'Saw',
    rating: 8.0,
    poster: sawImage,
  },
]

const Popular = () => {
  const popularRef = useRef(null)

  const scrollLeft = () => {
    if (popularRef.current) {
      popularRef.current.scrollLeft -= 500
    }
  }

  const scrollRight = () => {
    if (popularRef.current) {
      popularRef.current.scrollLeft += 500
    }
  }

  return (
    <div className="popular-container">
      <div className="popular-header">
        <div>
          <p className="popular-small-title">NETFLIX</p>

          <h1 className="popular-title">Popular Movies</h1>

          <p className="popular-description">
            Explore some of the most popular movies available on Netflix.
          </p>
        </div>

        <div className="scroll-buttons">
          <button
            type="button"
            className="scroll-button"
            onClick={scrollLeft}
          >
            ❮
          </button>

          <button
            type="button"
            className="scroll-button"
            onClick={scrollRight}
          >
            ❯
          </button>
        </div>
      </div>

      <div
        className="popular-movie-scroll-container"
        ref={popularRef}
      >
        <div className="popular-movie-list">
          {popularMovies.map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              poster={movie.poster}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular