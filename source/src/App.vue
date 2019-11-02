<template>
  <div id="app">
    <h3>vue-plugin-example</h3>
    <Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
import Todos from "./components/todos.vue";

export default {
  name: 'app',
  components: {
    Todos
  },
  data(){
    return{
      todos:[
        {
          id:1,
          title:"todo 1",
          done:false
        },
         {
          id:2,
          title:"todo 2",
          done:false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
