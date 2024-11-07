import { Connection, PublicKey, Keypair, TransactionInstruction } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const connection = new Connection(process.env.SOLANA_RPC_URL);
const adminWallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.ADMIN_WALLET_KEY)));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userPublicKey, amount } = req.body;

        try {
            const userPubKey = new PublicKey(userPublicKey);
            const token = new Token(connection, new PublicKey(process.env.TOKEN_MINT_ADDRESS), TOKEN_PROGRAM_ID, adminWallet);

            const userTokenAccount = await token.getOrCreateAssociatedAccountInfo(userPubKey);
            const stakingInstruction = new TransactionInstruction({
                keys: [{ pubkey: userTokenAccount.address, isSigner: false, isWritable: true }],
                programId: TOKEN_PROGRAM_ID,
                data: Buffer.from(new Uint8Array([amount])) // Modify as per staking requirements
            });

            const transaction = await connection.sendTransaction(stakingInstruction, [adminWallet]);

            res.status(200).json({ status: 'Staking successful', transaction });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Staking transaction failed' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
