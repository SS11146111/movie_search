import { useState } from 'react';
import { Header } from './components/Header';
import { MoviePage } from './components/MoviePage';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import './App.css';
function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  
  return (
    <div className="App screen">
      <Header title={title} setTitle={setTitle} setUrl={setUrl} />
      <Routes>
          <Route path="/" element={<MoviePage url={url}/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
