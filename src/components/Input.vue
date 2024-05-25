<template>
  <div class="input-group my-5">
    <input type="text" class="form-control" placeholder="Enter text..." @keydown.enter="addItem" v-model="inputText" autofocus />
    <button class="btn btn-primary" type="button" @click="addItem"><i class="bi bi-plus-circle me-2"></i>Add item</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import store from '/src/store/store.js';

const inputText = ref("");

const addItem = () => {
  const newItem = {
    isChecked: false,
    desc: inputText.value
  };
  store.addToItemList(newItem);
  console.log(store.state.itemList);
  inputText.value = "";
}
</script>