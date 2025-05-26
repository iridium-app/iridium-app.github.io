import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <img alt="Pokemon Iridium Logo" src="logo.png" className={styles.logo} />
      <div className={styles.welcome}>
        Welcome to the website for the upcoming ROMhack Pokémon Iridium
      </div>
      <ul className={styles.featureList}>
        <li className={styles.featureItem}>
          811+ Pokemon from 9 generations (built on hg-engine), each with custom
          level-up/TM/HM learnsets.
        </li>
        <li className={styles.featureItem}>
          2 difficulty modes. One for the more casual audience, and another near
          Run & Bun difficulty.
        </li>
        <li className={styles.featureItem}>300 trainers for both modes.</li>
        <li className={styles.featureItem}>
          An entirely new region with 6 gyms, and another remade region 8 gyms
          (total of 14 gyms, scaling from level 7 to 100). Will be partially
          custom made and partially use bw2 assets.
        </li>
        <li className={styles.featureItem}>
          An entirely new plot which involves both Team Galactic and Team
          Plasma, and the capability to decide which team the player will join.
        </li>
        <li className={styles.featureItem}>
          Battle modifiers (randomized team lead, perma sun, trick room,
          terrain, etc) that will add difficulty in creative ways
        </li>
        <li className={styles.featureItem}>
          QoL features like Infinite Rare Candies, Repels, Porta-PC. Some are
          already implemented in hg-engine, others will need to be added.
        </li>
        <li className={styles.featureItem}>
          Custom music tracks / music from other games
        </li>
        <li className={styles.featureItem}>...and more!</li>
      </ul>
    </div>
  );
}

export default Home;
