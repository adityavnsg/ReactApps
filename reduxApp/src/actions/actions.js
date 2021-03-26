import {INCREMENT, DECREMENT, RESET} from './actionTypes';

export const addInputBoxAction = ()=>({
    type : INCREMENT
});

export const minusInputBoxAction = ()=>({
    type : DECREMENT
})

export const resetInputBoxAction = () => ({
    type : RESET
})