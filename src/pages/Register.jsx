import React from "react";
import { Link } from "react-router";

const Register = () => {
  return <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
             {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />

          {/* Photo Url */}
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Photo Url" />

            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral
          mt-4">Register</button>
          <p className='font-semibold text-center pt-5'>All Ready Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
        </fieldset>
      </div>
    </div>
        </div>
};

export default Register;
