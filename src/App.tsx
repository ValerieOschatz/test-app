import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavTab';
import Info from './components/Info';
import PostList from "./components/PostList";
import AlbumList from "./components/AlbumList";
import './styles/main.css';

const App: React.FC = () => {
  return (
    <>
    <NavBar />
    <main className='main'>
      <Routes>
        <Route path='/' Component={Info} />
        <Route path='/posts' Component={PostList} />
        <Route path='/albums' Component={AlbumList} />
      </Routes>
    </main>
    </>
  );
};

export default App;
