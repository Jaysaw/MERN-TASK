import { useState } from "react";
import "./Bank.css";

export default function Bank() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const deposit = () => {
    if (!amount || amount <= 0) return;

    setBalance(balance + Number(amount));
    setTransactions([
      { type: "deposit", amount },
      ...transactions
    ]);
    setAmount("");
  };

  const withdraw = () => {
    if (!amount || amount <= 0) return;
    if (Number(amount) > balance) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(balance - Number(amount));
    setTransactions([
      { type: "withdraw", amount },
      ...transactions
    ]);
    setAmount("");
  };

  return (
    <div className="bank-page">
      <div className="bank-card">
        <h2>Bank Management System</h2>

        <div className="balance">
          Current Balance: ₹{balance}
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="buttons">
          <button onClick={deposit}>Deposit</button>
          <button className="withdraw" onClick={withdraw}>
            Withdraw
          </button>
        </div>

        <h3>Transaction History</h3>
        {transactions.length === 0 && <p>No transactions yet</p>}

        <ul className="transactions">
          {transactions.map((t, index) => (
            <li key={index} className={t.type}>
              {t.type.toUpperCase()} ₹{t.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
