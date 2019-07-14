<template>
 <div class="queue">queue</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public mounted() {
    interface queue {
      data: Array<number>;
      head: number;
      tail: number;
    }
    let q :queue = {
      data: [],
      head: 1,
      tail: 1,
    }

    q.data.length = 100;
    q.head = 0;
    q.tail = 0;
    let list :Array<number> = [6, 3, 1, 7, 5, 8, 9, 2, 4]
    // answar: 615947283
    
    for(let i :number = 0, j :number = list.length; i < j; i++) {
      q.data[q.tail] = list[i];
      q.tail++;
    }
    // console.log(q.data);
    
    

    let arr :Array<number> = [];

    while(q.head < q.tail) {
      // console.log(q.data[q.head]);
      arr.push(q.data[q.head]);
      q.head++;

      q.data[q.tail] = q.data[q.head];
      q.tail++;
      q.head++;
    }
    // console.log(arr);
    
    this.test1()
  }

  private test1 () {
    interface queue {
      data: Array<number>;
      head: number;
      tail: number;
    }
    let q1 :queue = {
      data: [],
      head: 0,
      tail: 0,
    }
    let q2 :queue = {
      data: [],
      head: 0,
      tail: 0,
    }
    let input1 :Array<number> = [2, 4, 1, 2, 5, 6];
    let input2 :Array<number> = [3, 1, 3, 5, 6, 4];
    let i :number = 0;

    for (i = 0; i < input1.length; i++) {
      q1.data.push(input1[q1.tail++]);
    }

    for (i = 0; i < input2.length; i++) {
      q2.data.push(input2[q2.tail++]);
    }
    
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
