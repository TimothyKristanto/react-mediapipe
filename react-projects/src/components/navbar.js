import { BrowserRouter, Link } from 'react-router-dom'
import '../App.css'
import { useState } from 'react'

const Navbar = () => {
  const [page, setPage] = useState(window.location.pathname.toString())

  const goToHomePage = () => {
    setPage('/')
  }

  const goToProjectPage = () => {
    setPage('/project')
  }

  if (page === '/') {
    return (
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center rounded-bottom-only">
        <BrowserRouter basename="/" />
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link to="/" className="text-decoration-none">
              <button
                onClick={goToHomePage}
                className="btn btn-outline-warning rounded-pill active text-dark"
              >
                <span className="text-dark fw-bold">Home</span>
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="text-decoration-none">
              <button
                onClick={goToProjectPage}
                className="btn btn-outline-warning rounded-pill"
              >
                <span className="fw-bold">Project</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center rounded-bottom-only">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link to="/" className="text-decoration-none">
              <button
                onClick={goToHomePage}
                className="btn btn-outline-warning rounded-pill"
              >
                <span className="fw-bold">Home</span>
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="text-decoration-none">
              <button
                onClick={goToProjectPage}
                className="btn btn-outline-warning rounded-pill active "
              >
                <span className="text-dark fw-bold">Project</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
