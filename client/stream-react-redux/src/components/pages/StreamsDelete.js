import React from 'react'
import Modal from '../layout/Modal'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../../history'
import { showStream,deleteStream } from '../../actions'

class StreamsDelete extends React.Component {
    componentDidMount(){
        this.props.showStream(this.props.match.params.id);
    }

    renderActions(){
        const { id } = this.props.match.params;

        return(
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to={"/"} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.streams){
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream with the title: ${this.props.streams.title}`
    }

    render(){
        return(
            <div>
                StreamDelete
                <Modal title="Delete Stream"
                       content={this.renderContent()}
                       actions={this.renderActions()}
                       onDismiss={() => history.push("/")}
                        />
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        streams: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    showStream,
    deleteStream
})(StreamsDelete)