import initialState from './initialState';

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT' : {
            return {
                ...state
            }
        }
        case 'INCREMENT_SUCCESS' : {
           return {
                ...state,
                inputBoxCount : state.inputBoxCount + 1,
                showList : state.showList === '' ? action.payload : state.showList
            }
        }
        case 'DECREMENT' : {
            return {
                ...state,
                inputBoxCount : state.inputBoxCount -1
            }
        }
        case 'RESET' : {
            return{
                ...state,
                inputBoxCount : 0
            }
        }
        default : {
            return state
        }
    }
}

export default reducer;