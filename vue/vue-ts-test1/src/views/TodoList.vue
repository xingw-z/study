<template>
  <div class="todolist">
    {{ test }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})

export default class TodoList extends Vue {
  private test = 'test';


  private mounted() {
    console.log(123);
    interface Person {
      test: string;
    }
  }
}
</script>
