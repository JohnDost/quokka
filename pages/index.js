Complete Website with Airdrop Integration
Preview
Code

import React from "react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Loader } from 'lucide-react';

// Import the AirdropClaim component
const AirdropClaim = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [claimStatus, setClaimStatus] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  
  // Simulated claim info - in real implementation, this would come from your contract
  const claimInfo = {
    amount: '10,000',
    endDate: '2025-03-01',
    isEligible: true,
    hasClaimed: false
  };

  const connectWallet = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsWalletConnected(true);
      setWalletAddress('HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH');
    } catch (error) {
      setClaimStatus({ type: 'error', message: 'Failed to connect wallet' });
    } finally {
      setLoading(false);
    }
  };

  const claimAirdrop = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setClaimStatus({ type: 'success', message: 'Successfully claimed tokens!' });
    } catch (error) {
      setClaimStatus({ type: 'error', message: 'Failed to claim tokens' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">$AQC Airdrop Claim</h2>
        
        {!isWalletConnected ? (
          <div className="text-center">
            <p className="mb-4">Connect your wallet to check eligibility and claim tokens</p>
            <button
              onClick={connectWallet}
              disabled={loading}
              className="w-full bg-[#FF6B35] text-white py-2 px-4 rounded-lg hover:opacity-90 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Connecting...
                </span>
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="font-semibold">Wallet Connected:</p>
              <p className="text-sm text-gray-600">
                {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`}
              </p>
            </div>
            
            <div className="border-b pb-2">
              <p className="font-semibold">Claim Amount:</p>
              <p>{claimInfo.amount} $AQC</p>
            </div>
            
            <div className="border-b pb-2">
              <p className="font-semibold">End Date:</p>
              <p>{claimInfo.endDate}</p>
            </div>
            
            {claimInfo.hasClaimed ? (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Already Claimed</AlertTitle>
                <AlertDescription>
                  You have already claimed your tokens!
                </AlertDescription>
              </Alert>
            ) : claimInfo.isEligible ? (
              <button
                onClick={claimAirdrop}
                disabled={loading}
                className="w-full bg-[#FF6B35] text-white py-2 px-4 rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader className="animate-spin mr-2 h-5 w-5" />
                    Claiming...
                  </span>
                ) : (
                  'Claim Tokens'
                )}
              </button>
            ) : (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Not Eligible</AlertTitle>
                <AlertDescription>
                  Your wallet is not eligible for the airdrop
                </AlertDescription>
              </Alert>
            )}
            
            {claimStatus && (
              <Alert variant={claimStatus.type === 'error' ? 'destructive' : 'default'}>
                <AlertDescription>
                  {claimStatus.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
    return (
        <div>
            <header style={{ backgroundColor: "#264653", padding: "20px 0" }}>
                <div className="container">
                    <img src="logo.png" alt="Angry Quokka Coin Logo" style={{ maxHeight: "60px" }} />
                    <nav style={{position: "absolute", left: "7%", top: "1%" }}>
                        <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}>
                            <li><a href="#about" style={{ color: "#ffffff", fontWeight: "bold" }}>About</a></li>
                            <li><a href="#roadmap" style={{ color: "#ffffff", fontWeight: "bold" }}>Roadmap</a></li>
                            <li><a href="#tokenomics" style={{ color: "#ffffff", fontWeight: "bold" }}>Tokenomics</a></li>
                            <li><a href="#airdrop" style={{ color: "#ffffff", fontWeight: "bold" }}>Airdrop</a></li>
                        </ul> 
                    </nav>
                </div>
            </header>

            <section id="hero" style={{ backgroundColor: "#FF6B35", color: "#ffffff", padding: "50px 20px", textAlign: "center" }}>
                <div className="container">
                    <h1>Welcome to Angry Quokka Coin ($AQC)</h1>
                    <p>The most exciting memecoin on Solana. Join the Angry Quokka revolution today!</p>
                    <a href="#airdrop" style={buttonStyle}>Claim Your Airdrop</a>
                </div>
            </section>

            <section id="about" style={sectionStyle}>
                <div className="container">
                    <h2>What is Angry Quokka Coin?</h2>
                    <p>$AQC is more than just a token; it's a movement. Inspired by the quirky and lovable quokka, we bring fun and community to the Solana blockchain.</p>
                </div>
            </section>

            <section id="roadmap" style={sectionStyle}>
                <div className="container">
                    <h2>Roadmap</h2>
                    <ul>
                        <li><strong>Q1:</strong> Launch website, build community, and begin airdrop.</li>
                        <li><strong>Q2:</strong> Token launch, exchange listings, and partnerships.</li>
                        <li><strong>Q3:</strong> Community-driven events, charity initiatives, and expansion.</li>
                        <li><strong>Q4:</strong> Enhance ecosystem, utility developments, and beyond.</li>
                    </ul>
                </div>
            </section>

            <section id="tokenomics" style={sectionStyle}>
                <div className="container">
                    <h2>Tokenomics</h2>
                    <ul>
                        <li><strong>Total Supply:</strong> 1,000,000,000,000 $AQC</li>
                        <li><strong>Public/Fair Launch:</strong> 50%</li>
                        <li><strong>Community Airdrops:</strong> 15%</li>
                        <li><strong>Staking/Rewards:</strong> 15%</li>
                        <li><strong>Team:</strong> 15%</li>
                        <li><strong>Reserves:</strong> 5%</li>
                    </ul>
                </div>
            </section>

            <section id="airdrop" style={sectionStyle}>
                <div className="container">
                    <h2>Claim Your Airdrop</h2>
                    <p>Join the first 1,000 quokka fans and receive free $AQC tokens!</p>
                    <AirdropClaim />
                </div>
            </section>

            <footer style={{ backgroundColor: "#264653", color: "#ffffff", padding: "20px", textAlign: "center" }}>
                <div className="container">
                    <p>&copy; 2025 Angry Quokka Coin. All rights reserved.</p>
                    <div className="socials">
                        <a href="https://x.com/coinangryquokka" style={{ margin: "0 10px", color: "#FFD166" }}>Twitter</a>
                        <a href="#" style={{ margin: "0 10px", color: "#FFD166" }}>Discord</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const sectionStyle = {
    padding: "50px 20px",
};

const buttonStyle = {
    display: "inline-block",
    backgroundColor: "#FF6B35",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
};

export default App;
