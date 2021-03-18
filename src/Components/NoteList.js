import React, { Component } from 'react';
import NoteItem from './NoteItem';
import data from '../firebase.js'
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }
  componentWillMount(){
    data.on("value",(notes) => {
      var arrayData =[]
      notes.forEach(element =>{
        const key = element.key
        const noteTitle = element.val().noteTitle
        const noteContent = element.val().noteContent
        arrayData.push({
          id:key,
          noteTitle,
          noteContent
        })
      })
      this.setState({
        data : arrayData
      });
    })
  }
  getDataFromFirebase = () => {
    if(this.state.data)
    {
      return this.state.data.map((value,key) => {
        return (
          <NoteItem 
          key = {key}
          id = {value.id}
          note = {value}
          noteTitle = {value.noteTitle}
          noteContent = {value.noteContent}
        />
        )
      })
    }
  }
    render() {
        return (
            <div className="col">
        <div id="noteListID" role="tablist" aria-multiselectable="true">
          {this.getDataFromFirebase()}
        </div>
      </div>
        );
    }
} 

export default NoteList;