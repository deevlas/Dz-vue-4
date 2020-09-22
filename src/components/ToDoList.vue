<template>
    <div>
        <ul>

            <li v-for="(item, i) in todoList" :key="i">

                <ToDoItem :item="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import {todoListModule} from "../store/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {TODOS} from "../store/todolist/types";
    import ToDoItem from "./ToDoItem";

    const {mapGetters} = createNamespacedHelpers(todoListModule)
        export default {
        name: "ToDoList",

            components: {
                ToDoItem
            },
            computed: {
                ...mapGetters({
                    todoList: TODOS
                    }


                )

            }

        }
</script>

<style scoped>

</style>