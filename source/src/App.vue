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
        },
         {
          id:3,
          title:"todo 3",
          done:false
        },
         {
          id:4,
          title:"todo 4",
          done:false
        }
      ]
    }
  }
}
</script>

<style>
:root{
  --white-black:black;
  --primaryColor:rgb(238,238,238);
  --secondaryColor:white;
  --shadows:rgba(0,0,0,0.2);
  --accentColor:green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--white-black);
  margin-top: 60px;
}
</style>
