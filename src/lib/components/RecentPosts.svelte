<script lang="ts">
	import type { Post } from "$lib/types";

	import PostCard from "./PostCard.svelte";

	export let posts: Post[];
</script>

<div id="bg">
	<h1>Latest Updates</h1>
	<div id="container">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>

<style>
	#bg {
		width: 100%;
		background-color: #edf7fa;
		margin: 0;
	}

	#container {
		display: flex;
		justify-content: center;
		margin: 0 10%;
	}

	h1 {
		position: relative;
		left: calc(10% + 0.1 * (80%) + 10px);
		margin-top: 20px;
		margin-bottom: 0px;
		display: inline-block;
		font-weight: 400;
		font-size: 22px;
	}
</style>
