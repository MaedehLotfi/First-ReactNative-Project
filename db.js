import SQLite from 'react-native-sqlite-storage';

const db= SQLite.openDatabase(
    {name:"myDataBase.db",
  location:"default",}
  ,()=>{console.log("Successful Opening DataBase:");},
  error=>{
    console.log("Error Opening DataBase:"+ error);
  },
  );
  export default db;