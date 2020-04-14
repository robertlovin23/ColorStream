import React from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { showStream } from '../../actions'

class StreamsShow extends React.Component{
    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }

    buildPlayer(){
        const {id } = this.props.match.params

        if(this.player || !this.props.streams){
            return;
        } else {
            this.player = flv.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${id}.flv`
            })
            this.player.attachMediaElement(this.videoRef.current);
            this.player.load();
        }
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    componentDidUnmount(){
        this.player.destroy();
    }
    
    componentDidMount(){
        const {id } = this.props.match.params
        this.props.showStream(id);
        this.buildPlayer();
    }

    render(){
        if(!this.props.streams){
            return(
                <div>Loading...</div>
            )
        }
        const { title,description } = this.props.streams
        return(
            <div>
                <video ref={this.videoRef} style={{width: "100%"}} controls/>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        streams: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    showStream
})(StreamsShow)