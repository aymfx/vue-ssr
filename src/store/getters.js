export default {
     getItems(state){
         
     },
     doneTodosCount: (state, getters) => {
         return state.todos.filter(todo => todo.done)
     }
}