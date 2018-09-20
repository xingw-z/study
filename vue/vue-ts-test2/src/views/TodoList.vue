<template>
  <div class="TodoList">
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
      msg: 'asd',
    },
    {
      key: 2,
      msg: 'asd',
    },
  ];
}
</script>
