import '../styles/content.css'

const Info: React.FC = () => {
  return (
    <div className="content">
      <h1 className="content__title">Информация</h1>
      <div className="content__element">
        <p className="content__text">Тренировочное приложение, подключенное к фейковому апи JSONPlaceholder. Создано для ознакомления и отработки навыков по typescript, react + redux.</p>
      </div>
    </div>
  );
};

export default Info;
