import { useState } from "react"
const Task11 = () => {
    const [value,setValue]=useState("")
  const [array,setArray]=useState([])
  const [dispaly,setDisplay]=useState(false)


  const handleAdd=(value)=>{
    setDisplay(false)
    array.push(value)
    setValue("")
  }
  const handleDiaplay=()=>{
setDisplay(true)
  }
  return(
    <div>
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}></input>
      <button type='button' onClick={()=>handleAdd(value)}>Add</button>
      <button type='button' onClick={()=>handleDiaplay()}>Display</button>
      {dispaly ==true &&<div>{array.map((val,index)=>{
        return(
          <p>{`Element ${index} : ${val}`}</p>
        )
      })}</div>}
    </div>
  )
}
 
export default Task11;
