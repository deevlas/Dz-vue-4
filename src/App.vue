<template>
  <div>
    <h1>ToDo List</h1>
    <addToDo/>
    <hr>
    <ToDoList/>
  </div>
</template>

<script>



import addToDo from "./components/addToDo";
import ToDoList from "./components/ToDoList";
import {todoListModule} from "./store/todolist";
import {GET_TODOS} from "./store/todolist/types";

export default {
  name: 'App',
  components: {
    ToDoList,
    addToDo
  },
 async beforeMount() {
    try {
      await this.$store.dispatch(`${todoListModule}/${GET_TODOS}`)
    }catch (e) {
      console.log(e)
    }
  }
}
</script>

<style>
</style>
