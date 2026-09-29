import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username === 'rahul' && password === 'rahul@2021') {
      setError('')
      navigate('/home')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-page">

      <h1 className="movies-logo">MOVIES</h1>

      <div className="login-box">

        <h2 className="login-title">Login</h2>

        <div className="input-container">
          <label htmlFor="username">USERNAME</label>

          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">PASSWORD</label>

          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login