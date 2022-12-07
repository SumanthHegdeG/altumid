import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './screens/AboutUs'
import Consulting from './screens/consulting/Consulting'
import Development from './screens/developement/Development'
import HomeScreens from './screens/home/HomeScreens'
import Marketing from './screens/marketing/Marketing'
import DesignScreen from './screens/service/DesignScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<HomeScreens />} />
            <Route path='service'>
              <Route index element={<div>service</div>} />
              <Route path='design' element={<DesignScreen />} />
              <Route path='marketing' element={<Marketing />} />
              <Route path='development' element={<Development />} />
              <Route path='consulting' element={<Consulting />} />
            </Route>
            <Route path='about-us' element={<AboutUs />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
