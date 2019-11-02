<template>
  <div v-bind:class="{'done':todo.done}" >
    <h3 >{{todo.title}}</h3>
    <input type="checkbox" v-on:change="markDone"> 
  </div>
</template>

<script>

export default {
  name: 'todoComponent',
  components: {},
  props:[
      "todo"
  ],
  methods:{
      markDone(){
          this.todo.done = !this.todo.done
      }
  }
}
</script>

<style >
    .done{
        color:green;
    }
</style>