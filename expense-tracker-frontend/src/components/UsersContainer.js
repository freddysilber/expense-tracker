import React from 'react'

export default class UsersContainer extends React.Component {

	constructor() {
		super()
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/users')
			.then(response => response.json())
			.then(data => this.setState({ users: data.data }))
			.catch(error => console.log(error))
	}

	render() {
		return (
			<>
				{this.state.users.map(user => <div key={user.id}>{user.attributes.username}</div>)}
			</>
		)
	}
}