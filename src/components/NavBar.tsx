'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Timeline', href: '/timeline' },
    { name: 'Projects', href: '/project' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <aside className="w-1/4 lg:w-1/5 xl:w-1/6 p-8 flex flex-col justify-between border-r border-gray-200 dark:border-gray-800 h-full">
      <div>
        <Link href="/" className="text-xl font-bold">
          <h1>Malia</h1>
          <h1>Wakesho-Ajwang</h1>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Computer Science Student & Aspiring Software Engineer.
        </p>
        
        {pathname === '/' ? (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Currently building the future, one line of code at a time.
          </p>
        ) : (
          <nav className="mt-12">
            <ul>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`nav-link font-bold text-lg block mt-4 transition-colors ${
                        isActive
                          ? 'text-blue-600'
                          : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      <div className="text-xs text-gray-500">© {new Date().getFullYear()}</div>
    </aside>
  );
};

export default NavBar;