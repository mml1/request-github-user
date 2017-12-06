import React, {
	Component
} from 'react';
import Results from '../js/results';

const requestUrl = user => `https://api.github.com/users/${user}`
const followersUrl = user => `https://api.github.com/users/${user}/followers`

class GitHubRequest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			successfulRequest: true
		};
	}

	componentDidMount() {

        // Getting GitHub user's handle and follower count
		fetch(requestUrl(this.props.user))
			.then(res => {
				if (!res.ok) {
					throw Error("Failed to retrieve user data")
				}
				return res

			})
			.then(resData => resData.json())
			.then(resData => {

                // Retrieving GitHub user's followers' Avatars
				fetch(followersUrl(this.props.user)).then(followersRes => {
					if (!followersRes.ok) {
						throw Error("Failed to retrieve user data")
					}
					return followersRes
				}).then(followersRes => followersRes.json()).then(followersRes => {
					let followersAvatars = followersRes.map(arr => arr.avatar_url)

					this.setState({
						username: resData.login,
						followersCount: resData.followers,
						followers: followersAvatars
					})
				})
			}, () => {
				this.setState({
					successfulRequest: false
				})
			})
	}
	render() {
		return (
            <div>
                <Results userData = {this.state }/>
            </div>

		);
	}
}

export default GitHubRequest;
