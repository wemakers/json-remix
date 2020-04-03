<script>
	import FileInput from "./components/FileInput.svelte";
	import Display from "./components/Display.svelte";
	import Export from "./components/ExportData.svelte";
	import Navbar from "./components/Navbar.svelte";
</script>


<svlte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/8.6.4/jsoneditor.min.css" rel="stylesheet">
</svlte:head>


<main class="min-h-screen bg-gray-200 w-full">
	<Navbar />
	<Display />
</main>
