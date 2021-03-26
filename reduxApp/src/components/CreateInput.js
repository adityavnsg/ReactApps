import React from 'react';
import { connect } from 'react-redux';
import { addInputBoxAction, minusInputBoxAction, resetInputBoxAction } from '../actions/actions';
import { InputsCountSelector, ShowListSelector } from '../selectors/InputsCountSelector';
import TabelComponent from './TableComponent';
import TableHeaderComponent from './TableHeaderComponent';
import '../styles/TableStyles.css';

const CreateInput = (props) => {
    function handleClick(e) {
        if (e.target.value === 'add')
            props.addInputBoxAction()
        else if (e.target.value === 'sub')
            props.minusInputBoxAction()
        else
            props.resetInputBoxAction()
    }
    return (
        <React.Fragment>
            <input type='text' />
            <h1>{"state update:" + props.numOfInputs}</h1>
            <button onClick={handleClick} value='add'>+</button>
            <button onClick={handleClick} value='sub'>-</button>
            <button onClick={handleClick} value='reset'>Reset</button>
            <br/>
            {props.showList ? (<table>
                <tbody>
                    <TableHeaderComponent />
                    {props.showList.map((items, index) => <TabelComponent item={items} key={index} />)}
                </tbody>
            </table>) : null}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        numOfInputs: InputsCountSelector(state),
        showList: ShowListSelector(state)
    }
}

const mapDispatchToProps = {
    addInputBoxAction,
    minusInputBoxAction,
    resetInputBoxAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateInput)