<script>
	export let name;
  export let lastName;
  let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png';
</script>

<main>
  <h1>Hello {name} {lastName}!</h1>
  <p>Frontend Developer</p>
  <img src={svelteLogo} alt="Svelte" />
</main>

<style>
  :global(body) {
    background-color:  #f2eee2;
    color: #0084f6;
  }

  :global(:root) {
    --theme-color: purple;
  }

  p {
    color: var(--theme-color);
    font-size: 22px;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 720px;
		margin: 0 auto;
  }

  main img {
    width: 30%;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
