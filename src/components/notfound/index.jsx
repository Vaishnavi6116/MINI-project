import {useNavigate} from 'react-router-dom'
import './index.css'

import notFoundImage from '../../assets/notfound.png'

const NotFound = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <div
      className="not-found-page"
      style={{
        backgroundImage: `url(${notFoundImage})`,
      }}
    >

      <div className="not-found-overlay">

        <div className="not-found-container">

          <h1 className="not-found-number">
            404
          </h1>

          <h2>
            Lost your way?
          </h2>

          <p>
            Sorry, we can't find that page.
            <br />
            You'll find lots to explore on the home page.
          </p>

          <button
            className="home-button"
            onClick={goHome}
          >
            Go to Home
          </button>

        </div>

      </div>

    </div>
  )
}

export default NotFound