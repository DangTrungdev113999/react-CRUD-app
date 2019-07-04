import React, { Component } from 'react';
import './App.css';
import Product from './components/product'

class App extends Component {

    render() {
        return (
        	<div class="container">
        		<div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
			            <div className="panel panel-warning">
			                <div className="panel-heading">
			                    <h3 className="panel-title">
			                        Thêm Công Việc
			                        <span
			                            className="fa fa-times-circle text-right"
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
                    </div>
                    <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8' >
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>
                        <div className="row mt-15">
				            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				                <div className="input-group">
				                    <input
				                        name="keyword"
				                        type="text"
				                        className="form-control"
				                        placeholder="Nhập từ khóa..."
				                    />
				                    <span className="input-group-btn">
				                        <button className="btn btn-primary" type="button">
				                            <span className="fa fa-search mr-5"></span>Tìm
				                        </button>
				                    </span>
				                </div>
				            </div>
				            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				                <div className="dropdown">
				                    <button
				                        className="btn btn-primary dropdown-toggle"
				                        type="button"
				                        id="dropdownMenu1"
				                        data-toggle="dropdown"
				                        aria-haspopup="true"
				                        aria-expanded="true"
				                    >
				                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
				                    </button>
				                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
				                        <li >
				                            <a
				                                role="button"

				                            >
				                                <span className="fa fa-sort-alpha-asc pr-5">
				                                    Tên A-Z
				                                </span>
				                            </a>
				                        </li>
				                        <li>
				                            <a
				                                role="button"
				                               
				                            >
				                                <span className="fa fa-sort-alpha-desc pr-5">
				                                    Tên Z-A
				                                </span>
				                            </a>
				                        </li>
				                        <li role="separator" className="divider"></li>
				                        <li>
				                            <a
				                                role="button"
				                                
				                            >
				                                Trạng Thái Kích Hoạt
				                            </a>
				                        </li>
				                        <li>
				                            <a
				                                role="button"
				                                
				                            >
				                                Trạng Thái Ẩn
				                            </a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
			            </div>
			            <div className="row mt-15">
			                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			                    <table className="table table-bordered table-hover">
			                        <thead>
			                            <tr>
			                                <th className="text-center">STT</th>
			                                <th className="text-center">Tên</th>
			                                <th className="text-center">Trạng Thái</th>
			                                <th className="text-center">Hành Động</th>
			                            </tr>
			                        </thead>
			                        <tbody>
			                            <tr>
			                                <td></td>
			                                <td>
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        name="filterName"
			                                    />
			                                </td>
			                                <td>
			                                    <select
			                                        className="form-control"
			                                        name="filterStatus"
			                                    >
			                                        <option >Tất Cả</option>
			                                        <option >Ẩn</option>
			                                        <option >Kích Hoạt</option>
			                                    </select>
			                                </td>
			                                <td></td>
			                            </tr>
			                            
			                        </tbody>
			                    </table>
			                </div>
			            </div>
                    </div>
                </div>
            </div>
        		
        )
    }
}

export default App;
