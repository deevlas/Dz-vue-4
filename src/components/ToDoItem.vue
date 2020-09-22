<template>
    <div>
        <p>{{item.text}}<button @click="remove">Delete TODO</button>
        </p>
    </div>
</template>

<script>
    import {todoListModule} from "../store/todolist";
    import {REMOVE_TODO} from "../store/todolist/types";
    import {createNamespacedHelpers} from "vuex";

    const {mapActions} = createNamespacedHelpers(todoListModule)
    export default {
        name: "ToDoItem",

        props: {
            item: {
                type: Object
            }
        },
        beforeMount() {
        },
        methods: {
            ...mapActions({
               removeToDo: REMOVE_TODO

            }),

            async remove() {
                // console.log(this.item.id)
                try {
                    await this.removeToDo(this.item.id)
                }catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped>

</style>