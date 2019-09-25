
const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean Kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const filters = {

    searchText: '',
    hideCompleted: false

}


// lista de incompletos
const incompleteTodos = todos.filter(function(dato){

    return !dato.completed 

})
        

//mensaje de # todos que faltan
 
const summary = document.createElement('h2')

summary.textContent = `You have ${incompleteTodos.length} todos left`

document.querySelector('body').appendChild(summary)







// RENDER

const renderTodos = function(todos, filters){

    let filteredTodos = todos.filter(function(texto){

        return texto.text.toLowerCase().includes(filters.searchText.toLowerCase())

    })

    filteredTodos = filteredTodos.filter(function(todo){

        if(filters.hideCompleted){
            return !todo.completed
        }else{
            return true
        }

    })

    


     document.querySelector('#todos-list').innerHTML = ''





    filteredTodos.forEach(function(dato){

        const p = document.createElement('p')
        p.textContent = dato.text
        document.querySelector('#todos-list').appendChild(p)



    })
}



renderTodos(todos, filters)


// filtro

document.querySelector('#search-text').addEventListener('input', function(e){

    filters.searchText = e.target.value
    renderTodos(todos, filters)

})



document.querySelector('#todo-form').addEventListener('submit', function(e){

    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''

})


document.querySelector("#hide-completed").addEventListener('change', function(e){

        filters.hideCompleted = e.target.checked
        renderTodos(todos, filters)

} )


