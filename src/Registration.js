import { useState } from 'react';
export default function Form() {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [Cpassword, setCpassword] = useState('')
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCpassword = (e) => {
    setCpassword(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert("Please enter all the fields");
    } else if(password.length <8){
      alert('password be at least 8 characters ');
    }else if(password !==Cpassword){
      alert('Password is not Match  ')
    }else{
      window.location.href = setSubmitted(true);
    };
  }
  const successMessage = () => {
    if (submitted)
      return (alert(`User $[name] successfully registered!!`)
      );
  };
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {successMessage()}
      </div>
      <form>
        <fieldset>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input onChange={handleName} className="input" value={name} type="text"
          /><br></br>
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input" value={email} type="email"
          /><br></br>
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input" value={password}
            type="password" /><br></br>
          <label className="label">Conform Password</label>
          <input onChange={handleCpassword} className="input" value={Cpassword}
            type="password" /><br></br>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
