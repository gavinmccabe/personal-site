<script lang="ts">
	import type { Post } from "$lib/types";
	import { Page } from "$lib/types";

	import IntroSplash from "$lib/components/IntroSplash.svelte";
	import RecentPosts from "$lib/components/RecentPosts.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	let posts: Post[] = [
		{
			title: "Accepted full-time offer at AWS CQC",
			date: "19 Sep 2022",
			tags: "Career, Graduation",
			text: "After completing a 13-week internship at the AWS Center for Quantum Computing (CQC) this summer, I was invited to return to the CQC as a full-time quantum software engineer following my graduation in June 2023.  I've enthusiastically accepted this offer and look forward to beginning my career at AWS in August!"
		},
		{
			title: "Launching my new website",
			date: "24 Aug 2022",
			tags: "Website Design, Development",
			text: "After pushing back this project for quite some time, I'm excited to launch my new website based on the Svelte compiler.  This has been a fantastic oportunity to learn new skills and implement technologies and devops that I've learned through my internship."
		},
		{
			title: "Beginning internship at the AWS Center for Quantum Computing",
			date: "13 Jun 2022",
			tags: "Career, Internship",
			text: "Today I begin my internship at the AWS Center for Quantum Computing (CQC).  I am excited to be joining such a talented, diverse team of scientists, software engineers, managers, and engineers!"
		}
	];
</script>

<Navbar page={Page.Home} />
<IntroSplash />
<RecentPosts posts={posts.slice(0, 2)} />
