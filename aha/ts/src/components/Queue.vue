<template>
 <div class="queue">queue</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { log } from 'util';

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
    interface stack {
      data: Array<number>;
      top: number;
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
    let s :stack = {
      data: [],
      top: 0,
    }

    let input1 :Array<number> = [2, 4, 1, 2, 5, 6];
    // let input1 :Array<number> = [1, 2, 3, 4, 5];
    let input2 :Array<number> = [3, 1, 3, 5, 6, 4];
    // let input2 :Array<number> = [6, 7, 8, 9];
    let i :number = 0;
    let t :number;

    for (i = 0; i < input1.length; i++) {
      q1.data.push(input1[q1.tail++]);
    }

    for (i = 0; i < input2.length; i++) {
      q2.data.push(input2[q2.tail++]);
    }
    
    let book :Array<number> = [];
    for (i = 0; i < 10; i++) {
      book[i] = 0;
    }
    let start :any = new Date()


    // while(q1.head < q1.tail && q2.head < q2.tail) {
    while(q1.head < q1.tail) {
      if (Date.now() - start > 1000) {
        throw new Error('Loop running too long!')
      }

      t = q1.data[q1.head];
      q1.head++;

      if (!!book[t]) {
        
        q1.data[q1.tail] = t;
        q1.tail++;
        debugger
        while(s.data[s.top-1] != t) {
          console.log(q1, q2, s, book, t);
             
          if (Date.now() - start > 1000) {
            throw new Error('Loop running too long!1')
          }
          book[s.data[s.top-1]] = 0;
          q1.data[q1.tail] = s.data[s.top];
          q1.tail++;
          s.top--;
        }
        book[s.data[s.top-1]] = 0;
        q1.data[q1.tail-1] = s.data[s.top];
        q1.tail++;
        s.top--;        
        debugger
      } else {
        s.data[s.top] = t;
        s.top++;
        book[t]++;
      }
      if (q1.tail === q1.head) {
        break;
      };
      console.log(s, q1, q2);
      t = q2.data[q2.head];
      q2.head++;
      if (!!book[t]) {
        q2.data[q2.tail] = t;
        q2.tail++;
        while(s.data[s.top-1] != t) {
          debugger
          if (Date.now() - start > 1000) {
            throw new Error('Loop running too long!2')
          }
          book[s.data[s.top-1]] = 0;
          q2.data[q2.tail] = s.data[s.top];
          q2.tail++;
          s.top--;
        }
        book[s.data[s.top-1]] = 0;
        q2.data[q2.tail] = s.data[s.top];
        q2.tail++;
        s.top--;
      } else {
        s.data[s.top] = t;
        s.top++;
        book[t]++;
      }

      if (q2.tail === q2.head) {
        console.log('q2');
        break;
      };

    }
    console.log(s, q1, q2, book);
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
