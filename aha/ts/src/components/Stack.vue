<template>
 <div class="stack">stack</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public mounted() {
    let input :Array<string> = ['a', 'h', 'd', 'h', 'a'];
    let list :Array<string> = [];
    let top :number = 0;
    let len :number = input.length;
    let mid :number = ~~(len / 2);
    let i :number = 0;
    for (i = 0; i < mid; i++) {
      list[i] = input[i];
      top = i;
    }
    
    for (i = mid - 1; i < len; i++) {
      
      // console.log(input[i], list[top]);
      if (input[i] !== list[top]) {
        break;
      }
      top--;
    }
    // console.log(list, top);
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
