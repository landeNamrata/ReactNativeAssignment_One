import { AsyncStorage } from "react-native";
import createDataContext from './CreateDataContext';
import trackerApi from "../Api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage:'', token: action.payload };
            case 'signout' :
                return { token:null , errorMessage:''};
            default:
            return state;
    }
};


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('Account');
    } catch (err) {
        // console.log(err.response.data);
        dispatch({
            type: 'add_error',
            payload: 'Something went wromg with sign up'
        });
    }
};

const signin = (dispatch) => async({ email, password }) => {
    try {
const response = await trackerApi.post('/signin',{email,password});
await AsyncStorage.setItem('token',response.data.token);
dispatch({ type:'signin' , payload : response.data.token });
navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};
const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow');
};


export const { Provider, Context } = createDataContext(
    authReducer,
    {signup , signin , signout ,},
    {token : null  , errorMessage:''}
);