import React, {useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTasks } from './selectors'

const NewTaskCardDiv = styled.div`
    box-shadow:0 1px 0 rgba(9,30,66,.25);
    position:relative;
    border-radius:3px;
    background-color: white;
    min-height:20px;
    padding: 8px;
    margin:8px;
`;

const NewTaskCardArea = styled.textarea`
    width: 100%;
    min-height:100px;
    border-style:none;
    outline:0ch;
    overflow-y:hidden;
`;
const ButtonsDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
`;
const Buttons = styled.button`

`;
function auto_grow(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; 
}
const NewTaskCard = ({status, onCreatePressed, tasks=[], onCancelPressed}) => {
    const [inputValue, setInputValue] = useState('');
    const [placeHolder, setPlaceHolderValue] = useState('Type your new task here');
    const content = (
        <NewTaskCardDiv>
            <NewTaskCardArea
                onKeyDown={e => auto_grow(e)}
                // type="text"
                placeholder= {placeHolder}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}>
            </NewTaskCardArea>
            <ButtonsDiv>
                <Buttons
                    className="btn btn-success btn-sm"
                    onClick = {() => {
                        if(!(inputValue==="")){
                            const isDuplicate = 
                                    tasks.some(task=>task.task=== inputValue);
                            if(!isDuplicate){
                                onCreatePressed(inputValue, status);
                                setPlaceHolderValue('Type your new task here');
                                setInputValue('');
                            }
                            else{
                                setPlaceHolderValue('This task already exists! Enter Something else')
                                setInputValue('');
                            }
                        }
                    }
                    }
                >
                    <span>Confirm</span>
                </Buttons>
                <Buttons 
                    className="btn btn-danger btn-sm"
                    onClick={() => onCancelPressed()
                    }
                >
                    <span>Cancel</span>
                </Buttons>
            </ButtonsDiv>
        </NewTaskCardDiv>
    )
    return content;
}

const mapStateToProps = state => ({
    tasks: getTasks(state)
});

export default connect(mapStateToProps)(NewTaskCard);