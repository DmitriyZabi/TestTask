import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Header } from './components/layout/header/Header'
import { Main } from './components/layout/main/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AboutPage } from './pages/AboutPage'
import { UserInfoPage } from './pages/UserInfoPage'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/userinfo/:userId" element={<UserInfoPage />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </Main>
    </>
  )
}

export default App
