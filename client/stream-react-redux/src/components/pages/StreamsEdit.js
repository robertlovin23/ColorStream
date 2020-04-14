import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import StreamForm from './StreamForm'
import { editStream,showStream } from '../../actions'

class StreamsEdit extends React.Component{  
    componentDidMount(){
        this.props.showStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render(){
        const props = this.props
        console.log(props)

        if(!props.streams){
            return(
                <div>Loading..</div>
            )
        } else {
            return(
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm onSubmit={this.onSubmit} 
                    initialValues={_.pick(props.streams, 'title', 'description')}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps)
    return{
        streams: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    editStream,
    showStream
})(StreamsEdit)