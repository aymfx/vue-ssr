export default {
     getItems(state){
         return state.item;
     },
     doneTodosCount: (state, getters) => {
         return state.todos.filter(todo => todo.done)
     }
}