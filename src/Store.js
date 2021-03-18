import data from './firebase.js'

var redux = require('redux')

const noteInitialState = {
    editInfo : {}
}
const crudReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD":
            data.push(action.getInfo)
            return state
        case "GET_INFO":
            return {...state, editInfo: action.editObject}
        case "EDIT":
            data.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            return {...state, editInfo:{}}
        case "DELETE":
            data.child(action.objectId).remove()
            return {...state, editInfo:{}}
        default:
            return state
    }
}
const isStatusState = {
    isOpen:false,
    isAdd:false,
    isNotify:false,
    notifyContent:"",
    notifyType:""
}
const isStatusReducer = (state = isStatusState, action) => {
    switch (action.type) {
        case "SWITCH_FORM":
            return {...state,isOpen:!state.isOpen}
        case "SWITCH_ADD_FORM":
            return {...state,isAdd:!state.isAdd}
        case "SWITCH_NOTIFY_ON":
            return {...state,isNotify:true,notifyContent:action.getNotifyContent,notifyType:action.getNotifyType}
        case "SWITCH_NOTIFY_OFF":
            return {...state,isNotify:false}
        default:
            return state
    }
}
const allReducers = redux.combineReducers({
    crudReducer,
    isStatusReducer
})
var store = redux.createStore(allReducers)

// store.subscribe(function (){
//     console.log(JSON.stringify(store.getState()))
// })

export default store