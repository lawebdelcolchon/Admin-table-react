
import React, { useState } from 'react';
import AddMaterialModal from './AddMaterialModal';

interface MaterialRow {
  id: number;
  producto: string;
  descripcion: string;
  referencia: string;
  grosorCm: string;
  distribuidor: string;
  fabricante: string;
  costeKg: string;
  costeM2: string;
  alto: string;
  ancho: string;
  fondo: string;
  precioM2: string;
  costeM2Total: string;
  m2: string;
  cantidad: number;
  bulto: string;
  pCosteTot: string;
}

const initialMaterialData: MaterialRow[] = [
  {
    id: 1,
    producto: "Relleno de fibra de 135cm",
    descripcion: "Relleno de refuerzo",
    referencia: "EJ-05002-50",
    grosorCm: "3 cm",
    distribuidor: "20",
    fabricante: "20",
    costeKg: "20",
    costeM2: "70 EUR",
    alto: "20",
    ancho: "20",
    fondo: "20",
    precioM2: "70 EUR",
    costeM2Total: "20",
    m2: "20",
    cantidad: 5,
    bulto: "70 UER",
    pCosteTot: "20"
  },
  {
    id: 2,
    producto: "Tela polipiel",
    descripcion: "Material para tapizar",
    referencia: "RJ-0502-20",
    grosorCm: "8 cm",
    distribuidor: "15",
    fabricante: "15",
    costeKg: "15",
    costeM2: "200EUR",
    alto: "15",
    ancho: "15",
    fondo: "15",
    precioM2: "200EUR",
    costeM2Total: "15",
    m2: "15",
    cantidad: 10,
    bulto: "200EUR",
    pCosteTot: "15"
  },
  {
    id: 3,
    producto: "Tela Textil suave al tacto",
    descripcion: "Material para tapizar",
    referencia: "SL-50015-7",
    grosorCm: "3 cm",
    distribuidor: "50",
    fabricante: "50",
    costeKg: "50",
    costeM2: "120 EUR",
    alto: "50",
    ancho: "50",
    fondo: "50",
    precioM2: "120 EUR",
    costeM2Total: "50",
    m2: "50",
    cantidad: 8,
    bulto: "120 EUR",
    pCosteTot: "50"
  },
  {
    id: 4,
    producto: "Grapas",
    descripcion: "Material para tapizar",
    referencia: "LR-4346675-20",
    grosorCm: "2,5 cm",
    distribuidor: "30",
    fabricante: "30",
    costeKg: "30",
    costeM2: "132EUR",
    alto: "30",
    ancho: "30",
    fondo: "30",
    precioM2: "132EUR",
    costeM2Total: "30",
    m2: "30",
    cantidad: 4,
    bulto: "132EUR",
    pCosteTot: "30"
  },
  {
    id: 5,
    producto: "Hilo para cocer",
    descripcion: "Material para tapizar",
    referencia: "502100-SWL",
    grosorCm: "4 cm",
    distribuidor: "40",
    fabricante: "40",
    costeKg: "40",
    costeM2: "90EUR",
    alto: "40",
    ancho: "40",
    fondo: "40",
    precioM2: "90EUR",
    costeM2Total: "40",
    m2: "40",
    cantidad: 6,
    bulto: "90EUR",
    pCosteTot: "40"
  },
  {
    id: 6,
    producto: "Estructura Cab.",
    descripcion: "Armazón de cabecera",
    referencia: "RJ-0502-20",
    grosorCm: "8 cm",
    distribuidor: "15",
    fabricante: "15",
    costeKg: "15",
    costeM2: "200EUR",
    alto: "15",
    ancho: "15",
    fondo: "15",
    precioM2: "200EUR",
    costeM2Total: "15",
    m2: "15",
    cantidad: 10,
    bulto: "200EUR",
    pCosteTot: "15"
  },
  {
    id: 7,
    producto: "Estructura Cab.",
    descripcion: "Láminas posterior",
    referencia: "SL-50015-7",
    grosorCm: "3 cm",
    distribuidor: "50",
    fabricante: "50",
    costeKg: "50",
    costeM2: "120 EUR",
    alto: "50",
    ancho: "50",
    fondo: "50",
    precioM2: "120 EUR",
    costeM2Total: "50",
    m2: "50",
    cantidad: 8,
    bulto: "120 EUR",
    pCosteTot: "50"
  },
  {
    id: 8,
    producto: "Tela TNT",
    descripcion: "Material para tapizar",
    referencia: "LR-4346675-20",
    grosorCm: "2,5 cm",
    distribuidor: "30",
    fabricante: "30",
    costeKg: "30",
    costeM2: "132EUR",
    alto: "30",
    ancho: "30",
    fondo: "30",
    precioM2: "132EUR",
    costeM2Total: "30",
    m2: "30",
    cantidad: 4,
    bulto: "132EUR",
    pCosteTot: "30"
  },
  {
    id: 9,
    producto: "Botones",
    descripcion: "Material decorativo",
    referencia: "502100-SWL",
    grosorCm: "4 cm",
    distribuidor: "40",
    fabricante: "40",
    costeKg: "40",
    costeM2: "90EUR",
    alto: "40",
    ancho: "40",
    fondo: "40",
    precioM2: "90EUR",
    costeM2Total: "40",
    m2: "40",
    cantidad: 6,
    bulto: "90EUR",
    pCosteTot: "40"
  }
];

const MaterialTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materialData, setMaterialData] = useState<MaterialRow[]>(initialMaterialData);
  
  // Calcular el total sumando los valores numéricos de costeM2 de todos los materiales
  const calculateTotal = (): string => {
    // Extraer solo los números de las cadenas con formato "XX EUR"
    const total = materialData.reduce((sum, item) => {
      const value = parseFloat(item.costeM2.replace(/[^\d.-]/g, '')) || 0;
      return sum + value;
    }, 0);
    
    return `${total.toFixed(0)} EUR`;
  };
  
  const totalEUR = calculateTotal();
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSaveMaterial = (newMaterial: Omit<MaterialRow, 'id'>) => {
    // Generar un nuevo ID (el más alto actual + 1)
    const newId = Math.max(...materialData.map(item => item.id)) + 1;
    
    // Añadir el nuevo material con el ID generado
    setMaterialData([
      ...materialData,
      { ...newMaterial, id: newId }
    ]);
    
    console.log('Nuevo material agregado:', { ...newMaterial, id: newId });
  };
  
  return (
    <div className="bg-white rounded-sm border border-slate-200 overflow-hidden">
      <div className="flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-medium">Variable - 001</h2>
          <div className="text-right text-sm text-slate-500">Cabecero de Cama Julie 4x55x90</div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="table-header">Producto</th>
                <th className="table-header">Ref. Fabricante</th>
                <th className="table-header">Grosor cm</th>
                <th className="table-header">Distribuidor</th>
                <th className="table-header">Fabricante</th>
                <th className="table-header">Coste Kg</th>
                <th className="table-header">Coste m2 s/iva</th>
                <th className="table-header">Alto</th>
                <th className="table-header">Ancho</th>
                <th className="table-header">Fondo</th>
                <th className="table-header">Precio m2 / Ud</th>
                <th className="table-header">Coste m2</th>
                <th className="table-header">M2</th>
                <th className="table-header">Cantidad</th>
                <th className="table-header">bulto</th>
                <th className="table-header">PCosto Ud</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {materialData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50">
                  <td className="table-cell font-medium">
                    {row.producto}
                    <div className="text-xs text-slate-500">{row.descripcion}</div>
                  </td>
                  <td className="table-cell">{row.referencia}</td>
                  <td className="table-cell">{row.grosorCm}</td>
                  <td className="table-cell">{row.distribuidor}</td>
                  <td className="table-cell">{row.fabricante}</td>
                  <td className="table-cell">{row.costeKg}</td>
                  <td className="table-cell">{row.costeM2}</td>
                  <td className="table-cell">{row.alto}</td>
                  <td className="table-cell">{row.ancho}</td>
                  <td className="table-cell">{row.fondo}</td>
                  <td className="table-cell">{row.precioM2}</td>
                  <td className="table-cell">{row.costeM2Total}</td>
                  <td className="table-cell">{row.m2}</td>
                  <td className="table-cell">{row.cantidad}</td>
                  <td className="table-cell">{row.bulto}</td>
                  <td className="table-cell">{row.pCosteTot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between p-4">
          <button 
            className="px-4 py-2 bg-slate-800 text-white font-medium rounded-sm hover:bg-slate-700 transition-colors"
            onClick={handleOpenModal}
          >
            AGREGAR MATERIAL
          </button>
          <div className="flex items-center">
            <span className="font-medium mr-4">TOTAL</span>
            <span className="font-bold text-lg">{totalEUR}</span>
          </div>
        </div>
      </div>
      
      <AddMaterialModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveMaterial}
      />
    </div>
  );
};

export default MaterialTable;
