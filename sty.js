import {
  StyleSheet
} from 'react-native';

const styles=StyleSheet.create({
  main:{ 
    flexGrow:1,
    justifyContent:'center'
  },
  textInput:{
    borderColor:"grey", 
    borderWidth:1, 
    borderRadius:10, 
    margin:10, 
    padding:5, 
    textAlign:'center',
    
  },
  buttonText:{
    color:"white", 
    textAlign:'center'
  },
  button:{
    backgroundColor:"blue", 
    borderRadius:10, 
    margin:10, 
    padding:10
  },
  title:{
    fontWeight:"bold",
    color:'black'
  },
  splashView:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%', 
    height:300
  },
  lottieSty:{
    height:'100%', 
    width:'100%',
  },
  ProfileView:{
    borderWidth:1, 
    borderColor:'gray', 
    borderRadius:10, 
    margin:10, 
    padding:10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  checkboxLabel: {
    margin: 8,
  },
  homeItem:{
    height:50,
    width:'95%',
    padding:10,
    justifyContent:'center', 
    backgroundColor:'#6495ed',
    borderRadius:10,
    margin:10,
  },
  homeItemDaily:{
    height:80,
    width:'95%',
    padding:10,
    justifyContent:'center', 
    backgroundColor:'#20b2aa',
    borderRadius:10,
    margin:10,
  },
  homeTouchable:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  editView:{
    backgroundColor:'lightgray', 
    borderRadius:5, 
    justifyContent:"flex-end", 
    width:50
  },
  editText:{
    textAlign:'center', 
    color:'white',  
  },
  submitButton:{
    backgroundColor:'blue', 
    borderRadius:10,
    padding:5, 
    margin:10,
  },
  submitViewContainer:{
    borderRadius:5, 
    borderColor:"gray", 
    borderWidth:2,
    padding:20,
    margin:10
  }

});


export default styles;
