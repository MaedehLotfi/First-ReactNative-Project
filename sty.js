import {
  StyleSheet
} from 'react-native';
import Fonts from './Font';

const styles=StyleSheet.create({
  main:{ 
    flexGrow:1,
    justifyContent:'center'
  },
  textInput:{
    borderColor:"#6495ed", 
    borderWidth:1, 
    borderRadius:10, 
    margin:10, 
    padding:5, 
    textAlign:'center',
    
  },
  buttonText:{
    color:"white", 
    textAlign:'center',
    fontFamily:Fonts.IRANSansMobile,
  },
  button:{
    backgroundColor:"#465899", 
    borderRadius:10, 
    margin:10, 
    padding:10
  },
  title:{
    fontWeight:"bold",
    color:'black',
    fontSize:18,
    fontFamily:Fonts.IRANSansMobile,
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
    borderColor:'#6495ed', 
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
  },
  levelView:{
    flexDirection: 'row'
  },
  textLevel:{
    fontSize:18,
    color:'black',
  },
  textInfo:{
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    fontFamily:Fonts.IRANSansMobile,
  },
  tripleView:{
    flexDirection: 'row',
    alignContent:'center',
    flexWrap:'wrap',
  },
  eachViewCheck:{
    borderRadius:10,
    borderWidth:3,
    borderColor:'#6495ed',
    margin:5 ,
    width:'30%', 
    height:60, 
    alignItems:'center',
  }
});


export default styles;
