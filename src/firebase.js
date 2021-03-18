import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD5O_BCryDeW5pzI8iQZ5BgsrEaCWTN3_g",
    authDomain: "notelistreact-bb043.firebaseapp.com",
    databaseURL: "https://notelistreact-bb043-default-rtdb.firebaseio.com",
    projectId: "notelistreact-bb043",
    storageBucket: "notelistreact-bb043.appspot.com",
    messagingSenderId: "554242273586",
    appId: "1:554242273586:web:7cfe978ab933c22f1f672b",
    measurementId: "G-WEV159SBW3"
};
firebase.initializeApp(firebaseConfig);
var data = firebase.database().ref("dataNote")
export default data

//Kết nối tới bảng trong database
// var data = firebase.database().ref("dataNote")
//Lấy dữ liệu trong firebase
// data.once("value")
//     .then(function(snapshot) {
//         console.log(snapshot.val())
//     })

// var data = firebase.database().ref("dataNote/note2")

//Sửa dữ liệu trong firebase 
// data.set({
//     id: 2,
//     title: "21/03/2021",
//     content: "Angular"
// })

//Thêm dữ liệu vào firebase
// pushDataToFirebase = () => {
//   var connectData = firebase.database().ref("dataNote")
//   connectData.push({
//     title:"30/03/2021",
//     content: "ResponsiveDesign"
//   })
//   console.log("Clicked")
// }

//Xóa dữ liệu trong firebase
// removeData = (id) => {
//   var connectData = firebase.database().ref("dataNote")
//   connectData.child(id).remove()
//   console.log("Da xoa " + id)
// }

// addData = (info) => {
//   data.push(info)
// }