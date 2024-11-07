import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Connection(process.env.SOLANA_RPC_URL);
const adminWallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.ADMIN_WALLET_KEY)));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { recipientPublicKey, amount } = req.body;

        try {
            const recipient = new PublicKey(recipientPublicKey);
            const token = new Token(connection, new PublicKey(process.env.TOKEN_MINT_ADDRESS), TOKEN_PROGRAM_ID, adminWallet);

            const recipientTokenAccount = await token.getOrCreateAssociatedAccountInfo(recipient);
            await token.transfer(adminWallet, recipientTokenAccount.address, adminWallet.publicKey, [], amount);

            res.status(200).json({ status: 'ICO token transfer complete', amount });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'ICO token transfer failed' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
