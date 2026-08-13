import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-5 flex justify-between items-center">
      <div>Home</div>
      <div className="h-full">
        <img className="w-15" src="/logos/logo.png" alt="" />
      </div>
      <div>Login</div>
    </header>
  );
};

export default Header;
