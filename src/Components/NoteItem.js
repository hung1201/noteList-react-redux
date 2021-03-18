import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
  editClick = () =>{  // Thực hiện 2 hành động
    //Hiển thị form
    this.props.switchForm()

    //Truyền dữ liệu cần sửa vào form
    this.props.getEditObject(this.props.note) // note from NoteList
  }
  delClick = () => {

    this.props.getDeleteObjectId(this.props.note.id)
    this.props.notifyOn("Xóa ghi chú: '" + this.props.note.noteTitle +"' thành công","danger")
  }
    render() {
        return (
<div className="card">
<div className="card-header" role="tab" id="note1">
<h5 className="mb-0">
<a data-toggle="collapse" data-parent="#noteListID" 

                href={"#num"+this.props.id} 

aria-expanded="true" aria-controls="noteContent1">

                {this.props.noteTitle}       
</a>
<div className="btn-group float-right text-white">
<button 
                onClick = {() => this.editClick()}

className="btn btn-outline-info btn-warning text-white">
Edit</button>
<button 
                onClick = { () => this.delClick()}
className="btn btn-outline-secondary btn-danger text-white">
Del</button>

</div>
</h5>
</div>
<div            id={"num"+this.props.id} 

className="collapse in" role="tabpanel" aria-labelledby="note1">
<div className="card-body">
  
                {this.props.noteContent}
</div>
</div>
</div>
);
}
}
const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.isStatusReducer.isOpen
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchForm: () => {
      dispatch(
        {
          type: "SWITCH_FORM"
        }
        )
    },
    getEditObject: (editObject) => {
      dispatch(
        {
          type: "GET_INFO",
          editObject
        }
        )
    },
    getDeleteObjectId: (objectId) => {
      dispatch({type:"DELETE",objectId})
    },
    notifyOn: (getNotifyContent,getNotifyType) => {
      dispatch({type: "SWITCH_NOTIFY_ON",getNotifyContent,getNotifyType})
    },
    notifyOff: () => {
      dispatch({type: "SWITCH_NOTIFY_OFF"})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteItem)