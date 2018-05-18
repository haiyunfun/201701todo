import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as FilterTypes from './filter-types'
export default class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // todos:[
            //     {id:Math.random(), title:'今天学习React', completed:false},
            //     {id:Math.random(), title:'明天学习Vue', completed:true}
            // ],
            filterTypes:FilterTypes.ALL
        }; //初始化默认状态
    }

    changeFilterType=(filterType)=>{
        this.setState({filterType});
    }
    render(){
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let showTodos = todos.filter(
            (todo)=>{
                switch(this.state.filterType){
                    case FilterTypes.ACTIVE:
                        return !todo.completed;
                    case FilterTypes.COMPLETED:
                        return todo.completed;
                    default:
                        return true;
                }
            }
        )

        let main = (
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="checkbox" checked={activeTodoCount === 0} onChange={this.props.model.toggleAll}/>{activeTodoCount === 0?"取消全选":"全部选中"}
                </li>
                {
                    todos.map((todo,index)=><TodoItem
                        toggle={this.props.model.toggle}
                        key={index}
                        todo={todo}
                        remove={this.props.model.remove}
                    ></TodoItem>)
                }
            </ul>
        )
        return (
            <div className = "container" style={{marginTop:20}}>
                <div className = "row">
                    <div className = "col-md-6 col-md-offset-3">
                        <div className = "panel panel-default">
                            <div className = "panel-heading">
                                <TodoHeader addTodo={this.addTodo}/>
                            </div>
                            <div className = "panel-body">
                                {main}
                            </div>
                            <div className = "panel-footer">
                                <TodoFooter activeTodoCount = {activeTodoCount} filterType={this.props.model.filterType} changeFilterType={this.changeFilterType} deleteCompleted={this.props.model.clearCompleted}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}