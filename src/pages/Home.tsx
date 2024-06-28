function Home() {
  return (
    <div className={"home"}>
      <img alt="Pokemon Iridium Logo" src="logo.png" style={{maxWidth:"256px"}}/>
      <div>Welcome to the website for the upcoming ROMhack Pokémon Iridium</div>
      <div>
        <ul>
          <li>
            811+ Pokemon from 9 generations (built on hg-engine), each with
            custom level-up/TM/HM learnsets.
          </li>
          <li>
            2 difficulty modes. One for the more casual audience, and another
            near Run & Bun difficulty.
          </li>
          <li>300 trainers for both modes.</li>
          <li>
            An entirely new region with 6 gyms, and another remade region 8 gyms
            (total of 14 gyms, scaling from level 7 to 100). Will be partially
            custom made and partially use bw2 assets.
          </li>
          <li>
            An entirely new plot which involves both Team Galactic and Team
            Plasma, and the capability to decide which team the player will
            join.
          </li>
          <li>
            Battle modifiers (randomized team lead, perma sun, trick room,
            terrain, etc) that will add difficulty in creative ways
          </li>
          <li>
            QoL features like Infinite Rare Candies, Repels, Porta-PC. Some are
            already implemented in hg-engine, others will need to be added.
          </li>
          <li>Custom music tracks / music from other games</li>
          <li>...and more!</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
