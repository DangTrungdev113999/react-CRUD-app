import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        const { task, index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td> { task.name } </td>
                <td className="text-center">
                    <span 
                        className={ task.status ? 'label label-success' : 'label label-danger' }>
                        { task.status ? "kích hoạt" : "ẩn" }
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        		
        )
    }
}

export default TaskItem;