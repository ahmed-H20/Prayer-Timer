const Nav = () => {
  return (
    <div dir="ltr" className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <img src="https://img.icons8.com/arcade/64/mosque.png" alt="" />
        <a className="btn btn-ghost text-xl">Prayer Timer</a>
      </div>

      <div className="navbar-end">
        <a href="#contacts" className="btn bg-[#001d43] text-white ">
          Contact US
        </a>
      </div>
    </div>
  );
};

export default Nav;
