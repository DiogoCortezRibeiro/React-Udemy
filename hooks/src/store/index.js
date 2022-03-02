export const initialState = {
    numero   : 0,
    cart     : [], 
    user     : null,
    products : [],
}

export function reducer(state, action)
{
    switch(action.type)
    {
        case 'number_add2': 
            return {...state, numero: state.numero + 2}
        case 'login':
            return {...state, user: {name: action.name}}
        case 'multipy_7': 
            return {...state, numero: state.numero * 7}
        case 'division_25': 
            return {...state, numero: state.numero / 25}
        case 'parse_int': 
            return {...state, numero: parseInt(state.numero)}
        case 'add_number': 
            return {...state, numero: state.numero + action.number}
        default:    
            return state
    }
}