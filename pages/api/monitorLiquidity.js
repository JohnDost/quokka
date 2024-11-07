import { Connection, PublicKey } from '@solana/web3.js';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Connection(process.env.SOLANA_RPC_URL);
const liquidityPoolAddress = new PublicKey(process.env.LIQUIDITY_POOL_ADDRESS);

export default async function handler(req, res) {
    try {
        const poolAccount = await connection.getParsedAccountInfo(liquidityPoolAddress);
        const balance = poolAccount.value.lamports;

        res.status(200).json({ liquidityBalance: balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve pool balance' });
    }
}
