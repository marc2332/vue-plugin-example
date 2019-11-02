<template>
  <div>
    <div  v-bind:key="todo.id" v-for="todo in todos">
      <todoComponent v-bind:todo="todo"/>
    </div>
  </div>
</template>

<script>
import todoComponent from "./todo.vue"
export default {
  name: 'Todos',
  components:{
    todoComponent
  },
  props: [
    "todos"
  ]
}

</script>
