import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Components/Nav.js';
import NoteForm from './Components/NoteForm.js';
import NoteList from './Components/NoteList.js';
import Notify from './Components/Notify.js';

class App extends Component {
  showForm = () => {
    if(this.props.isStatus){
      return (
        <NoteForm/>
      )
    }
  }
  render() {
    return (
      <div>
        <Nav/>
        <Notify/>
        <div className="container">
          <div className="row">
            <NoteList/>
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isStatus: state.isStatusReducer.isOpen
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchForm: () => {
      dispatch({type: "SWITCH_FORM"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
