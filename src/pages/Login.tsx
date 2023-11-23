import { SubmitHandler, useForm } from "react-hook-form";
import AppButton from "../components/Form/Button";
import Input from "../components/Form/Input";

type Form = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = (data) => {
    try {
      console.log(data);
    } catch (error: any) {}
  };

  return (
    <main className="form-signin w-100 m-auto">
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center mb-3">📝 Shop Smart</h1>
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
          <AppButton
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

export default Login;
