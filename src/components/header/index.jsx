import {useNavigate} from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const goToAccount = () => {
    navigate('/account')
  }

  return (
    <nav className="header">
      <div className="logo">
        NETFLIX
      </div>

      <div className="nav-links">
        <p onClick={() => navigate('/home')}>Home</p>
        <p onClick={() => navigate('/popular')}>Popular</p>
        <p onClick={() => navigate('/search')}>Search</p>
      </div>

      <div className="header-right">

        {/* Avatar */}
        <button
          type="button"
          className="avatar-button"
          onClick={goToAccount}
        >
          👤
        </button>

        {/* Subscribe */}
        <button
          type="button"
          className="subscribe-button"
          onClick={() => navigate('/subscribe')}
        >
          Subscribe
        </button>

      </div>
    </nav>
  )
}

export default Header