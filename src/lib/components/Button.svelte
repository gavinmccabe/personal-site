<script lang="ts">
	export let link: string;
</script>

<a href={link} target="_blank">
	<slot />
</a>

<style>
	a {
		padding: 16px 22px;
		font-size: 18px;
		font-weight: 500;
		width: max-content;
		color: white;
		border: 0;
		border-radius: 2px;
		background-color: #ff6464;
		text-decoration: none;
	}
</style>
