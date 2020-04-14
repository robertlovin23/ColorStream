import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { listStreams } from '../../actions'

class StreamsList extends React.Component{

    componentDidMount(){
        this.props.listStreams();
    }

    renderCurrentUser = (stream) => {
        if(stream.userId === this.props.userId){
            return (
                <div className="right floated content">
                    <Link to={`streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
            <div>
                <Link to="/streams/create" className="ui button primary">
                    Create Stream
                </Link>
            </div>
            )
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return(
                <div className="item" key={stream.id}>
                    {this.renderCurrentUser(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`}>
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props.streams)
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                <div className="right floated content">
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    listStreams
})(StreamsList)