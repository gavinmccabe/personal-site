<script lang="ts">
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
		width: 35%;
		height: 30%;
		margin: 20px 10px;
	}

	h1 {
		font-weight: 700;
		font-size: 26px;
		line-height: 38.19px;
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
