<script lang="ts">
	import type { Education } from "$lib/types";

	export let education: Education;
</script>

<h1>{education.school}</h1>
<div>
	<h2><span>Class of {education.class}</span></h2>
	<h2>{education.degree}</h2>
</div>
<p>{education.description}</p>
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
		color: #8695a4;
	}

	div,
	h2 {
		display: inline;
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

	span {
		padding: 5px 10px;
		background-color: #142850;
		border: 0;
		border-radius: 999999px;
		font-size: 14px;
		font-weight: 900;
		color: white;
		margin-right: 15px;
		margin-bottom: 15px;
	}
</style>
