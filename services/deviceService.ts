import type { Device } from "~/interfaces/device";

const exampleDevices: Device[] = [
    { id: '873G84', model: 'VivoBook 15', brand: 'ASUS', type: 'Portátil' },
    { id: '8766G2', model: 'K120 A', brand: 'Logitech', type: 'Teclado' },
    { id: '8767G5', model: 'D24-45', brand: 'Lenovo', type: 'Ratón' },
  ];

export const getDevices = async(): Promise<Device[]> =>{
return new Promise((resolve) =>{
    resolve(exampleDevices);
    });
};

  