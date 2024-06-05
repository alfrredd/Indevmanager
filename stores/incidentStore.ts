import { defineStore } from "#imports";
import type { Incident } from "~/interfaces/incident";
import { incidentService } from '~/services/incidentService';

export const useIncidentStore = defineStore('incident', {
  state: () => ({
    incidents: [] as Incident[],
  }),
  actions: {
    async loadIncidents() {
      const fetchedIncidents = await incidentService.getIncidents();
      this.incidents = [...new Map(fetchedIncidents.map(item => [item.id, item])).values()];
    },
    async addIncident(incident: Omit<Incident, 'id' | 'createdAt' | 'updatedAt'>) {
      const newIncident = await incidentService.addIncident(incident);
      this.incidents.push(newIncident);
    },
  },
});