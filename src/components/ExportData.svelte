<script>
  import store from "./../store.js";

  const saveDownloadedData = (fileName, data) => {
    if (
      ~navigator.userAgent.indexOf("MSIE") ||
      ~navigator.appVersion.indexOf("Trident/")
    ) {
      /* IE9-11 */
      const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
      navigator.msSaveBlob(blob, fileName);
    } else {
      const link = document.createElement("a");
      link.setAttribute("target", "_blank");
      if (Blob !== undefined) {
        const blob = new Blob([data], { type: "text/plain" });
        link.setAttribute("href", URL.createObjectURL(blob));
      } else {
        link.setAttribute("href", "data:text/plain," + encodeURIComponent(data));
      }

      ~window.navigator.userAgent.indexOf("Edge") &&
        (fileName = fileName.replace(/[&\/\\#,+$~%.'':*?<>{}]/g, "_")); /* Edge */

      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
</script>

<button class="py-1 px-4 bg-gray-700 rounded-lg hover:bg-gray-200 hover:text-gray-800" on:click={saveDownloadedData('data.json', JSON.stringify($store))} >Export</button>