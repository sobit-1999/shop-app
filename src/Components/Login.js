import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [login, setLogin ] = useState("@gmail.com")
    const [password, setPassword ] = useState("")
    const [ yesLoginPassword, setYesLoginPassword ] = useState('/')
    const [error, setError ] = useState (false)
    const [colors, setColors ] = useState('')
    const [labels, setLabels] = useState('Password')
    const [error2, setError2 ] = useState (false)
    const [colors2, setColors2 ] = useState('')
    const [labels2, setLabels2] = useState('Login')

    const loginLocolstorige = localStorage.getItem('login')
    const passwordLocolstorige = localStorage.getItem('password')
    
    const loginFunck = (e) => {
        if (loginLocolstorige === login && passwordLocolstorige === password ) {
          setYesLoginPassword('/women')
        }
        console.log(loginLocolstorige, passwordLocolstorige, error, error2);
        setError(true)
        setLabels('Error')
        setError2(true)
        setLabels2('Error')
        setLogin('@gmail.com')
        setPassword('')
        
                 if (password === passwordLocolstorige) {
                  setPassword(password)
                    setColors("success")
                    setError(false)
                    setLabels('Password')
                  }
        
                if (login === loginLocolstorige) {
                  setLogin(login)
                    setColors2("success")
                    setError2(false)
                    setLabels2('Login')
                  } 

        if ( loginLocolstorige === null) {
            localStorage.setItem('login', login)
        }

        else if (loginLocolstorige === login){
          setLogin(login)
        }

        // else {setLogin('login xato') }

        if (passwordLocolstorige === null)
        localStorage.setItem('password', password)

        else if (passwordLocolstorige === password ){
            setPassword(password)
        }
        
        // else {setPassword('password xato')}
        }

      
  return (
    <div className='login'>
        <TextField 
                focused 
                color={colors2}
                label={labels2}
                error = {error2}
        sx={{
          marginX: '25%', 
          marginBottom: 6,
          width: '50%'
        }}
        // placeholder='Login'
        value={login}
        onChange={(e) =>setLogin(e.target.value)}
        onClick = {() =>{login === 'login xato'? setLogin(''): setLogin(login)}}
        /><br/>

        <TextField
        focused 
        color={colors}
        label={labels}
        value={password}
        error = {error}
  
  sx={{marginX: '25%', color: "azure", width:"50%"}}
        onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
      <Link to = {yesLoginPassword}>  <Button onClick={loginFunck} sx={{
        marginX: '33%',
         marginTop: 3, 
         border: 1
         }} > LOGIN-PASSWORD</Button></Link>
    </div>
  )
}

export default Login