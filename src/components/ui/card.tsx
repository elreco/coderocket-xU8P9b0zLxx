import * as React from "react";
export function Card() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* macOS Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      {/* Card Content */}
      <div className="p-8 bg-white min-h-[500px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Workflow Card</h3>
          <p className="text-gray-600 max-w-md">
            This is a simple card component inspired by the workflow interface
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30">
              Get Started
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">−</button>
          <span>100%</span>
          <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">+</button>
        </div>
      </div>
    </div>
  );
}