import { Routes, Route } from 'react-router-dom';
import NavTab from './components/NavTab';
import Info from './components/Info';
import PostList from "./components/PostList";
import AlbumList from "./components/AlbumList";
import './styles/main.css';

const App: React.FC = () => {
  return (
    <>
    <NavTab />
    <main className='main'>
      <Routes>
        <Route path='/*' element={ <Info/> } />
        <Route path='/posts' element={ <PostList /> } />
        <Route path='/albums' element={ <AlbumList /> } />
      </Routes>
    </main>
    </>
  );
};

export default App;
