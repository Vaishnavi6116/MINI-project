import './index.css'

const SomethingWentWrong = () => {
  return (
    <div className="something-wrong">

      <div className="something-wrong-content">

        <h1>
          Something went wrong
        </h1>

        <p>
          We are having trouble loading this page.
          Please try again later.
        </p>

        <button
          className="try-again-button"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>

      </div>

    </div>
  )
}

export default SomethingWentWrong