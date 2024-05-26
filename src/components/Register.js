import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle OTP sending logic here
      navigate('/verify', { state: { phoneNumber } });
    };
  
    return (
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full z-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-400 text-black p-2 rounded"
          >
            Request OTP
          </button>
          <p className="mt-4 text-sm text-center">
            Already a member? <a href="/Login" className="text-blue-500">Login</a>
          </p>
        </form>
      </div>
    );
  };
  
  export default Register;