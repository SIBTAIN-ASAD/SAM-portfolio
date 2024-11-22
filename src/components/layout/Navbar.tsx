import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';
import { logo, menu, close } from '../../assets';
import { config } from '../../constants/curriculumVtae/config';

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full items-center px-8 md:px-20 justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-5 w-5" />
          <p className="flex cursor-pointer text-[20px] font-extrabold text-[#acb8f7]">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* Download Resume Button */}
          <li>
            <a
              href={config.resume}
              download
              target="_blank"
              className="rounded-md border border-secondary px-2 py-1.5  text-[18px] font-medium text-secondary hover:bg-secondary hover:text-primary transition"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
        <div className="relative">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={` cursor-pointer transition-transform duration-300 ease-in-out ${
              toggle ? "h-[20px] w-[20px] rotate-90" : "h-[24px] w-[24px] rotate-0"
            } hover:scale-110`}
            onClick={() => setToggle(!toggle)}
          />
        </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } bg-black absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Mobile View Download Resume Button */}
              <li>
                <a
                  href={config.resume}
                  download
                  target="_blank"
                  className="mt-4 w-full rounded-md border border-secondary px-2 py-1.5 text-center text-[16px] font-medium text-secondary hover:bg-secondary hover:text-primary transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
