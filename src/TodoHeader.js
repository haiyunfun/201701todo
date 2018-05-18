import React from 'react';
const ENTRY_KEY = 13;
export default class TodoHeader extends React.Component {
    handleKeyDown = (event) =>{
        if(event.keyCode === ENTRY_KEY){
            let title = event.target.value;
            this.props.model.addTodo({title});
            event.target.value = '';
        }
    }
    render(){
        return (
             <div className = "form-group">
                    <input autoFocus={true} type="text"  onKeyDown={this.handleKeyDown} className="form-control"/>
             </div>
        )
    }
}
