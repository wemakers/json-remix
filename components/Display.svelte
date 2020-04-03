<script>
  import store from "./../store.js";
  import _ from "lodash";
  import { onMount } from "svelte";
  import JSONEditor from "jsoneditor";

  let element;
  let editor;

  // when the component is mounted
  // initialize the JSONEditor
  onMount(() => {
    editor = new JSONEditor(element, {
      mainMenuBar: true,
      onCreateMenu
    });
  });

  // this function will run when we click on the options button
  // receives two parameter array of menu items
  // and node on which the menu is opened
  function onCreateMenu(items, node) {
    // checks the condition that the target need to be surrounded
    // by and object and object needs to be surrounded by an array
    // if conditions are not matched just return items without modifying it
    if (!isSpreadable(node)) return items;

    // it all conditions are satisfied
    // modify the item array to include the spread button
    return [
      {
        text: "Spread",
        title:
          "Spread array items randomly accross each instance across this collection",
        className: "jsoneditor-sort-desc",
        click: () => spreadHandler(node)
      },
      {
        type: "separator"
      },
      ...items
    ];
  }

  function isSpreadable({ path }) {
    // gets the JSON data
    const data = editor.get();

    // get the container object having that property
    const targetObj = _.get(data, _.dropRight(path, 1));
    // container array
    const targetArr = _.get(data, _.dropRight(path, 2));
    // the target element
    const target = _.last(path);

    return (
      _.isArray(targetArr) &&
      _.isObject(targetObj) &&
      isTargetValid(targetObj[target])
    );
  }

  function spreadHandler({ path }) {
    let data = editor.get();

    const targetObjPath = _.dropRight(path, 1);
    const targetArrPath = _.dropRight(path, 2);

    const targetObj = _.get(data, targetObjPath);
    const targetArr = _.get(data, targetArrPath);
    const target = _.last(path);

    // if the target element which needs to be spread matches our format
    // means if element is a JSON array then spread items of that
    // array accross each element of container randomly
    if (isTargetValid(targetObj[target])) {
      const updatedArr = _.map(targetArr, item => ({
        ...item,
        [target]: getTargetValue(targetObj[target])
      }));

      data = _.set(data, targetArrPath, updatedArr);
      store.set(data);
    } else {
      alert("data not in required format");
    }
  }

  function isTargetValid(str) {
    try {
      let arr = JSON.parse(str);
      if (!_.isArray(arr)) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

  function getTargetValue(str) {
    let arr = JSON.parse(str);
    return _.sample(arr);
  }

  $: editor && editor.update($store);
</script>

<div class="my-10 mx-auto md:w-3/5 px-5">
  <div bind:this={element}></div>
</div>





