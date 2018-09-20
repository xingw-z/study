<template>
  <div class="TodoList">
    <input type="text" v-model="selfInput">
    <button @click="btnClickHandler">ok</button>
    <TodoItem v-for="item in list" :key="item.key" :msg="item.msg"></TodoItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue'; // @ is an alias to /src

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  private list = [
    {
      key: 1,
      msg: 'asd1',
    },
    {
      key: 2,
      msg: 'asd2',
    },
  ];
  private selfInput = '';
  private btnClickHandler() {
    // console.log(this.selfInput);
    this.list.push({
      key: this.list.length + 1,
      msg: this.selfInput,
    });
  }
}
</script>
