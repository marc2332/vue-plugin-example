<template>
  <div class="todo" v-bind:class="{'done':todo.done}" >
  <input type="checkbox" v-on:change="markDone"> 
    <h3 >{{todo.title}}</h3>
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
    .todo input{
      margin:auto 20px;
    }
    .todo{
      display:flex;
      background:var(--primaryColor);
      color:var(--white-black);
      padding:10px;
      margin:10px 5px;
      border-radius:10px;
      box-shadow:0px 2px 5px var(--shadows)
    }
    .todo:hover{
      cursor:pointer;
      background:var(--secondaryColor);
    }
    .done{
        color:var(--accentColor);
    }
</style>