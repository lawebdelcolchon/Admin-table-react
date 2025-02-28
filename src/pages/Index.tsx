
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MaterialTable from '../components/MaterialTable';

const Index: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-slate-800 text-white px-6 py-3 rounded-sm font-medium">
                PROVEEDORES
              </div>
              <div className="text-slate-600 font-medium">
                // ESTRUCTURA DE COSTO DE FABRICACIÓN
              </div>
            </div>
            <div className="flex items-center mb-6">
              <SearchBar />
            </div>
            <MaterialTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
