import React from "react";

function App() {
    return (
        <div>
            <header style={{ backgroundColor: "#264653", padding: "20px 0" }}>
                <div className="container">
                    <img src="logo.png" alt="Angry Quokka Coin Logo" style={{ maxHeight: "60px" }} />
                    <nav>
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
                    <p>$AQC is more than just a token; it’s a movement. Inspired by the quirky and lovable quokka, we bring fun and community to the Solana blockchain.</p>
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
                        <li><strong>Total Supply:</strong> 1,000,000,000 $AQC</li>
                        <li><strong>Public/Fair Launch:</strong> 50%</li>
                        <li><strong>Community Airdrops:</strong> 15%</li>
                        <li><strong>Staking/Rewards:</strong> 15%</li>
                        <li><strong>Team:</strong> 15% (locked for 12 months)</li>
                        <li><strong>Reserves:</strong> 5%</li>
                    </ul>
                </div>
            </section>

            <section id="airdrop" style={sectionStyle}>
                <div className="container">
                    <h2>Claim Your Airdrop</h2>
                    <p>Join the first 1,000 quokka fans and receive free $AQC tokens! Don’t miss out!</p>
                    <a href="#" style={buttonStyle}>Sign Up Now</a>
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
