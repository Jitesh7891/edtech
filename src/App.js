import './App.css';
import Alert from './components/Alert/Alert';
import Expert from './components/Expert/Expert';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Plans from './components/Plans/Plans';
import Reviews from './components/Reviews/Reviews';
import Topcourses from './components/TopCourses/Topcourses';
import Trust from './components/Trust/Trust';
import Categories from './components/categories/Categories';


function App() {
  return (
   <>
  <Alert/>
  <Navbar/>
  <Intro/>
  <Trust/>
  <Topcourses/>
  <Categories/>
  <Expert/>
  <Reviews/>
  <Plans/>
  <Footer/>

   </>
  );
}

export default App;
