import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

/**
 * Login form where users enter credentials to get access to the website contents
 *
 */
function LoginForm() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  /**
   * Function navigates to home page is sign-in is successful
   */
  function clickHandler() {
    if (isAuth) {
      navigate("/");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  /**
   * If there are no errors in filling form, login() is dispatched to the reducer
   */
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submit) {
      dispatch(authActions.login());
    }
    //eslint-disable-next-line
  }, [formErrors]);

  /**
   * form validation
   */
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (values.password !== "22222" || values.username !== "sandy") {
      errors.password = "Incorrect Password or username";
    }

    return errors;
  };

  return (
    <div className='login-container'>
      <p className='center-align'>Login to continue College Hunting</p>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className='error-msg'>{formErrors.username}</p>
          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className='error-msg'>{formErrors.password}</p>

          <button
            className='waves-effect waves-light btn cyan darken-4'
            type='Submit'
            onClick={clickHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
