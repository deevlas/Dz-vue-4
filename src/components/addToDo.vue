<template>
    <div>
        <input type="text" v-model="text">
        <button @click="add">Add ToDo</button>
    </div>
</template>

<script>
    import {todoListModule} from "../store/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {ADD_TODO} from "../store/todolist/types";

    const {mapActions} = createNamespacedHelpers(todoListModule)
    export default {
        name: "addToDo",

        data() {
            return {
                text: ""
            }
        },

        methods: {
            ...mapActions({
                addToDo: ADD_TODO
            }),

           async add() {


               try {
                   const obj = {
                       text: this.text
                   };
                   await this.addToDo(obj);
                   this.text = "";
               } catch (e) {
                   console.log(e)
               }
            }
        }
    }
</script>

<style scoped>

</style>