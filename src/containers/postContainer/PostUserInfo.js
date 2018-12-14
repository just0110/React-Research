import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/MediaActions'

class PostUserInfo extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }

  render() {
    const { user } = this.props
    if (!this.props.user) return null

    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId),
  }
}

export default connect(mapStateToProps, { fetchUser })(PostUserInfo)