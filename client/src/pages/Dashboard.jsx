import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-screen px-10 md:px-20 py-4 md:py-6">
      <div>
        <p>Welcome back, John</p>
        <h2 className="text-xl md:text-2xl text-center">Dashboard</h2>
      </div>
      <div>
        <form action="/cpus" method="post"></form>
      </div>
    </div>
  );
};

export default Dashboard;
