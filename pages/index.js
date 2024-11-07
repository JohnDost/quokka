import { useState } from 'react';

export default function Home() {
    const [recipientPublicKey, setRecipientPublicKey] = useState('');
    const [amount, setAmount] = useState('');
    const [liquidityBalance, setLiquidityBalance] = useState(null);

    const handleICOTransfer = async () => {
        const res = await fetch('/api/manageICO', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipientPublicKey, amount }),
        });
        const data = await res.json();
        alert(data.status || data.error);
    };

    const checkLiquidity = async () => {
        const res = await fetch('/api/monitorLiquidity');
        const data = await res.json();
        setLiquidityBalance(data.liquidityBalance || 'Failed to fetch');
    };

    return (
        <div>
            <h1>Quokka Memecoin Dashboard</h1>

            <div>
                <h2>ICO Transfer</h2>
                <input type="text" placeholder="Recipient Public Key" value={recipientPublicKey} onChange={(e) => setRecipientPublicKey(e.target.value)} />
                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={handleICOTransfer}>Transfer Tokens</button>
            </div>

            <div>
                <h2>Liquidity Pool Balance</h2>
                <button onClick={checkLiquidity}>Check Balance</button>
                {liquidityBalance && <p>Liquidity Pool Balance: {liquidityBalance}</p>}
            </div>
        </div>
    );
}
