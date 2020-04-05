<script>
	import store from "./../store.js";
	let input;

	function handleFiles(event) {
	  if (window.FileReader && input) {
	    getAsText(input.files[0]);
	  } else {
	    alert("FileReader are not supported in this browser.");
	  }
	}

	function getAsText(fileToRead) {
	  let reader = new FileReader();
	  reader.onload = loadHandler;
	  reader.readAsText(fileToRead);
	}
	function loadHandler(event) {
	  let json = event.target.result;
	  store.setJson(json);
	}
</script>


	<label class="inline-block px-4 py-1 text-gray-800 text-gray-200 mx-2 bg-gray-400 rounded-lg hover:bg-gray-200 cursor-pointer"> 
		Import
		<input class="hidden" bind:this={input} type="file" on:change={handleFiles}/>
	</label>
