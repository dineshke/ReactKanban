import React, { Component } from 'react';

import CheckList from './CheckList';
import NormalList from './NormalList';

class Card extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			showDetails: false
		};
	}

	render() {
		let cardDetails;
		if (this.state.showDetails) {
			cardDetails = (
				<div className="card__details">
					{this.props.description}
				<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				<NormalList cardId={this.props.id} subtasks={this.props.subtasks} />
				</div>
			);
		};
		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color
		};
		return (
			<div className="card">
				<div style={sideColor}/>
				<div className="card__title" onClick={ ()=>this.setState({showDetails: !this.state.showDetails}) } >{this.props.title}</div>
				{cardDetails}
			</div>
		);
	}
	
}

export default Card;