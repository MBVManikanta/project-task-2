// // src/components/RegistrationForm.js
// import React, { useState } from 'react';
// import { useTheme } from './ThemeContext'; // Import useTheme to access the theme
// import './RegistrationForm.css'; // Import CSS for styling

// const RegistrationForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);
//   const { theme } = useTheme(); // Get the current theme

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     setSuccess(false);

//     if (!email) {
//       newErrors.email = 'Email is required.';
//     } else if (!validateEmail(email)) {
//       newErrors.email = 'Invalid email format.';
//     }

//     if (!password) {
//       newErrors.password = 'Password is required.';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setSuccess(true);
//       console.log('Form submitted:', { email, password });
//     }
//   };

//   return (
//     <div className={`form-container ${theme}`}>
//       <form onSubmit={handleSubmit} className={`registration-form ${theme}`}>
//         <h2 className="text-center mb-4">Register</h2>
//         {success && (
//           <div className="alert alert-success text-center" role="alert">
//             Successfully Registered!
//           </div>
//         )}
//         <div className="mb-3 row">
//           <label className="col-4 text-end">Email:</label>
//           <div className="col-8">
//             <input
//               type="email"
//               className={`form-control ${theme}`} // Apply theme class to input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <small className="text-danger">{errors.email}</small>}
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label className="col-4 text-end">Password:</label>
//           <div className="col-8">
//             <input
//               type="password"
//               className={`form-control ${theme}`} // Apply theme class to input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <small className="text-danger">{errors.password}</small>}
//           </div>
//         </div>
//         <div className="text-center">
//           <button type="submit" className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-dark'} mt-3`}>
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    errors: {}
  });
  const [submitted, setSubmitted] = useState(false); 

  const validate = () => {
    const errors = {};
    if (!form.email.includes('@')) errors.email = 'Invalid email format';
    if (form.password.length < 6) errors.password = 'Password too short';
    setForm({ ...form, errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted');
      setSubmitted(true);
    } else {
      console.log('Form has errors');
      setSubmitted(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {submitted ? (
        <div className="text-center">
          <h2>Registration Successful!</h2>
          <p>Thank you for registering.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="mb-4">Register</h2>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-control"
            />
            {form.errors.email && <p className="text-danger">{form.errors.email}</p>}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="form-control"
            />
            {form.errors.password && <p className="text-danger">{form.errors.password}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;




