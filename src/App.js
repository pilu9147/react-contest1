import { useState } from 'react';
import './App.css';

function App() {
  const [input,setinput] = useState({names:'',mail:'',password:'',confpass:''});
  const [error,seterror] = useState('')
  let handlesub = (e)=>{
    e.preventDefault()
     if(input.names === '') {
      return seterror('name cant be empty')
     }
     else if(input.mail === '') {
      return seterror('email cant be empty')
     }
     else if(input.password === '' || input.confpass === '') {
      return seterror('password cant be empty')
     }
     else if(input.password !== input.confpass) {
      return seterror('password mismatched')
     }

     else seterror('Successfully Created!')
     setinput({names:'',mail:'',password:'',confpass:''})
  }

  return (
    <div className="main">
        <form onSubmit={handlesub}>
        <input type="text" name="names" placeholder='Full Name' value={input.names} onChange={(e) => setinput({ ...input, names: e.target.value })} /><br />
        <input type="email" name="mail" placeholder='Email Address' value={input.mail} onChange={(e) => setinput({ ...input, mail: e.target.value })} /><br />
        <input type="password" name="password" placeholder='Password' value={input.password} onChange={(e) => setinput({ ...input, password: e.target.value })} /><br />
        <input type="password" name="confpass" placeholder='Confirm Password' value={input.confpass} onChange={(e) => setinput({ ...input, confpass: e.target.value })} /><br />
        <button type="submit">Create Account</button>
        {error && <p>{error}</p>}
        </form>
    </div>
  );
}

export default App;
