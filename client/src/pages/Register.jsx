import React from "react";

const Register = () => {
  return (
    <div className="h-screen w-full px-10 py-4 md:px-20 md:py-12 flex justify-center items-start">
      <div className="max-w-[40rem]">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        <form
          action="/auth/register"
          method="post"
          className="text-lg flex flex-col"
        >
          <label className="text-start" htmlFor="email">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="py-1 px-2 rounded-xl"
          />

          <label className="text-start" htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="py-1 px-2 rounded-xl"
          />

          <label className="text-start" htmlFor="confirm_password">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
            className="py-1 px-2 rounded-xl"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
