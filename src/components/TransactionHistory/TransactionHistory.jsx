import css from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => {
  const keys = Object.keys(item[0]);
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>{keys[1]}</th>
          <th>{keys[2]}</th>
          <th>{keys[3]}</th>
        </tr>
      </thead>

      <tbody>
        {item.map(elem => {
          return (
            <tr key={elem.id}>
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
