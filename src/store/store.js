import { reactive, readonly } from 'vue';

const state = reactive({
  itemList: []
});

const addToItemList = (value) => {
  state.itemList.push(value);
};

const removeFromItemList = (index) => {
  state.itemList.splice(index, 1);
};

export default {
  state: readonly(state),
  addToItemList,
  removeFromItemList
};
