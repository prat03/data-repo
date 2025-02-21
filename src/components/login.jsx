import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const[loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const[error,setErrors] = useState('');

    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
      };

      const handleForgotPassword = () => {
        // Implement forgot password logic here
        console.log('Forgot password clicked');
      };


    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!loginData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        } else if (!isValidEmail(loginData.email)) {
          newErrors.email = "Invalid email format";
          isValid = false;
        }

        if (!loginData.password) {
          newErrors.password = "Password is required";
          isValid = false;
        } else if (!isValidPassword(loginData.password)) {
          newErrors.password =
            "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
            isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
        // return Object.keys(newErrors).length === 0;
      };
    
    console.log(errors); 

     //handle form submission
     const handleSubmit = async (e) => {
        e.preventDefault();

        //  const isValid = validateForm();
        // try{
        //   const response = await axios.post('https://example.com/api/login', loginData);
        //   console.log('User logged in Successfully!:', response.data);
        // }
        // catch (isValid){
        //   setErrors('Error logged in user')
        //   console.isValid('User logged in failed!');
        // }

        if(validateForm()) {
          try {
              // const response = await axios.post('/api/login', loginData); // Replace with your server endpoint
              // console.log('Login successful:', response.data);
              console.log('loginData:', loginData);
              // Handle success (e.g., redirect to a dashboard)
              setLoginData({
                  email:'',
                  password: ''
              })
              alert("Login successfully");
            } catch (error) {
              console.error('Login failed:', error);
              // Handle errors (e.g., show an error message)
              alert("Login failed");
            }
      } else {
          console.log("form has errors");
      }
    
  
    };

    

    //handle input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };

  return <form className="login" onSubmit={handleSubmit}>
    <h3>Login</h3>
    {error && <div className="error-message">
          {Object.values(error).map((err) => (
              <p key={err}>{err}</p>
          ))}
        </div>}
    <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
         {/* {errors.email && <div className="error">{errors.email}</div>} */}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {/* {errors.password && <div className="error">{errors.password}</div>} */}
      </div>

      <button type="submit">Login</button>

      <div>
      <a href="#" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </div>
  </form>
};

export default LoginForm;