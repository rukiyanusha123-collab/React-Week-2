import { useReducer } from "react";

const initialState={
  count:0
}
function reducer(state,action){
  switch(action.type){
    case "increment":
   return{
     count:state.count+1
   }
   case "decrement":
    if (state.count<=0){
      return state;
    }
    return{
      count:state.count-1
    }

    case "reset":
      return{
        count:0
      }
   
      default :
      return state;
  };
}
function App(){
  const[state,dispatch]=useReducer(
    reducer,initialState
  );
  return(
    <>
        <h1>Count: {state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"reset"})}>RESET</button>
    </>
  )
}
export default App;   