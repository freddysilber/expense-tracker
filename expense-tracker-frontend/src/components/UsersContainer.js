import React from 'react'
import axios from 'axios'

export default class UsersContainer extends React.Component {

	constructor() {
		super()
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		axios.get('/api/v1/users')
			.then(data => this.setState({ users: data.data.data }))
			.catch(error => console.error(error))
	}

	render() {
		return (
			<>
				{this.state.users.map(user => <div key={user.id}>Username: {user.attributes.username}</div>)}
			</>
		)
	}
}