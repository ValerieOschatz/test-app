import { Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import PostList from "./components/PostList";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Info} />
        <Route path='/posts' Component={PostList} />
        <Route path='/1' Component={TodoList} />
      </Routes>
    </div>
  );
};

export default App;
