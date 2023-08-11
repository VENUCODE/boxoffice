
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Starred from './pages/starred';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
    <Route path="/home" element={<Home />}/>
    <Route index element={<h1 >This is index page</h1>} /> 
    <Route path="/starred" element={<Starred />}/>
    {/* the above statement make the home component as the index file */}
     { /* <Route path="/" element={<App />}>
        
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
