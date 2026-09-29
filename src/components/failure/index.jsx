import './index.css'

const HomeFailure = () => {
  const tryAgain = () => {
    window.location.reload()
  }

  return (
    <div className="home-failure">
      <div className="home-failure-content">
        <h1>Something went wrong</h1>

        <p>
          We are having trouble loading this page.
          <br />
          Please try again later.
        </p>

        <button type="button" onClick={tryAgain}>
          Try Again
        </button>
      </div>
    </div>
  )
}

export default HomeFailure