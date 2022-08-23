<script lang="ts">
	import Icon from "svelte-awesome";
	import githubSquare from "svelte-awesome/icons/githubSquare";
	import linkedinSquare from "svelte-awesome/icons/linkedinSquare";
	import heart from "svelte-awesome/icons/heart";
</script>

<footer>
	<div>
		<a href="https://github.com/gavinmccabe">
			<Icon data={githubSquare} scale={2} />
		</a>
		<a href="https://www.linkedin.com/in/gavinmdev/">
			<Icon data={linkedinSquare} scale={2} />
		</a>
	</div>
	<p>
		Made with <span><Icon data={heart} scale={0.7} /></span> in California
	</p>
	<p>Copyright &copy;2022 All rights reserved</p>
</footer>

<style>
	footer {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	div {
		display: flex;
		justify-content: center;
	}

	a {
		color: #21243d;
		margin: 0 20px;
	}

	a:visited {
		color: inherit;
	}

	p {
		text-align: center;
		font-size: 14px;
		margin: 0;
	}

	span {
		color: #ff6464;
	}
</style>
