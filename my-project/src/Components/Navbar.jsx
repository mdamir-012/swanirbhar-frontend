import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="w-full fixed z-10 bg-black opacity-90">
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20  items-center justify-between">
          <a href="/">
            <img
              className="w-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3h05_Z2ucQ9x3M0RusMb_uYE1fLRmeZ5BAA&s"
              alt="logo"
            />
          </a>
          <ul className="hidden md:flex text-white  gap-6">
            <li>
              <a className="text-lg font-normal" href="/">Home</a>
            </li>
            <li>
              <a className="text-lg font-normal" href="/">Courses</a>
            </li>
            <li>
              <a className="text-lg font-normal" href="/">Profile</a>
            </li>
            <li>
              <a className="text-lg font-normal" href="/">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
