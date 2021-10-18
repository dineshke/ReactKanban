import React from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "Doing the lab",
		description: "why not",
		color: '#BD8D31',
		status: "in-progress",
		tasks: [],
		subtasks: []
	},
	{
		id: 5,
		title: "Lab exercise",
		description: "why not",
		color: '#BDBDBD',
		status: "done",
		tasks: [],
		subtasks: []
	},
	{
		id: 2,
		title: "Write some code",
		description: "coding is nice",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			},
			{
				id: 4,
				name: "Comment - peace of cake",
				done: false
			}
		],
		subtasks: []
	},
	{
		id: 6,
		title: "Another code",
		description: "coding is nice",
		color: '#3A7E3A',
		status: "todo",
		tasks: [
			{
				id: 7,
				name: "Task 1",
				done: true
			},
			{
				id: 9,
				name: "Task 2",
				done: true
			}
		],
		subtasks: [
			{
				id: 5,
				name: "Sub task 1",
			},
			{
				id: 7,
				name: "Sub task 2",
			},
			{
				id: 8,
				name: "Sub task 3",
			},
			{
				id: 9,
				name: "Sub task 4",
			}
		]
	},
	{
		id: 2,
		title: "Implementation",
		description: "Implement a feature",
		color: 'green',
		status: "live",
		tasks: [
			{
				id: 1,
				name: "Design",
				done: true
			},
			{
				id: 2,
				name: "Develop",
				done: true
			},
			{
				id: 3,
				name: "Test",
				done: true
			}
		],
		subtasks: []
	},
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));