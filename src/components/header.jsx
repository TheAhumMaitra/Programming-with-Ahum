import Register from "./Register";
import "./all_main.css";
import CodeIcon from '@mui/icons-material/Code';
export default function Header() {
  return (
    <>
      <header>
        <nav className="w-full h-[9vh] flex justify-around items-center bg-[#1d1333] text-[var(--color-text)] sticky top-1.5">
          <div id="main_logo_and_text" className="flex gap-1.5">
            <CodeIcon className="text-purple-700" />
            <h1 className="font-[Orbitron] font-extrabold text-[var(--color-text)]">
              Programming with Ahum
            </h1>
          </div>
          <ul className="flex gap-8">
            <li className="font-[Poppins]">
              <a
                className="hover:font-medium hover:text-base hover:bg-[var(--color-secondary)] transition delay-150 duration-300 ease-in-out hover:p-2 hover:underline"
                href="./Blogs.tsx"
              >
                Blogs
              </a>
            </li>
            <li className="font-[Poppins]">
              <a
                className="hover:font-medium hover:text-base hover:bg-purple-700 transition delay-150 duration-300 ease-in-out hover:p-2 hover:underline"
                href=""
              >
                Tab 2
              </a>
            </li>
            <li className="font-[Poppins]">
              <a
                className="hover:font-medium hover:text-base hover:bg-purple-700 transition delay-150 duration-300 ease-in-out hover:p-2 hover:underline"
                href=""
              >
                Tab 3
              </a>
            </li>
            <li className="font-[Poppins]">
              <a
                className="hover:font-medium hover:text-base hover:bg-purple-700 transition delay-150 duration-300 ease-in-out hover:p-2 hover:underline"
                href=""
              >
                Tab 4
              </a>
            </li>
          </ul>
          <Register />
        </nav>

      </header>
    </>
  );
}
