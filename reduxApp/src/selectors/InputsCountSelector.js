import {createSelector} from 'reselect';

const triggerCount = state => state.inputBoxCount;
const listItems = state => state.showList;

const countChange =  (getCount) => {
    if(getCount > 3 || getCount===0) return getCount 
    else return `Click count is not reached to 3, now count is:${getCount}`
}

export const InputsCountSelector = createSelector(triggerCount, countChange);
export const ShowListSelector = createSelector(listItems, items => items ? items : null);