
<svelte:head>
	<title>Dean Sallinen</title>
	<meta name="description" content="The personal website of Dean Sallinen" />
</svelte:head>

<section>
	<h1>Dean Sallinen</h1>

	<h2>Hi, I’m Dean. 👋</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
