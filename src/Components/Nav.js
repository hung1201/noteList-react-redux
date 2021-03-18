import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  navHandle = (event) => {
    event.preventDefault();
    this.props.switchForm()
    this.props.changeAddStatus()
  }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <a className="navbar-brand" href="/">NoteLIST</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse " id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li className="nav-item active">
              <a 
                onClick = { (event) => this.navHandle(event)}
              className="nav-link" href="/">Add to LIST</a>
            </li>

          </ul>
        </div>
      </nav>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchForm: () => {
      dispatch({type: "SWITCH_FORM"})
    },
    changeAddStatus: () => {
      dispatch({type: "SWITCH_ADD_FORM"})
    }
  }
}
export default connect(null, mapDispatchToProps)(Nav)
