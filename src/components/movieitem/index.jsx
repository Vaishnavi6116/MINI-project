import './index.css'
import {useNavigate} from 'react-router-dom'

const MovieItem = props => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${props.id}`)

    console.log('Movie clicked:', props.title)
    console.log('Movie id:', props.id)
  }

  return (
    <div
      className="movie-item"
      onClick={handleClick}
    >

      <img
        className="movie-poster"
        src={props.poster}
        alt={props.title}
      />

      <div className="movie-details">

        <h3>
          {props.title}
        </h3>

        <p>
          ⭐ {props.rating}
        </p>

      </div>

    </div>
  )
}

export default MovieItem