import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ItemType } from "@/components/app-sidebar";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown } from "lucide-react";

interface HeaderProps {
  items: ItemType[];
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  const location = useLocation();

  return (
    <header className="text-gray-800 p-6 w-full shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="img/logo.png"
            alt="TOOB logo"
            className="w-32 sm:w-40 lg:w-48 max-w-full h-auto"
          />
        </Link>

        <nav className="flex items-center justify-start w-full pl-4">
          <ul className="flex space-x-4 md:space-x-10 md:ml-10">
            {items.map((item) => {
              const isActive = location.pathname === item.url;

              return (
                <li key={item.title}>
                  <Link
                    to={item.url}
                    className={`flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-[#F25826] font-bold" : "hover:text-[#F25826]"
                      }`}
                  >
                    <item.icon className="md:hidden" />
                    <span className="hidden md:inline">{item.title}</span>

                    {item.title === "Shop" && (
                      <ArrowDown className="w-4 h-4 opacity-70 hidden md:inline" />
                    )}
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
