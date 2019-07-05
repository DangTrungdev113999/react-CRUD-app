import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	}

	componentWillMount() {
		if(localStorage && localStorage.getItem('tasks')) {
			let tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks : tasks
			})

		}
	}

	onGenerateData = () => {
		let tasks = [
			{
				id: this.generateID(),
				name: 'học angular',
				status: true
			},
			{
				id: this.generateID(),
				name: 'viva vivu',
				status: false
			},
			{
				id: this.generateID(),
				name: 'học angular',
				status: true
			}
		]

		localStorage.setItem('tasks', JSON.stringify(tasks))

		this.setState({
				tasks : tasks
		})
		
	}

	s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID() {
		return this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4(); 
	}

    render() {
    	const { tasks } = this.state
        return (
        	<div className="container">
        		<div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    	{/*form*/}
                    	<TaskForm/>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8' >
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>

                        <button 
	                        type="button" 
	                        className="btn btn-danger ml-5"
	                        onClick={ this.onGenerateData }>
                            Generate Data
                        </button>

                        {/*search - sort*/}
                        <Control/>
			            <div className="row mt-15">
			                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			                	<TaskList
			                		tasks = { tasks }
			                	/>
			                </div>
			            </div>
                    </div>
                </div>
            </div>
        		
        )
    }
}

export default App;
