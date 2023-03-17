import {useEffect} from 'react';
import { ModelListPageProps } from '../utils/types/props';
import Pagination from './Pagination';

const ModelListPage: React.FC<ModelListPageProps> = (props) => {
  const {
    elements,
    error,
    page,
    limit,
    fetchElements,
    setPage
  } = props;

  useEffect(() => {
    fetchElements(page, limit)
  }, [page, limit, fetchElements])

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {elements.map(element =>
      <>
        <div key={element.id}>{element.id} - {element.title}</div>
        {element.body && <div>{element.body}</div>}
      </>
      )}
      <Pagination setPage={setPage} page={page} />
    </div>
  );
};

export default ModelListPage;
