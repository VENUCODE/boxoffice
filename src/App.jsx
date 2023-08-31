
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Starred from './pages/starred';
import MainLayout from './components/MainLayout';
import Show from './pages/show';
import Weather from './pages/weather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route index path='/' element={<h1>Index page</h1>}/>
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path='/show/:showId' element={<Show  />}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='*' element={<div>Not found</div>}/>
        {/* the above statement make the home component as the index file */}
        {/* <Route path="/" element={<App />}>
        
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} />
      */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
