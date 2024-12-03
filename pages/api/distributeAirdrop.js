export default async function handler(req, res) {
  if (req.method === "POST") {
    const { wallet_addresses, token_amount } = req.body;

    wallet_addresses.forEach((wallet) => {
      console.log(
        `Airdrop of ${token_amount} tokens sent to wallet: ${wallet}`
      );
      // Simulate airdrop - replace with blockchain call for production
    });

    res.status(200).json({ status: "Airdrop distribution complete" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
