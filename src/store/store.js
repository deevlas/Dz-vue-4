import Vue from "vue"
import Vuex from "vuex"
import {todolist, todoListModule} from "./todolist";


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        [todoListModule]: todolist

    }
})