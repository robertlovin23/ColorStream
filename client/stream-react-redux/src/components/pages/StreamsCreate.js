import React from 'react'
import { connect } from 'react-redux'

import StreamForm from './StreamForm'
import { createStream } from '../../actions'

class StreamsCreate extends React.Component{

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues)
    }
  
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Create a Stream!</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    createStream
})(StreamsCreate)