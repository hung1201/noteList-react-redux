import React, { Component } from 'react';
import {Alert,AlertContainer} from 'react-bs-notifier'
import { connect } from 'react-redux';
class Notify extends Component {
    handleNotify = () => {
        this.props.notifyOff()
    }
    render() {
        if(this.props.isNotify){
           return ( 
            <AlertContainer position="bottom-right">
                <Alert type={this.props.notifyType} onDismiss={()=>this.handleNotify()} timeout={2000}>
                   {this.props.notifyContent}
                </Alert>
            </AlertContainer>
        ); 
        }
        else {
            return null
        }    
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isNotify: state.isStatusReducer.isNotify,
        notifyContent: state.isStatusReducer.notifyContent,
        notifyType: state.isStatusReducer.notifyType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        notifyOff: () => {
            dispatch({type: "SWITCH_NOTIFY_OFF"})
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notify)
