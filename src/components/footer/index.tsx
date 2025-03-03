import React from "react";
import { Facebook, Mail, Phone } from "lucide-react";
import { ItemType } from "@/components/app-sidebar";
import { Link } from "react-router-dom";

interface FooterProps {
    items: ItemType[];
}

const Footer: React.FC<FooterProps> = ({ items }) => {
    return (
        <footer className="bg-[#4A342E] text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-lg font-semibold">TOOB</h3>
                    <p className="mt-2 text-gray-400">
                        Handmade TOOB blankets for child bike seats.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Contacts</h3>


                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="tel:021 264 7576" className="flex items-center gap-2 text-gray-400 hover:text-white">
                                <Phone className="w-5 h-5" />021 264 7576
                            </a>
                        </li>
                        <li>
                            <a href="mailto:example@email.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
                                <Mail className="w-5 h-5" />dasha@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Toob4bikeseat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
                                <Facebook className="w-5 h-5" />Facebook
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Links</h3>
                    <ul className="mt-2 space-y-2">
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
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
                ©2025 <a href="https://corbenykt.github.io/" target="_blank" className="hover:text-white">Developer's page</a>
            </div>
        </footer>
    );
};

export default Footer;
