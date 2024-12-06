import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/Home';
import DeshboardPage from './page/Deshboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/deshboard' element={<DeshboardPage />}/>
        {/* <Route path='/coin/:id' element={<CoinPage />}/>
        <Route path='/compare' element={<ComparePage />}/>
        <Route path='/watchlist' element={<WatchlistPage />}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
