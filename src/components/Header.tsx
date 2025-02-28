
import React from 'react';
import { Bell, MessageCircle, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full border border-slate-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-600">
          <Bell size={16} />
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-600">
          <MessageCircle size={16} />
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <div className="h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Pepito+Perez&background=16a34a&color=fff" alt="User" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="text-xs">
            <div className="font-medium">Pepito Perez</div>
            <div className="text-slate-500">@DavidaIO</div>
          </div>
          <ChevronDown size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
