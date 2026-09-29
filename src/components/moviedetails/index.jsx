import {useParams} from 'react-router-dom'
import './index.css'

import superman from '../../assets/superman.png'
import tomAndJerry from '../../assets/tom_jerry.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import alive from '../../assets/alive.png'
import allGirl from '../../assets/all_girl.png'
import green from '../../assets/green.png'
import pihu from '../../assets/pihu.png'
import panipat from '../../assets/panipat.png'
import pagglait from '../../assets/pagglait.png'
import pk from '../../assets/Pk.png'
import power from '../../assets/power.png'
import oxygen from '../../assets/oxygen.png'
import saw from '../../assets/saw.png'

// Extra movies
import waitMyYouth from '../../assets/with-my-youth.png'
import girlFriendIsAnAlien from '../../assets/girlfrnd.png'
import myGirl from '../../assets/mygirl.png'
import umb from '../../assets/umb.png'
import it from '../../assets/it.png'
import chopsticks from '../../assets/chopsticks.png'
import W from '../../assets/W.png'
import touchYourHeart from '../../assets/touchyourheart.png'

const movies = [
  {
    id: 1,
    title: 'Superman',
    image: superman,
    year: '2025',
    duration: '2h 10m',
    rating: '8.5',
    description:
      'A superhero story filled with action, adventure and excitement. Follow Superman on an unforgettable journey.',
    genres: ['Action', 'Adventure', 'Superhero'],
  },

  {
    id: 2,
    title: 'Tom and Jerry',
    image: tomAndJerry,
    year: '2021',
    duration: '1h 41m',
    rating: '8.2',
    description:
      'Tom and Jerry find themselves in another hilarious adventure filled with fun, chaos and friendship.',
    genres: ['Animation', 'Comedy', 'Family'],
  },

  {
    id: 3,
    title: 'Movie One',
    image: image1,
    year: '2023',
    duration: '2h',
    rating: '7.9',
    description:
      'An exciting story filled with unexpected events, challenges and memorable moments.',
    genres: ['Drama', 'Adventure'],
  },

  {
    id: 4,
    title: 'Movie Two',
    image: image2,
    year: '2023',
    duration: '2h 5m',
    rating: '8.1',
    description:
      'A fascinating story about friendship, challenges and unexpected adventures.',
    genres: ['Drama', 'Adventure'],
  },

  {
    id: 5,
    title: 'Movie Three',
    image: image3,
    year: '2024',
    duration: '1h 50m',
    rating: '7.8',
    description:
      'A story filled with friendship, challenges and unexpected moments.',
    genres: ['Drama', 'Comedy'],
  },

  {
    id: 6,
    title: 'Alive',
    image: alive,
    year: '2020',
    duration: '1h 38m',
    rating: '6.7',
    description:
      'A man struggles to survive alone while facing an unexpected situation.',
    genres: ['Drama', 'Thriller'],
  },

  {
    id: 7,
    title: 'All Girl',
    image: allGirl,
    year: '2021',
    duration: '1h 45m',
    rating: '7.7',
    description:
      'A story about friendship, relationships and the unexpected situations that bring people together.',
    genres: ['Drama', 'Comedy'],
  },

  {
    id: 8,
    title: 'Green',
    image: green,
    year: '2022',
    duration: '2h',
    rating: '8.0',
    description:
      'A mysterious story filled with adventure, drama and unexpected events.',
    genres: ['Drama', 'Adventure'],
  },

  {
    id: 9,
    title: 'Pihu',
    image: pihu,
    year: '2017',
    duration: '1h 33m',
    rating: '7.5',
    description:
      'A little girl finds herself alone at home and has to deal with a difficult situation.',
    genres: ['Drama', 'Thriller'],
  },

  {
    id: 11,
    title: 'Panipat',
    image: panipat,
    year: '2019',
    duration: '2h 53m',
    rating: '7.3',
    description:
      'A historical drama based around the Third Battle of Panipat.',
    genres: ['Historical', 'Drama', 'Action'],
  },

  {
    id: 12,
    title: 'Pagglait',
    image: pagglait,
    year: '2021',
    duration: '1h 54m',
    rating: '7.8',
    description:
      'A young widow begins discovering new things about herself and her family after a loss.',
    genres: ['Drama', 'Comedy'],
  },

  {
    id: 13,
    title: 'PK',
    image: pk,
    year: '2014',
    duration: '2h 33m',
    rating: '8.8',
    description:
      'An unusual visitor from another world questions the strange traditions and beliefs of human society.',
    genres: ['Comedy', 'Drama', 'Fantasy'],
  },

  {
    id: 14,
    title: 'Power',
    image: power,
    year: '2020',
    duration: '2h',
    rating: '7.6',
    description:
      'A powerful story about courage, determination and overcoming difficult challenges.',
    genres: ['Action', 'Drama'],
  },

  {
    id: 15,
    title: 'Oxygen',
    image: oxygen,
    year: '2021',
    duration: '1h 40m',
    rating: '7.2',
    description:
      'A suspenseful story where survival depends on making difficult decisions.',
    genres: ['Thriller', 'Drama'],
  },

  {
    id: 16,
    title: 'Saw',
    image: saw,
    year: '2004',
    duration: '1h 43m',
    rating: '8.0',
    description:
      'Two strangers wake up in a mysterious room and discover that they must survive a deadly game.',
    genres: ['Horror', 'Thriller'],
  },

  // Extra movies
  {
    id: 17,
    title: 'Wait My Youth',
    image: waitMyYouth,
    year: '2019',
    duration: '24 Episodes',
    rating: '8.1',
    description:
      'A young girl experiences friendship, love and beautiful moments while growing up.',
    genres: ['Drama', 'Romance', 'Youth'],
  },

  {
    id: 18,
    title: 'My Girlfriend Is an Alien',
    image: girlFriendIsAnAlien,
    year: '2019',
    duration: '28 Episodes',
    rating: '8.2',
    description:
      'A mysterious alien girl arrives on Earth and finds herself involved in an unusual romantic story.',
    genres: ['Romance', 'Comedy', 'Fantasy'],
  },

  {
    id: 19,
    title: 'My Girl',
    image: myGirl,
    year: '2020',
    duration: '2h',
    rating: '7.1',
    description:
      'A romantic story about friendship, relationships and finding someone special.',
    genres: ['Romance', 'Drama'],
  },

  {
    id: 20,
    title: 'UMB',
    image: umb,
    year: '2021',
    duration: '2h',
    rating: '7.0',
    description:
      'A story filled with unexpected events and interesting characters.',
    genres: ['Drama', 'Action'],
  },

  {
    id: 21,
    title: 'It',
    image: it,
    year: '2017',
    duration: '2h 15m',
    rating: '7.3',
    description:
      'A group of children face a terrifying creature that returns to their town.',
    genres: ['Horror', 'Drama', 'Thriller'],
  },

  {
    id: 22,
    title: 'Chopsticks',
    image: chopsticks,
    year: '2019',
    duration: '1h 40m',
    rating: '6.5',
    description:
      'A young woman gets involved in an unexpected adventure while trying to recover something valuable.',
    genres: ['Comedy', 'Drama'],
  },

  {
    id: 23,
    title: 'W',
    image: W,
    year: '2021',
    duration: '2h',
    rating: '7.0',
    description:
      'A mysterious story filled with drama and unexpected events.',
    genres: ['Drama', 'Thriller'],
  },

  {
    id: 24,
    title: 'Touch Your Heart',
    image: touchYourHeart,
    year: '2019',
    duration: '16 Episodes',
    rating: '8.0',
    description:
      'A romantic comedy about an actress who works as a secretary while preparing for a role.',
    genres: ['Romance', 'Comedy'],
  },
]

