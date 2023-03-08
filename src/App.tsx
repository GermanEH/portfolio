import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const App = (): JSX.Element => {
  return (
  // <div id="root">
  <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
  // </div>
  )
}

export default App
