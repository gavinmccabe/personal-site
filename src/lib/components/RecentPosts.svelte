<script lang="ts">
	import type { Post } from "$lib/types";

	import PostCard from "./PostCard.svelte";

	export let posts: Post[];
</script>

<div id="bg">
	<div id="col">
		<h1>Latest Updates</h1>
		<div class="container">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
</div>

<style>
	#bg {
		width: 100%;
		background-color: #edf7fa;
		margin: 0;
		display: flex;
		justify-content: center;
	}

	#col {
		margin: 0 10%;
	}

	.container {
		display: flex;
		justify-content: center;
	}

	h1 {
		font-weight: 400;
		font-size: 22px;
		margin: 20px 0;
	}
</style>
