import {
    StyleSheet,
    ScrollView,
  } from 'react-native'
const styles = StyleSheet.create({
    responsiveBox: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
      },
      
      header:{width:30,marginLeft:10},

      headertext:{
        color: 'black',
        marginLeft: 15,
        fontSize: 16,
      },

      edit:{
        backgroundColor:"#CDEFE9",width:65,height:30,
        justifyContent:"center",alignItems:"center",
        borderRadius:4,marginTop:10,marginBottom:20},

      profileimg:{width:80,height:80,borderRadius:50,marginTop:20},

      profile:{ width: "100%", backgroundColor: "white", marginTop: 15, 
      justifyContent: "center", alignItems: "center" },

      line:{width:"100%",height:1,backgroundColor:"#E0E0E0",},

      flexx:{ flexDirection: "row",width:"100%" ,height:50,
      alignItems:"center"},

      left:{width:"40%",marginLeft:"8%",color:"#616161"},

      right:{width:"50%",color:"#616161",height:50},

      left1:{width:"40%",marginLeft:"8%",color:"#616161",marginTop:15},

      flexx1:{ flexDirection: "row",width:"100%" ,height:140},

      right1:{width:"50%",color:"#616161",textAlignVertical: 'top',height:140},


})




export  default styles 