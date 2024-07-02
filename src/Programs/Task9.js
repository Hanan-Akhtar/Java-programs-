import React from 'react'
import { useState } from 'react'

const Task9 = () => {
    const [ value, setValue ] = useState([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
    const handleValue = ()=>
    {
        if(value.length===0)
        {
            return null;
        }
        else
        {
            let max=0;
            let element;
            for(let i=0; i<=value.length;i++)
            {
                let count=0;
                for(let j=0;j<=value.length;j++)
                {
                    if(value[i]===value[j])
                    {
                        count++;
                    }
                }
                if(count>max)
                {
                    max=count;
                    element=value[i];
                }
            }
            setValue(element +"("+ max+'times'+")" );
        }
    }
  return (
    <div>
        <h1>{value}</h1>
        <h2>Find the most frequent item of an array</h2>
        <button onClick={handleValue}>Find Frequent</button>

    </div>
  )
}

export default Task9;