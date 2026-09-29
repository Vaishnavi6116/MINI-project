
import {useNavigate} from 'react-router-dom'
import './index.css'

const Account = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="account-page">

      <div className="account-container">

        <h1 className="account-title">
          Account
        </h1>

        <div className="profile-section">

          <div className="profile-icon">
            👤
          </div>

          <div className="profile-details">
            <h2>Rahul</h2>
            <p>rahul@example.com</p>
          </div>

        </div>

        <div className="account-section">

          <h3>
            Account Details
          </h3>

          <div className="account-item">
            <span>Username</span>
            <span>rahul</span>
          </div>

          <div className="account-item">
            <span>Email</span>
            <span>rahul@example.com</span>
          </div>

          <div className="account-item">
            <span>Membership</span>
            <span>Premium</span>
          </div>

        </div>

        <div className="account-section">

          <h3>
            Settings
          </h3>

          <div className="setting-item">
            <span>Language</span>
            <span>English</span>
          </div>

          <div className="setting-item">
            <span>Playback Settings</span>
            <span>Auto</span>
          </div>

        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Account