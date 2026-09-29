import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
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

import waitMyYouth from '../../assets/with-my-youth.png'
import girlFriendIsAnAlien from '../../assets/girlfrnd.png'
import myGirl from '../../assets/mygirl.png'
import umb from '../../assets/umb.png'
import it from '../../assets/it.png'
import chopsticks from '../../assets/chopsticks.png'
import W from '../../assets/W.png'
import touchYourHeart from '../../assets/touchyourheart.png'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const movies = [
    {
      id: 1,
      title: 'Superman',
      image: superman,
    },
    {
      id: 2,
      title: 'Tom and Jerry',
      image: tomAndJerry,
    },
    {
      id: 3,
      title: 'Movie One',
      image: image1,
    },
    {
      id: 4,
      title: 'Movie Two',
      image: image2,
    },
    {
      id: 5,
      title: 'Movie Three',
      image: image3,
    },
    {
      id: 6,
      title: 'Alive',
      image: alive,
    },
    {
      id: 7,
      title: 'All Girl',
      image: allGirl,
    },
    {
      id: 8,
      title: 'Green',
      image: green,
    },
    {
      id: 9,
      title: 'Pihu',
      image: pihu,
    },
    {
      id: 11,
      title: 'Panipat',
      image: panipat,
    },
    {
      id: 12,
      title: 'Pagglait',
      image: pagglait,
    },
    {
      id: 13,
      title: 'PK',
      image: pk,
    },
    {
      id: 14,
      title: 'Power',
      image: power,
    },
    {
      id: 15,
      title: 'Oxygen',
      image: oxygen,
    },
    {
      id: 16,
      title: 'Saw',
      image: saw,
    },

    // Extra movies
    {
      id: 17,
      title: 'Wait My Youth',
      image: waitMyYouth,
    },
    {
      id: 18,
      title: 'My Girlfriend Is an Alien',
      image: girlFriendIsAnAlien,
    },
    {
      id: 19,
      title: 'My Girl',
      image: myGirl,
    },
    {
      id: 20,
      title: 'UMB',
      image: umb,
    },
    {
      id: 21,
      title: 'It',
      image: it,
    },
    {
      id: 22,
      title: 'Chopsticks',
      image: chopsticks,
    },
    {
      id: 23,
      title: 'W',
      image: W,
    },
    {
      id: 24,
      title: 'Touch Your Heart',
      image: touchYourHeart,
    },
  ]

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase()),
  )

  const handleMovieClick = id => {
    navigate(`/movie/${id}`)
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="search-title">Search Movies</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
          />

          <button type="button">Search</button>
        </div>

        {searchText === '' ? (
          <p className="search-message">
            Start typing to search for movies
          </p>
        ) : filteredMovies.length === 0 ? (
          <p className="search-message">
            No movies found
          </p>
        ) : (
          <div className="search-grid">
            {filteredMovies.map(movie => (
              <div
                className="search-card"
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search