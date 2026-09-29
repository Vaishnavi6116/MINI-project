import {useRef} from 'react'
import MovieItem from '../movieitem'
import './index.css'

import supermanImage from '../../assets/superman.png'
import tomAndJerryImage from '../../assets/tom_jerry.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import aliveImage from '../../assets/alive.png'
import allGirlImage from '../../assets/all_girl.png'
import greenImage from '../../assets/green.png'
import heroImage from '../../assets/hero.png'
import pihuImage from '../../assets/pihu.png'
import panipatImage from '../../assets/panipat.png'
import pagglaitImage from '../../assets/pagglait.png'
import pkImage from '../../assets/Pk.png'
import powerImage from '../../assets/power.png'
import oxygenImage from '../../assets/oxygen.png'
import sawImage from '../../assets/saw.png'

const trendingMovies = [
  {
    id: 1,
    title: 'Superman',
    rating: 8.5,
    poster: supermanImage,
  },
  {
    id: 2,
    title: 'Tom and Jerry',
    rating: 8.2,
    poster: tomAndJerryImage,
  },
  {
    id: 3,
    title: 'Movie One',
    rating: 7.9,
    poster: image1,
  },
  {
    id: 4,
    title: 'Movie Two',
    rating: 8.1,
    poster: image2,
  },
  {
    id: 5,
    title: 'Movie Three',
    rating: 7.8,
    poster: image3,
  },
]

const originalMovies = [
  {
    id: 6,
    title: 'Alive',
    rating: 8.4,
    poster: aliveImage,
  },
  {
    id: 7,
    title: 'All Girl',
    rating: 7.7,
    poster: allGirlImage,
  },
  {
    id: 8,
    title: 'Green',
    rating: 8.0,
    poster: greenImage,
  },
  {
    id: 9,
    title: 'Pihu',
    rating: 7.5,
    poster: pihuImage,
  },
]

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

const Home = () => {
  const trendingRef = useRef(null)
  const originalRef = useRef(null)
  const popularRef = useRef(null)

  const scrollLeft = ref => {
    if (ref.current) {
      ref.current.scrollLeft -= 500
    }
  }

  const scrollRight = ref => {
    if (ref.current) {
      ref.current.scrollLeft += 500
    }
  }

  const renderMovies = movies => (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          poster={movie.poster}
        />
      ))}
    </div>
  )

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-title">NETFLIX ORIGINAL</p>

          <h1 className="hero-title">Superman</h1>

          <p className="hero-description">
            A superhero story filled with action, adventure and excitement.
            Watch Superman and discover an unforgettable journey.
          </p>

          <div className="hero-buttons">
            <button type="button" className="play-button">
              ▶ Play
            </button>

            <button type="button" className="info-button">
              ⓘ More Info
            </button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="movies-section">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>

          <div className="scroll-buttons">
            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollLeft(trendingRef)}
            >
              ❮
            </button>

            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollRight(trendingRef)}
            >
              ❯
            </button>
          </div>
        </div>

        <div className="movie-scroll-container" ref={trendingRef}>
          {renderMovies(trendingMovies)}
        </div>
      </section>

      {/* Netflix Originals */}
      <section className="movies-section">
        <div className="section-header">
          <h2 className="section-title">Netflix Originals</h2>

          <div className="scroll-buttons">
            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollLeft(originalRef)}
            >
              ❮
            </button>

            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollRight(originalRef)}
            >
              ❯
            </button>
          </div>
        </div>

        <div className="movie-scroll-container" ref={originalRef}>
          {renderMovies(originalMovies)}
        </div>
      </section>

      {/* Popular Section */}
      <section className="movies-section">
        <div className="section-header">
          <h2 className="section-title">Popular Movies</h2>

          <div className="scroll-buttons">
            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollLeft(popularRef)}
            >
              ❮
            </button>

            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollRight(popularRef)}
            >
              ❯
            </button>
          </div>
        </div>

        <div className="movie-scroll-container" ref={popularRef}>
          {renderMovies(popularMovies)}
        </div>
      </section>
    </div>
  )
}

export default Home