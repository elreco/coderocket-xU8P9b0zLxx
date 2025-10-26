import * as React from "react";
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <span className="text-white text-xl font-semibold">Workflow AI</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Pricing
          </a>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium shadow-lg shadow-purple-600/30">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}