<script>
	import Button from "./Button.svelte";
	import ProfilePic from "./ProfilePic.svelte";
</script>

<div class="container">
	<div class="col">
		<h1>
			Hi, I'm Gavin,<br />
			Quantum Software Engineer
		</h1>
		<p>
			I use the tools of today to create the technology of tomorrow. Caltech-educated physicist and
			self-taught software engineer, I help bridge the gaps between classical and quantum computing.
		</p>
		<Button>Download Resume</Button>
	</div>
	<div class="col" id="profileDiv">
		<ProfilePic />
	</div>
</div>

<style>
	h1 {
		font-weight: 700;
		font-size: 44px;
		margin: 0;
	}

	div {
		display: flex;
		justify-content: center;
	}

	.col {
		flex-direction: column;
		width: 50%;
	}

	.container {
		justify-content: center;
		margin: 100px 10%;
	}

	#profileDiv {
		align-items: center;
	}

	p {
		font-size: 16px;
		margin: 35px 0;
	}
</style>
