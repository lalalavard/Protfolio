import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center">
          <Link href="/">
            <a
              aria-label="Home"
              className="flex text-4xl space-x-4 whitespace-nowrap"
              href="javascript:void(0)"
              aria-current="page"
            >
              <svg
                className="w-9 fill-current text-accent align-middle h-10"
                viewBox="0 0 300 300"
              >
                <path d="M136 20v41a475 475 0 01-34 22v173l-15-10-15-11V106l-35 30 1-47z"></path>
                <g>
                  <path d="M244 76l20 13-1 83 1 38-31 22 1-39v-46l-20 27-19-52v136l-30 22V20l29 20 28 71z"></path>
                </g>
              </svg>
              <span className="text-accent hidden xl:inline">lavard</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="ml-2 mr-2 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/projects">
              <a className="ml-2 mr-2 hover:text-gray-900">Projects</a>
            </Link>
            <a
              href="https://www.lavard.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mr-2 hover:text-gray-900"
            >
              Blogs
            </a>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
};

export default Header;
