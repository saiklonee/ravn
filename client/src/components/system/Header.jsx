import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-3 flex justify-between items-center px-10">
      <div>Home</div>
      <div className="h-full">
        <img className="w-15" src="/logos/logo.png" alt="" />
      </div>
      <div>Login</div>
    </header>
  );
};

export default Header;
