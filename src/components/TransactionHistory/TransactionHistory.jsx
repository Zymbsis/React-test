import css from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
