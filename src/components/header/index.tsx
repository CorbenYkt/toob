import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ItemType } from "@/components/app-sidebar";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  items: ItemType[];
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  const location = useLocation();

  return (
    <header className="text-gray-700 p-8 w-full shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 md:mr-6 lg:mr-12 xl:mr-20">
          <img
            src="img/logo.png"
            className="h-32 min-w-[230px] w-auto"
            alt="TOOB logo"
          />
        </Link>

        <nav className="flex items-center justify-start w-full">
          <ul className="flex space-x-6 ml-6">
            {items.map((item) => {
              const isActive = location.pathname === item.url;

              return (
                <li key={item.title}>
                  <Link
                    to={item.url}
                    className={`flex items-center gap-2 transition-colors duration-200 ${isActive
                      ? "text-[#F25826] font-bold"
                      : "hover:text-[#F25826]"
                      }`}
                  >
                    <item.icon />
                    <span className="hidden md:inline">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <div className="lg:hidden">
                    <SidebarTrigger />
                </div> */}
      </div>
    </header>
  );
};

export default Header;
