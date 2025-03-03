import React from "react";
import { BrowserRouter as  Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { items } from "@/components/app-sidebar";
import About from "./pages/about";
import Home from "./pages/home";
import Buy from "./pages/buy";

const App: React.FC = () => {

  return (
    <SidebarProvider className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Header items={items} />
        <AppSidebar />

        <main className="flex-1 p-4 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>

        </main>

        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default App;
