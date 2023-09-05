
import './App.css';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Starred from './pages/starred';
import MainLayout from './components/MainLayout';
import Show from './pages/show';
import Weather from './pages/weather';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
       
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
