<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Queue></Queue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Queue from '@/components/Queue.vue';

@Component({
  components: {
    HelloWorld,
    Queue,
  },
})
export default class Home extends Vue {
  private a :number = 123;
  
  public mounted() {
    interface test {
      x: number;
      y: number;
    }

    let t :test = { x: 213, y: 123}
    
  }
}
</script>
