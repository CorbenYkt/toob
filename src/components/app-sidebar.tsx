import { HelpCircle, User, House, LucideShoppingBasket, MessageCircle  } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export interface ItemType {
    title: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const items: ItemType[] = [
    {
        title: "Home",
        url: "/home",
        icon: House,
    },
    {
        title: "About Us",
        url: "/about",
        icon: User,
    },
    {
        title: "Shop",
        url: "/shop",
        icon: LucideShoppingBasket,
    },
    {
        title: "FAQ",
        url: "/FAQ",
        icon: HelpCircle,
    },
    {
        title: "Contact",
        url: "/askquestion",
        icon: MessageCircle ,
    },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar className="lg:hidden md:hidden">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation:</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = location.pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                                to={item.url}
                                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-[#F25826] font-bold" : "hover:text-[#F25826]"
                                                    }`}
                                            >
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
