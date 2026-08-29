import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">◇</div>
          <h2>Web3.0</h2>
        </div>

        <button className="connect-btn">
          Connect Wallet
        </button>
      </nav>

      <main className="main">
        <section className="hero">
          <h1>Send Crypto</h1>
          <p>Send Ethereum securely through the blockchain.</p>
        </section>

        <section className="card">
          <h2>Send Transaction</h2>

          <input type="text" placeholder="Receiver address" />
          <input type="number" placeholder="Amount (ETH)" />
          <input type="text" placeholder="Message" />
          <input type="text" placeholder="Keyword" />

          <button className="send-btn">
            Send Transaction
          </button>
        </section>

        <section className="transactions">
          <h2>Latest Transactions</h2>

          <div className="empty">
            No transactions yet.
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;