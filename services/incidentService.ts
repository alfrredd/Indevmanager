import type { Incident } from "~/interfaces/incident";

const now = new Date(); 
let exampleIncidents: Incident[] = [
    { id: '56AG54', idDevice: '873G84', idUser: '927342', deviceModel: 'VivoBook 15', type: 'Accidente', status: 'Asignado', message: 'He tenido un accidente', createdAt: now, updatedAt: now },
    { id: '56BF66', idDevice: '873G84', idUser: '927342', deviceModel: 'VivoBook 15', type: 'Software', status: 'Solucionado', message: 'No puedo iniciar sesión', createdAt: now, updatedAt: now },
    { id: '58ZC19', idDevice: '8766G2', idUser: '927342', deviceModel: 'K120 A', type: 'Robo', status: 'Cancelado', message: 'Creo que me han robado el ratón', createdAt: now, updatedAt: now },
  ];
  
  let idCounter = exampleIncidents.length + 1;
  
  export const incidentService = {
    getIncidents: async (): Promise<Incident[]> => {
      return new Promise((resolve) => {
        resolve(exampleIncidents);
      });
    },
    addIncident: async (incident: Omit<Incident, 'id' | 'createdAt' | 'updatedAt'>): Promise<Incident> => {
      const newIncident: Incident = {
        ...incident,
        id: (idCounter++).toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      exampleIncidents.push(newIncident);
      return new Promise((resolve) => {
        resolve(newIncident);
      });
    },
  };
