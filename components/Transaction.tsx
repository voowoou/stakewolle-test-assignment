import { Button } from '@mui/material';

const Transaction = () => {
  return (
    <section>
      <h2>Send</h2>
      <div>
        <div>
          <h3>To</h3>
          <input type="text"></input>
        </div>
        <div>
          <h3>Amount</h3>
          <input type="number"></input>
        </div>
        <Button variant="contained">SEND</Button>
      </div>
    </section>
  );
};

export default Transaction;
