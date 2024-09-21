import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4">Welcome to the Password Reset Application</h1>
          <p className="mb-4">If you forgot your password, you can reset it here.</p>
          <Link to="/forget-password" className="btn btn-primary">
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
