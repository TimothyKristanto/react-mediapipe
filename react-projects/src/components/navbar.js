import { BrowserRouter, Link } from 'react-router-dom'
import '../App.css'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

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
      <div>
        <nav className="navbar navbar-expand-sm bg-dark rounded-bottom-only">
          <BrowserRouter basename="/" />
          <a href="/" className="navbar-brand mx-3 text-light">
            <h2>React Projects</h2>
          </a>
          <button
            class="navbar-toggler text-end btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon nav-bars-icon">
              {' '}
              <FaBars className="nav-bars-icon" />{' '}
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <Link to="/" className="text-decoration-none">
                  <button
                    onClick={goToHomePage}
                    className="btn btn-outline-warning rounded-pill active text-dark"
                  >
                    <span className="text-dark fw-bold">Home</span>
                  </button>
                </Link>
              </li>
              <li className="nav-item mx-1">
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
          </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark rounded-bottom-only">
          <a href="/" className="navbar-brand mx-3 text-light">
            <h2>React Projects</h2>
          </a>
          <button
            class="navbar-toggler text-end btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon nav-bars-icon">
              {' '}
              <FaBars />{' '}
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <Link to="/" className="text-decoration-none">
                  <button
                    onClick={goToHomePage}
                    className="btn btn-outline-warning rounded-pill"
                  >
                    <span className="fw-bold">Home</span>
                  </button>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link to="/project" className="text-decoration-none">
                  <button
                    onClick={goToProjectPage}
                    className="btn btn-outline-warning rounded-pill active"
                  >
                    <span className="text-dark fw-bold">Project</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
