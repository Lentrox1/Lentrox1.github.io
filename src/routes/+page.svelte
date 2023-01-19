<script>
  let clicks = 0;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;

  let upgrades = [
    { cost: 15, name: "Multiplier", multiplier: 1.5, worker: 0 },
    { cost: 5, name: "Worker", multiplier: 0, worker: 1 },
    { cost: 100, name: "Konfetti!", multiplier: 0, worker: 0, confetti: 1, cheats:0 , image:`url("https://media4.giphy.com/media/ePaw7nwYmSI1t389Sy/giphy.gif")` },
    { cost: 0, name: "Cheats", multiplier: 0, worker: 0, confetti: 0, cheats: 1 },
  ];

  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
  }

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

  
</script>

<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button style = "background-image:{upgrade.confetti > 1? upgrade.image:null}"
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
                upgrade.cost = upgrade.cost * 2
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
                upgrade.cost += 5
              }
              if (upgrade.confetti) {
                clicks -= upgrade.cost;
                upgrade.confetti += 1
                upgrade.cost += 100
                sleep(1500).then(() => {
                upgrade.confetti = 1
                });

              }
              if (upgrade.cheats) {
                clicks += 1000000
              }
            } 
            
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{Math.round(clicks)}</span>
      <span class="pointtext">PPC: {Math.round(multiplier)}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>Workers {workers.length}</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(219, 16, 16);
    background-color: rgb(59, 183, 28);
    background-size: cover;
    background-image: url("https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png");
    background-position:0px,-100px;
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }
  
  .worker {
    width: 100%;
    height: 500%;
    border: 1px solid black;
    /*background-color: rgb(128, 141, 27); */
    background-size: cover;
    background-image: url("https://www.svtstatic.se/image/custom/1024/23640/1331644524?format=auto&chromaSubSampling=false&enableAvif=true");
    place-items: center;
    place-content: center;
    display: flex;
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/4:3/w_3600,h_2700,c_limit/chocolate-chip-cookie.jpg");
    background-size: cover;
    background-position: 0px -100px;
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }

  .pointtext {
    color: brown;
    font-size: 25px;
    font-weight: bold;
  }
</style>
