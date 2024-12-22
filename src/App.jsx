
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter';
function App() {
  const count=useAppSelector((state)=>state.counter);
  const dispatch=useAppDispatch()


  return (
    <>
     <h1>Redux learning</h1>
       <h1>Count is {count}</h1>
       <button onClick={()=>dispatch(increment())}>increment</button>
      < button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  )
}

export default App
