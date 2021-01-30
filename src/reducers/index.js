const initialState = {
    books: [
        {id:1, 
        title: ' Harry Potter',
        author: 'Annaaallisa'},
        {id:2, 
        title: ' Kolobok',
        author: 'Annd'},
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BOOKS_LOADED': 
        return{
            books: action.payload
        };
        default:
            return state;
    }
    
}

export default reducer;