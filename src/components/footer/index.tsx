import React from "react";
import { Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import { ItemType } from "@/components/app-sidebar";
import { Link } from "react-router-dom";

interface FooterProps {
  items: ItemType[];
}

const Footer: React.FC<FooterProps> = ({ items }) => {
  return (
    <footer className="bg-[#F9EAD7] text-gray-700 p-8 w-full">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[#F25826]">Quick links</h3>
          <ul className="mt-2 space-y-2">
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
                    {/* <item.icon /> */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );

            })}
            {/* <li key="contact">
              <Link
                to="/askquestion"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-[#F25826]"
              >
                <span>Contact</span>
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="colse-span-2 md:col-span-2">
          <h3 className="text-lg font-semibold text-[#F25826]">Waterproof and windproof handmade TOOB blankets for children's bike seats</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://www.facebook.com/Toob4bikeseat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#F25826]"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </li>
          </ul>
          {/* <h3 className="text-lg font-semibold text-[#F25826]">Contacts</h3>

          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="tel:021 264 7576"
                className="flex items-center gap-2 text-gray-700 hover:text-[#F25826]"
              >
                <Phone className="w-5 h-5" />
                021 264 7576
              </a>
            </li>
            <li>
              <a
                href="mailto:toob4bikeseat@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-[#F25826]"
              >
                <Mail className="w-5 h-5" />
                toob4bikeseat@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Toob4bikeseat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#F25826]"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </li>
            <li>
              <Link
                to="/askquestion"
                className="btn btn-primary flex items-center space-x-2 hover:text-[#F25826]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask question</span>
              </Link>
            </li>

          </ul> */}
        </div>

        {/* <div>
          <h3 className="text-lg font-semibold text-[#F25826]">TOOB</h3>
          <p className="mt-2 text-gray-700">
            Handmade TOOB blankets for child bike seats.
          </p>
        </div> */}


      </div>

      <div className="mt-10 text-center text-sm">
        ©2025{" "}
        <a
          href="https://corbenykt.github.io/"
          target="_blank"
          className="hover:text-[#F25826]"
        >
          Developer's page
        </a>
      </div>
    </footer>
  );
};

export default Footer;
