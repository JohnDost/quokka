import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Loader } from 'lucide-react';
import Head from 'next/head';

// AirdropClaim Component
function AirdropClaim() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [claimStatus, setClaimStatus] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  
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
}

// Main Page Component
export default function Home() {
  return (
    <div>
      <Head>
        <title>Angry Quokka Coin ($AQC)</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Angry Quokka Coin - The most exciting memecoin on Solana" />
      </Head>

      <div>
        <header className="bg-[#264653] py-5">
          <div className="container mx-auto">
            <img src="/logo.png" alt="Angry Quokka Coin Logo" className="h-16" />
            <nav className="absolute left-[7%] top-[1%]">
              <ul className="flex gap-5 list-none p-0">
                <li><a href="#about" className="text-white font-bold">About</a></li>
                <li><a href="#roadmap" className="text-white font-bold">Roadmap</a></li>
                <li><a href="#tokenomics" className="text-white font-bold">Tokenomics</a></li>
                <li><a href="#airdrop" className="text-white font-bold">Airdrop</a></li>
              </ul> 
            </nav>
          </div>
        </header>

        <section id="hero" className="bg-[#FF6B35] text-white py-12 px-5 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to Angry Quokka Coin ($AQC)</h1>
            <p className="mb-6">The most exciting memecoin on Solana. Join the Angry Quokka revolution today!</p>
            <a href="#airdrop" className="inline-block bg-[#FF6B35] text-white px-5 py-2 rounded font-bold uppercase">
              Claim Your Airdrop
            </a>
          </div>
        </section>

        <section id="about" className="py-12 px-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">What is Angry Quokka Coin?</h2>
            <p>$AQC is more than just a token; it's a movement. Inspired by the quirky and lovable quokka, we bring fun and community to the Solana blockchain.</p>
          </div>
        </section>

        <section id="roadmap" className="py-12 px-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
            <ul className="space-y-2">
              <li><strong>Q1:</strong> Launch website, build community, and begin airdrop.</li>
              <li><strong>Q2:</strong> Token launch, exchange listings, and partnerships.</li>
              <li><strong>Q3:</strong> Community-driven events, charity initiatives, and expansion.</li>
              <li><strong>Q4:</strong> Enhance ecosystem, utility developments, and beyond.</li>
            </ul>
          </div>
        </section>

        <section id="tokenomics" className="py-12 px-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
            <ul className="space-y-2">
              <li><strong>Total Supply:</strong> 1,000,000,000,000 $AQC</li>
              <li><strong>Public/Fair Launch:</strong> 50%</li>
              <li><strong>Community Airdrops:</strong> 15%</li>
              <li><strong>Staking/Rewards:</strong> 15%</li>
              <li><strong>Team:</strong> 15%</li>
              <li><strong>Reserves:</strong> 5%</li>
            </ul>
          </div>
        </section>

        <section id="airdrop" className="py-12 px-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Claim Your Airdrop</h2>
            <p className="mb-6">Join the first 1,000 quokka fans and receive free $AQC tokens!</p>
            <AirdropClaim />
          </div>
        </section>

        <footer className="bg-[#264653] text-white py-5 text-center">
          <div className="container mx-auto">
            <p className="mb-4">&copy; 2025 Angry Quokka Coin. All rights reserved.</p>
            <div className="space-x-4">
              <a href="https://x.com/coinangryquokka" className="text-[#FFD166]">Twitter</a>
              <a href="#" className="text-[#FFD166]">Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
