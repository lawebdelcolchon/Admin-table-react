
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface AddMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (material: any) => void;
}

const AddMaterialModal: React.FC<AddMaterialModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    producto: '',
    descripcion: '',
    referencia: '',
    grosorCm: '',
    distribuidor: '',
    fabricante: '',
    costeKg: '',
    costeM2: '',
    alto: '',
    ancho: '',
    fondo: '',
    precioM2: '',
    costeM2Total: '',
    m2: '',
    cantidad: 1,
    bulto: '',
    pCosteTot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'cantidad' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      producto: '',
      descripcion: '',
      referencia: '',
      grosorCm: '',
      distribuidor: '',
      fabricante: '',
      costeKg: '',
      costeM2: '',
      alto: '',
      ancho: '',
      fondo: '',
      precioM2: '',
      costeM2Total: '',
      m2: '',
      cantidad: 1,
      bulto: '',
      pCosteTot: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-md shadow-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-slate-200">
            <DialogTitle className="text-lg font-medium">Agregar Nuevo Material</DialogTitle>
            <button 
              onClick={onClose}
              className="h-6 w-6 rounded-full inline-flex items-center justify-center text-slate-500 hover:bg-slate-100"
            >
              <X size={16} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Producto</label>
                <input
                  type="text"
                  name="producto"
                  value={formData.producto}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Descripción</label>
                <input
                  type="text"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Ref. Fabricante</label>
                <input
                  type="text"
                  name="referencia"
                  value={formData.referencia}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Grosor (cm)</label>
                <input
                  type="text"
                  name="grosorCm"
                  value={formData.grosorCm}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Distribuidor</label>
                <input
                  type="text"
                  name="distribuidor"
                  value={formData.distribuidor}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Fabricante</label>
                <input
                  type="text"
                  name="fabricante"
                  value={formData.fabricante}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Coste Kg</label>
                <input
                  type="text"
                  name="costeKg"
                  value={formData.costeKg}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Coste m2 s/iva</label>
                <input
                  type="text"
                  name="costeM2"
                  value={formData.costeM2}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Alto</label>
                <input
                  type="text"
                  name="alto"
                  value={formData.alto}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Ancho</label>
                <input
                  type="text"
                  name="ancho"
                  value={formData.ancho}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Fondo</label>
                <input
                  type="text"
                  name="fondo"
                  value={formData.fondo}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Precio m2 / Ud</label>
                <input
                  type="text"
                  name="precioM2"
                  value={formData.precioM2}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Coste m2</label>
                <input
                  type="text"
                  name="costeM2Total"
                  value={formData.costeM2Total}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">M2</label>
                <input
                  type="text"
                  name="m2"
                  value={formData.m2}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Cantidad</label>
                <input
                  type="number"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                  min="1"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Bulto</label>
                <input
                  type="text"
                  name="bulto"
                  value={formData.bulto}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">PCosto Ud</label>
                <input
                  type="text"
                  name="pCosteTot"
                  value={formData.pCosteTot}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2 text-sm"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-sm hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-slate-800 text-white font-medium rounded-sm hover:bg-slate-700 transition-colors"
              >
                Guardar Material
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddMaterialModal;
