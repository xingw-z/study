<template>
  <div class="TodoItem">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {},
})
export default class TodoItem extends Vue {
  @Prop() private msg!: string;

  private mounted() {
    console.log(this.msg);
  }
}
</script>
