export default function Multytable({value}) {
    const result=[];
     for (let table = 1; table <= value; table++) {
        for(let i = 1; i <=10; i++) {
            result.push(
                <table>
                    <tr>
                        <td>{table}</td>
                        <td>x</td>
                        <td>{i}</td>
                        <td>=</td>
                        <td>{table*i}</td>  
                    </tr>
                </table>
            );
         
        }
     }
     console.log(result)
    return(
        <div>{result}
           </div>
    )
    
}