<script lang="ts">
	import type { Experience } from "$lib/types";

	export let experience: Experience;
</script>

<h1>{experience.title}</h1>
<div>
	<h2>{experience.dates}</h2>
	<p>|</p>
	<h2 id="company">{experience.company}</h2>
</div>
<p>{experience.description}</p>
<hr />

<style>
	h1 {
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 15px;
	}

	h2 {
		font-size: 20px;
		font-weight: 400;
	}

	h2,
	div > p {
		display: inline;
	}

	#company {
		color: #8695a4;
	}

	p {
		font-size: 16px;
	}

	hr {
		height: 1px;
		width: 100%;
		background-color: #e0e0e0;
		border: 0;
		margin: 50px 0;
	}

	div > p {
		font-size: 20px;
		margin: 0 15px;
	}
</style>
