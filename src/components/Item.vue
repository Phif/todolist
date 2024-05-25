<script setup>
import { ref, computed, watch } from 'vue';
import store from '/src/store/store.js';

const props = defineProps({
  checked: {
    type: Boolean,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const isChecked = ref(props.checked);

const linethrough = computed(() => {
  return isChecked.value ? "text-decoration-line-through" : "";
})

watch(() => props.checked, (newChecked) => {
  isChecked.value = newChecked;
})

const removeItem = () => {
  store.removeFromItemList(props.index)
}
</script>

<template>
  <div class="d-flex flex-row input-group my-2 list-group">
    <label class="btn btn-light text-start flex-fill list-group-item">
      <input class="checkbox form-check-input me-2" type="checkbox" v-model="isChecked" />
      <span :class="linethrough">{{ desc }}</span>
    </label>
    <button type="button" class="btn btn-danger" @click="removeItem"><i class="bi bi-x-circle"></i></button>
  </div>
</template>