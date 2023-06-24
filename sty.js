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
    textAlign:'center'
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
  }
  
});


export default styles;
