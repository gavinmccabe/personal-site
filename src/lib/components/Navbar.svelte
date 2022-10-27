<script lang="ts">
	import { Page } from "$lib/types";
	
	export let page: Page;
</script>

<ul>
	<li><a href="/">Home</a></li>
	<li><a class:selected="{page == Page.Experience}" href="/experience">Experience</a></li>
	<li><a class:selected="{page == Page.Education}" href="/education">Education</a></li>
	<li><a class:selected="{page == Page.Contact}" href="/">Contact</a></li>
</ul>

<style>
	ul {
		display: flex;
		justify-content: right;
		margin-top: 33px;
	}

	li {
		list-style-type: none;
		font-size: 20px;
		font-weight: 500;
		margin: 0;
		margin-right: 33px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:visited {
		color: inherit;
	}

	.selected {
		color: #ff6464 !important;
	}

	
</style>
