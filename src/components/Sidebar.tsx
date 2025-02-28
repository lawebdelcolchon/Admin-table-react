
import React from 'react';
import { ChevronDown } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', hasSubmenu: false, active: false },
  { id: 'pedidos-clientes', label: 'Pedidos Clientes', hasSubmenu: true, active: false },
  { id: 'pedidos-proveedores', label: 'Pedidos Proveedores', hasSubmenu: true, active: true },
  { id: 'marketplaces', label: 'Marketplaces', hasSubmenu: true, active: false },
  { id: 'marketing', label: 'Marketing', hasSubmenu: true, active: false },
  { id: 'inventario', label: 'Inventario', hasSubmenu: true, active: false },
  { id: 'productos', label: 'Productos', hasSubmenu: false, active: false },
  { id: 'clientes', label: 'Clientes', hasSubmenu: false, active: false },
  { id: 'proveedores', label: 'Proveedores', hasSubmenu: false, active: false },
  { id: 'afiliados', label: 'Afiliados', hasSubmenu: false, active: false },
  { id: 'trasportistas', label: 'Trasportistas', hasSubmenu: false, active: false },
  { id: 'contactos', label: 'Contactos', hasSubmenu: false, active: false },
  { id: 'etiquetas', label: 'Etiquetas', hasSubmenu: false, active: false },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-full max-w-[195px] bg-white border-r border-slate-200 h-screen overflow-y-auto">
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <img src="/lovable-uploads/4386f97e-41b1-4633-b6dc-f7144168d6e7.png" alt="cPanel" className="h-8 object-contain" />
      </div>
      <div className="py-2">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className={`${item.hasSubmenu ? 'sidebar-item-with-arrow' : 'sidebar-item'} ${item.id === 'pedidos-proveedores' ? 'bg-yellow-400 hover:bg-yellow-500' : ''}`}
          >
            {item.label}
            {item.hasSubmenu && <ChevronDown size={16} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
