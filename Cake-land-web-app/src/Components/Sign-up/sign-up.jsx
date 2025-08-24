import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../Firebase/firebase.util";
import CustomButton from "../CustomButton/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't Match");
      return;
    }
    if(password.length < 6){
        alert('Password Must Be 6 Characters');
        return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      auth.signOut();

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      alert("Sign Up Sucessfull, Please Sign In To Continue.");
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = e => {
      const { name , value} = e.target;
      this.setState({[name]:value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
        
      </div>
    );
  }
}

export default SignUp;
