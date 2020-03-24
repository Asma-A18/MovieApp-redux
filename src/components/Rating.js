import React from 'react'




function Stars({count, handleChangeRating=()=>{}}) {
    let rate=[]
for (let i=0 ;i<5;i++)
{
    if(count>i)
    rate.push(<span className='starsgold' onClick={()=>handleChangeRating(i)}>★</span>)
    else
    rate.push(<span  onClick={()=>handleChangeRating(i+1)}>☆</span>)
}
    return (
        <div>
          {rate}  
        </div>
    )
}

export default Stars
