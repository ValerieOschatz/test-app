import {useEffect} from 'react';
import { ModelListPageProps } from '../utils/types/props';
import Pagination from './Pagination';
import '../styles/content.css';

const ModelListPage: React.FC<ModelListPageProps> = (props) => {
  const {
    elements,
    error,
    page,
    limit,
    fetchElements,
    setPage,
    title,
  } = props;

  useEffect(() => {
    fetchElements(page, limit);
  }, [page, limit])

  return (
    <div className="content">
      <h1 className="content__title">{title}</h1>
      <ul className="content__list">
        {!error && elements.map(element =>
        <li key={element.id} className="content__element">
          <p className="content__text">{element.id} - {element.title}</p>
          {element.body && <p className="content__text">{element.body}</p>}
        </li>
        )}
      </ul>
      <Pagination setPage={setPage} page={page} />
    </div>
  );
};

export default ModelListPage;
