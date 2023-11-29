import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/purchase-list");
  }, []);

  return <div>Login</div>;
}

export default Login;
