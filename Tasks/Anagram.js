function Anagram(str1,str2){
if(str1.length !== str2.length){
    console.log('Anagram: False')
}else{
    let comparedChars = ''
    for(let i=0; i< str2.length;i++){
        if(str2.index(str1.charAt(i)) !== -1){
            comparedChars += str2.charAt(i);
        }
    }
    if(comparedChars === str2)
        console.log('Anagram: True');
    else
        console.log('Anagram: False')
        
    }
}

Anagram('anagram', 'nagaram');

function AnagramSort(str1,str2){
    return str1.split('').sort().join() === str2.split('').sort().join() ? true : false;
}

// function AnagramBase(str1,str2){
//     if(str1.length !== str2.length){
//         return 'Anagram: False';
//     }else{
//         let count = 0, str3= ''
//         for(let i=0; i< str1.length;i++){
//             if(str1.charAt(count) === str2.charAt(i)){
//                 count++;
//                 str3+=str1.charAt(count);
//                 break;
//             }
//         }
// }


// Input: nums = [11,2,15,7], target = 9
// Output: [1,3]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function(nums, target) {
    
    let resultArr = [];

    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                resultArr.push(i);
                resultArr.push(j);
                break;
            }
        }
        if(resultArr.length){
            break;
        }
    }
    return resultArr;
}


//index.js

const mapStatetoProps = (state)=>{
    add : state.add,
    del: state.del
}

const mapDispatchtoProps = () => {
    AddAction,
    DelAction
}


//Actions.js

export function AddAction(){
    return {
        type: 'ADD_ACTION'
    }
}

export function DelAction(){
    return{
        type: 'DEL_ACTION'
    }
}


//Reducer.js

import {AddAction, DelAction} from './Actions';

const initialState = {
    add : 0,
    del: 0
}

const reducerOperations = (initialState, action){
    Switch (action.type){
        case 'ADD_ACTION' :
            return {
                ...initialState,
                add: add++
            }
        case 'DEL_ACTION' :
            return{
                ...initialState,
                del: del--
            }
        case default : 
            state;
            break

    }
}