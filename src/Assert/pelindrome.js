const Pelindrome = () => {
    let value="hanan";
let value2="";
for (let i = value.length-1; i >=0; i--) {
  value2 +=value[i];

}
    return ( 
        
        <div>
            <h1>Pelindrome</h1>
            {value === value2 ? <h1>True</h1> : <h2>false</h2>}
        </div>    
         );
}
 
export default Pelindrome;