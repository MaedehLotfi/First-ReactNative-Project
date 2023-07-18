import {USERINFO, API_ADDRESS, Id} from './constString';

const initialState = {
  userinfo: null,
  api_address: 'http://moshavermoslemi.ir/api/App/GetPatientList/',
  id:null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO:
      return {
        ...state,
        userinfo: action.payload,
      };
    case API_ADDRESS:
      return {
        ...state,
        api_address: action.payload,
      };
    case Id:
      return {
        ...state,
        Id: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
