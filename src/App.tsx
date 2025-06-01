import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { items } from "./components/app-sidebar";
import About from "./pages/about";
import Home from "./pages/home";
import Shop from "./pages/shop";
import FAQ from "./pages/FAQ";
import AskQuestion from "./pages/askquestion";

const App: React.FC = () => {
  return (
    <SidebarProvider className="flex flex-col min-h-screen">
      <div className="min-h-screen flex flex-col">
        <Header items={items} />
        <AppSidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/askquestion" element={<AskQuestion />} />
          </Routes>
        </main>
        <Footer items={items} />
      </div>
    </SidebarProvider>
  );
};

export default App;
