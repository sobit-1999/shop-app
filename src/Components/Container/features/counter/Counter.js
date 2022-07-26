import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  
//   useEffect(() => {
   
//    count.map(i => {return i.imgNameSum.map(itms2 => {return itms2.imgSum.map((item, index3) => 
//       window.localStorage.setItem('key',
//       JSON.stringify( item )
//       )
//   )})})
// }, [])

const data15 = JSON.parse(window.localStorage.getItem('key'))
console.log(data15);
  return (
    <div>
      <div>
        {/* <span>{count}</span> */}

      </div>
    </div>
  )
}