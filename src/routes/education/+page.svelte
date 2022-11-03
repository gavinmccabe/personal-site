<script lang="ts">
	import type { Education } from "$lib/types";
	import { Page } from "$lib/types";

	import Navbar from "$lib/components/Navbar.svelte";
	import EducationItem from "$lib/components/EducationItem.svelte";

	let education: Education[] = [
		{
			school: "Caltech",
			degree: "B.S. Physics",
			class: 2023,
			description:
				"Enrolled in a bachelor's of science program in physics.  Course content heavily concentrated in quantum computation and semiconductor physics.  Completed extensive coursework in computer science."
		},
		{
			school: "The Governor's School for Science and Technology",
			degree: "Engineering Strand",
			class: 2019,
			description:
				"Attended a half-day program during my junior and senior years of high school which provided advanced STEM education.  Classes taken include calculus-based physics I-IV as well as research fundamentals, multivariable calculus, and linear algebra."
		},
		{
			school: "York High School",
			degree: "Honors Degree",
			class: 2019,
			description: ""
		}
	];
</script>

<Navbar page={Page.Education} />
<main>
	<h1>Education</h1>
	{#each education as e}
		<EducationItem education={e} />
	{/each}
</main>

<style>
	main {
		margin: 0 20%;
		color: #21243d;
	}

	h1 {
		font-size: 44px;
		font-weight: 900;
		margin-top: 85px;
		margin-bottom: 50px;
	}
</style>
