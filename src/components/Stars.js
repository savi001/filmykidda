import React from 'react'
import {ImStarFull,ImStarEmpty,ImStarHalf} from "react-icons/im"

const Stars = ({star}) => {
    console.log(star);
    let rounded_stars=Math.floor(star);
    let balance=5-rounded_stars;
    let decimal=star-rounded_stars;
    let halfstar=0;
    if(decimal>0){
        halfstar++;
        balance=balance-1;
    }
    var rows = [];
    var k=0;
for (let i = 0; i < rounded_stars; i++) {
  
    rows.push(<ImStarFull key={k++} className='icon'/>);
}
if(halfstar>0){
    rows.push(<ImStarHalf key={k++} className='icon'/>)
}
for (let i = 0; i < balance; i++) {
  
    rows.push(<ImStarEmpty key={k++} className='icon'/>);
}
console.log(rows);
  return (
    <div>
      {star!=null? <div className='icon-style'><span>{rows}</span></div>:<p>N/A</p>}
       
      
    </div>
  )
}

export default Stars;