const MovieDetails = () => {
  const {id} = useParams()

  const movie = movies.find(item => item.id === Number(id))

  if (!movie) {
    return (
      <div className="movie-not-found">
        <h1>Movie Not Found</h1>
      </div>
    )
  }

  return (
    <div className="movie-details-page">
      {/* Hero Section */}
      <div
        className="movie-hero"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <div className="hero-overlay">
          <div className="movie-content">
            <h1>{movie.title}</h1>

            <div className="movie-info">
              <span>{movie.duration}</span>

              <span className="age">U/A</span>

              <span>{movie.year}</span>
            </div>

            <p>{movie.description}</p>

            <button type="button" className="play-button">
              ▶ Play
            </button>
          </div>
        </div>
      </div>

      {/* Movie Information */}
      <div className="movie-information">
        <div className="info-column">
          <h3>Genres</h3>

          {movie.genres.map(genre => (
            <p key={genre}>{genre}</p>
          ))}
        </div>

        <div className="info-column">
          <h3>Audio Available</h3>

          <p>Telugu</p>
          <p>English</p>
          <p>Hindi</p>
        </div>

        <div className="info-column">
          <h3>Rating</h3>

          <p>⭐ {movie.rating}</p>
        </div>

        <div className="info-column">
          <h3>Movie</h3>

          <p>{movie.title}</p>
        </div>

        <div className="info-column">
          <h3>Release Year</h3>

          <p>{movie.year}</p>
        </div>
      </div>

      {/* More Like This */}
      <section className="similar-section">
        <h2>More like this</h2>

        <div className="similar-movies">
          {movies
            .filter(item => item.id !== movie.id)
            .slice(0, 6)
            .map(item => (
              <div className="similar-card" key={item.id}>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default MovieDetails