import React, { Component } from "react";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";

interface Props {}

interface State {}

class Login extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <main className="form-signin w-100 m-auto">
        <div className="login">
          <form
          // onSubmit={this.handleSubmit}
          >
            <h1 className="text-center mb-3">Shop Smart</h1>
            <Input
              name="email"
              label="Email address"
              placeHolder="john@trackr.co.in"
              helperText="We're entering a magical place, keep it secret !"
              // onChange={this.handleChange}
              // value={data.email}
              // error={errors.email}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              // onChange={this.handleChange}
              // value={data.password}
              // error={errors.password}
            />

            <div className="mb-3 form-check float-end">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <Button
              label="Login"
              type="submit"
              isProcessing={false}
              className="w-100"
            />

            {/* {error && <span className="error text-center mt-2">{error}</span>} */}
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
