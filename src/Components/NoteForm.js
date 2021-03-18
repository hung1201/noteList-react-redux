import React, { Component } from 'react';
import { connect } from 'react-redux'
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle:"",
      noteContent:"",
      id:""
    }
  }
  componentWillMount() {
    if(this.props.editInfo){  // Trường hợp edit
      this.setState({
        id:this.props.editInfo.id,
        noteTitle:this.props.editInfo.noteTitle,
        noteContent:this.props.editInfo.noteContent
      });
    }
  }
  isChange =(event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState(
      {
        [name]:value
      }
    );
  }
  addData = (noteTitle,noteContent) => {
    if(this.state.id){        // Kiểm tra id để sửa hoặc thêm ( không có id là sửa)
      var editObject = {}
      editObject.id = this.state.id
      editObject.noteTitle = this.state.noteTitle
      editObject.noteContent = this.state.noteContent
      this.props.editDataFromStore(editObject) // Đẩy dữ liệu đã sửa vào store qua tham số editObject
      this.props.switchForm()
      this.props.notifyOn("Sửa thành công","warning")
    }
    else{ 
      var info = {}
      info.noteTitle = noteTitle
      info.noteContent = noteContent
      if( info.noteTitle !== undefined && info.noteContent !== undefined ){
        this.props.addDataFromStore(info) // Sử dụng reducer trong store - dispatch ADD
        this.props.switchForm()
        this.props.notifyOn("Đã thêm ghi chú: " +info.noteTitle,"success")
      }
      else{
      }
    }
  }
  changeTitle= () => {
    if(this.props.isAdd){ // Trường hợp Add form
      return (
        <h4>Thêm mới</h4>
      )
    }
    else {
      return (
        <h4>Sửa thông tin</h4>
      )
    }
  }
    render() {
        return (
<div className="col-4">
                  {this.changeTitle()}
<form>
<div className="form-group">
<label htmlFor="noteTitle">Title</label>
<input 
                  defaultValue={this.props.editInfo.noteTitle} 
                  onChange = { (event) => this.isChange(event)}

type="text" className="form-control" 
name="noteTitle" id="noteTitle" placeholder="Title" />
</div>
<div className="form-group">
<label htmlFor="noteTitle">Note</label>
<textarea  
                  defaultValue={this.props.editInfo.noteContent}
                  onChange = { (event) => this.isChange(event)}

type="text" placeholder="Note" className="form-control" 
name="noteContent" id="noteTitle" />
</div>
<button 
                  onClick = { () => this.addData(this.state.noteTitle,this.state.noteContent) } 

type="reset" className="btn btn-primary btn-block">Submit</button>
</form>
</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editInfo: state.crudReducer.editInfo,
    isOpen: state.isStatusReducer.isOpen,
    isAdd: state.isStatusReducer.isAdd
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataFromStore: (getInfo) => {
      dispatch({type:"ADD",getInfo})
    },
    editDataFromStore:(getItem) => { // Đẩy dữ liệu đã sửa vào store qua tham số getItem
      dispatch({type:"EDIT",getItem})
    },
    switchForm: () => {
      dispatch({type: "SWITCH_FORM"})
    },
    notifyOn: (getNotifyContent,getNotifyType) => {
      dispatch({type: "SWITCH_NOTIFY_ON",getNotifyContent,getNotifyType})
    },
    notifyOff: () => {
      dispatch({type: "SWITCH_NOTIFY_OFF"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)