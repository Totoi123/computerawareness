import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="is-size-2 title has-text-link navbar-item">SL 2021</a>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link href="/compsc">
              <a className="is-size-4 has-text-grey navbar-item">
                Why Computer Science ?
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
