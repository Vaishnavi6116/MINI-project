import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './components/login'
import Home from './components/home'
import Popular from './components/popular'
import Search from './components/search'
import Accounts from './components/accounts'
import Sub from './components/sub'
import Header from './components/header'
import MovieDetails from './components/moviedetails'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

const App = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Home */}
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* Popular */}
      <Route
        path="/popular"
        element={
          <Layout>
            <Popular />
          </Layout>
        }
      />

      {/* Search */}
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />

      {/* Account */}
      <Route
        path="/account"
        element={
          <Layout>
            <Accounts />
          </Layout>
        }
      />

      {/* Subscribe */}
      <Route
        path="/subscribe"
        element={
          <Layout>
            <Sub />
          </Layout>
        }
      />

      {/* ⭐ Movie Details */}
      <Route
        path="/movie/:id"
        element={
          <Layout>
            <MovieDetails />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App