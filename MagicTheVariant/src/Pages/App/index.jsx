import { useRoutes, HashRouter } from 'react-router-dom'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import './App.css'

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/*', element: <NotFound /> },
    ])
  
    return routes
  }

  return (
    <>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </>
  )
}

export default App 
