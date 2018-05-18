import React from 'react';
import * as FilterTypes from './filter-types';
export default class TodoFooter extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-4">你还有{this.props.activeTodoCount}件待办事项</div>
                <div className="col-xs-4">
                    <button className="btn ${this.props.filterType === FilterTypes.ALL?'btn-success':'btn-default'} btn-sm"  onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
                    <button style={{marginLeft:'10px'}} className="btn ${this.props.filterType === FilterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm" onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
                    <button style={{marginLeft:'10px'}} className="btn ${this.props.filterType === FilterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm" onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-4">
                    <button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>
                </div>
            </div>
        )
    }
}