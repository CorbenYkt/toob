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
        <header className="bg-[#F9EAD7] text-gray-700 p-4 w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="img/logo.png" className="h-18" alt="TOOB" />
                </Link>

                <nav className="pr-4">
                    <ul className="hidden lg:flex lg:space-x-4">
                        {items.map((item) => {
                            const isActive = location.pathname === item.url;

                            return (
                                <li key={item.title}>
                                    <Link
                                        to={item.url}
                                        className={`flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-[#F25826] font-bold" : "hover:text-[#F25826]"
                                            }`}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="lg:hidden">
                    <SidebarTrigger />
                </div>
            </div>
        </header>
    );
};

export default Header;
