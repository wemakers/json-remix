import { writable } from "svelte/store";

const jsonStore = writable({});

export default {
  ...jsonStore,
  setJson(json) {
    let data = JSON.parse(json);
    this.set(data);
  }
};
