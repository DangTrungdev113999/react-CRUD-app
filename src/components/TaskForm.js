import React, { Component } from 'react';

class TaskForm extends Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        // const {  } = this.props;
        return (
			<div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm Công Việc
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value=''
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                        >
                            <option >Kích Hoạt</option>
                            <option >Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
			</div>
        		
        )
    }
}

export default TaskForm;
