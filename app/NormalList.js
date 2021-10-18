import React, { Component } from 'react';

class NormalList extends Component {
	render() {
	
		let subtasks = this.props.subtasks.map((subtask) => (
			<li className="normallist__subtask">
				{subtask.name}
			</li>
		));
		
		return (
			<div className="normallist">
				<ul>{subtasks}</ul>
			</div>
		);
	}
}

export default NormalList;