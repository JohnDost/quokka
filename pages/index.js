import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Angry Quokka Token - Memecoin Edition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.hero}>
            <img src="angry_quokka_logo.png" alt="Angry Quokka Logo" />
            <h1>Angry Quokka Token</h1>
            <p>The fiercest, friendliest memecoin of the year!</p>
          </div>

          <div className={styles.section}>
            <h2>About Angry Quokka</h2>
            <p>
              Angry Quokka is here to shake up the crypto world! Inspired by
              popular memecoins like Dogecoin, Shiba Inu, and PepeCoin, Angry
              Quokka is a community-driven token for fun, friendship, and, of
              course, a bit of chaos.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Tokenomics</h2>
            <table>
              <tr>
                <th>Allocation</th>
                <th>Percentage</th>
              </tr>
              <tr>
                <td>Community</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Team</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Development</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Liquidity</td>
                <td>5%</td>
              </tr>
            </table>
          </div>

          <div className={styles.section}>
            <h2>Roadmap</h2>
            <ul>
              <li>
                <strong>Q4 2024:</strong> Website launch, build community
              </li>
              <li>
                <strong>Q1 2025:</strong> Token launch and exchange listings
              </li>
              <li>
                <strong>Q2 2025:</strong> Expand partnerships, increase
                marketing
              </li>
            </ul>
          </div>

          <div className={styles.community}>
            <h2>Join the Community</h2>
            <a href="https://x.com/angryquokkacoin">Twitter</a>
            <a href="https://t.co/U5HBZKob62">Discord</a>
            <!--a href="https://t.me/AngryQuokka">Telegram</a-->
          </div>

          <div className={styles.footer}>
            <p>&copy; 2024 Angry Quokka Token. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
