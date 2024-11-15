<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="grid min-h-svh grid-cols-[1fr_65ch_1fr] grid-rows-[auto_1fr]">
	<header class="col-span-3 flex">
		<h1 class="flex-auto">
			<a href="/">Home</a>
		</h1>
		<nav>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="col-start-2">
		{@render children()}
	</main>
</div>
