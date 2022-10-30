import React from 'react'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lime-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Pathfinding Visualizer
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item m-1">
                <select id="algorithms" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose an Algorithm</option>
                  <option value="dijsktra">Dijkstra's Algorithm</option>
                </select>
              </li>
              <li className="nav-item m-1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Visualize</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header