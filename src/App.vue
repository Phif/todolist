<script setup>
import Header from './components/Header.vue'
import Item from './components/Item.vue'
import Input from './components/Input.vue'
import store from '/src/store/store.js';

</script>

<template>
  <Header />
  <Input />  
  <Item v-for="(item, index) in store.state.itemList" :key="index" :checked="item.isChecked" :desc="item.desc" :index="index" />
</template>