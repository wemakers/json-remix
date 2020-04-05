<script>
  import FileInput from "./components/FileInput.svelte";
  import Display from "./components/Display.svelte";
  import Export from "./components/ExportData.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";
</script>

<style global>
  @import "jsoneditor/dist/jsoneditor.min.css";
</style>

<svlte:head>
  <!-- <link
    href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/8.6.4/jsoneditor.min.css"
    rel="stylesheet" /> -->
</svlte:head>
<Tailwindcss />

<main class="min-h-screen bg-gray-200 w-full">
  <Navbar />
  <Display />
</main>
