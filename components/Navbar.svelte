<script>
  import Export from "./ExportData.svelte";
  import FileInput from "./FileInput.svelte";
</script>

<div class="h-16 w-full bg-gray-800">
  <div class="mx-auto h-full md:w-3/5 px-5 flex justify-between items-center text-white">
    <div class="font-bold">JSON Remix</div>
    
    <div>
      <Export />
      <FileInput />
    </div>
  </div>
</div>