
const initState = {
    users : [
        {id: 1, name: 'Tien'},
        {id: 2, name: 'React'},
        {id: 3, name: 'React Js'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // console.log('>>> check action: ', action)
            let users = state.users
            users = users.filter(user => user.id !== action.payload.id)
            return {
                ...state, users
            }

        case 'CREATE_USER':
            console.log('>>> check action: ', action)
            let id = Math.floor(Math.random()*100000)
            let userNew = { id: id, name: `name ${id}` }
            return {
                ...state, users: [...state.users, userNew]
            }
    
        default:
            return state
    }
    
}

export default rootReducer