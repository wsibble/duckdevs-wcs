import { useParams } from 'react-router-dom';
import Developer from './Developer';
import './css/people.css';

const People = (props) => {
  const params = useParams();
  return (
    <>
      <h1>DEVELOPERS</h1>
      {params ? params.pid : ''}
      <div className="people__container">
        {props.data.map((developer) => (
          <Developer key={developer.id} data={developer} />
        ))}
      </div>
    </>
  );
};

export default People;
