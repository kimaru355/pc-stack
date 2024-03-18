import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const showErrorRef = useRef(null);
  const navigate = useNavigate();

  const registerUser = async (event) => {
    showErrorRef.current.className = "hidden";
    showErrorRef.current.textContent = "";
    if (password.length < 4 || confirmPassword.length < 4 || email === "") {
      return;
    }
    event.preventDefault();
    if (password !== confirmPassword) {
      showErrorRef.current.className = "text-sm text-center text-red-400";
      showErrorRef.current.textContent = "Passwords do not match";
      return;
    } else {
      let url = "http://localhost:3000/auth/register";
      try {
        await axios.post(url, {
          email: email,
          password: password,
        });
        navigate("/");
      } catch (error) {
        showErrorRef.current.className = "text-sm text-center text-red-400";
        showErrorRef.current.textContent = error.response.data.message;
      }
    }
  };

  return (
    <div className="h-screen w-full px-10 py-4 md:px-20 md:py-12 flex justify-center items-start">
      <div className="max-w-[40rem]">
        <h2 className="text-center text-4xl font-bold text-neutral-200 pb-4">
          Register
        </h2>
        <form
          action="/auth/register"
          method="post"
          className="text-lg flex flex-col ring ring-sky-400 rounded-xl p-4 md:p-8"
        >
          <label className="text-start" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="py-1 px-2 rounded-xl min-w-72 md:w-96"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className="text-start" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="py-1 px-2 rounded-xl min-w-72 md:w-96"
            minLength={4}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <label className="text-start" htmlFor="confirm_password">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
            className="py-1 px-2 rounded-xl min-w-72 md:w-96"
            minLength={4}
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p ref={showErrorRef} className="hidden"></p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 underline">
              Login
            </Link>
          </p>
          <button
            type="submit"
            onClick={(event) => registerUser(event)}
            className="bg-teal-400 rounded-lg text-black py-2 px-8 mx-2 my-4 focus:font-bold hover:scale-95 hover:duration-150"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
