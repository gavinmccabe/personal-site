<script lang="ts">
	import type { Post } from "$lib/types";
	export let post: Post;
</script>

<article>
	<h1>{post.title}</h1>
	<h2>{post.date} | {post.tags}</h2>
	<p>{post.text}</p>
</article>

<style>
	article {
		background-color: white;
		border-radius: 4px;
		box-shadow: 0px 4px 10px 0px #bbe1fa40;
		padding: 20px;
		width: 45%;
		height: 30%;
		margin-bottom: 20px;
		margin-right: 20px;
		
	}

	h1 {
		font-weight: 700;
		font-size: 26px;
		line-height: 38.19px;
		margin: 0;
	}

	h2 {
		font-size: 18px;
		line-height: 26.44px;
		font-weight: 400;
	}

	p {
		font-size: 16px;
		line-height: 23.5px;
	}
</style>
