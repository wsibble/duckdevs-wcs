import "../css/duckracer/duckracerboard.css";

const DuckRacerBoard = (props) => {
  return (
    <>
      <table className="duckracer__board">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((record, index) => (
              <tr key={index}>
                <td>{record.rank}</td>
                <td>{record.name}</td>
                <td>{record.time}</td>
              </tr>
            ))}
          <tr key={1}>
            <td>1</td>
            <td>Daniel Savidge</td>
            <td>00:40</td>
          </tr>
          <tr key={2}>
            <td>2</td>
            <td>Daniel Savidge</td>
            <td>00:40</td>
          </tr>
          <tr key={3}>
            <td>3</td>
            <td>Daniel Savidge</td>
            <td>00:40</td>
          </tr>
          <tr key={4}>
            <td>4</td>
            <td>Daniel Savidge</td>
            <td>00:40</td>
          </tr>
          <tr key={5}>
            <td>5</td>
            <td>Daniel Savidge</td>
            <td>00:40</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DuckRacerBoard;
