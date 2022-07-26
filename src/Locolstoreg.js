import React, { useState } from 'react'

export default function Locolstoreg() {
  const [value, setValue] = useState('')
   
   const Func = () => {
       localStorage.setItem('key', value)
   }

   
  return (<>
    <div>Locolstoreg</div>
   <input
   value={value}
   onChange={e=> setValue(e.target.value)}
   />
   <button onClick={Func}>Add</button>
    </>
  )
}
