<template>
    <div role="tablist" class="tabs tabs-boxed">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Mis Incidencias" checked/>
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Id Incidencia</th>
                        <th>Id Dispositivo</th>
                        <th>Modelo</th>
                        <th>Tipo</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="incident in incidents" :key="incident.id" class="hover">
                        <th>{{incident.id}}</th>
                        <td>{{ incident.idDevice }}</td>
                        <td>{{ incident.deviceModel }}</td>
                        <td>{{ incident.type }}</td>
                        <td>{{ incident.status }}</td>
                        <td><button @click="showDetails(incident)" class=" btn btn-neutral btn-sm"> Detalles </button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--Details Modal-->
        <dialog ref="detailsDialog" class="modal modal-top sm:modal-middle">
        <div class="modal-box">
            <h3 class="font-bold text-lg mb-3">Detalles</h3>
            <div class="flex flex-row">
                <p class="py-4 mr-4">Id Incidencia: {{ selectedIncident?.id }}</p>
                <p class="py-4 mr-4">Modelo: {{ selectedIncident?.deviceModel }}</p>
                <p class="py-4 mr-4">Id Dispositivo: {{ selectedIncident?.idDevice }}</p>
            </div>
            <div class="flex flex-col">
                <p class="py-4 mr-4">Tipo Incidencia: {{ selectedIncident?.type }}</p>
                <p class="py-4 mr-4">Id Usuario: {{ selectedIncident?.idUser }}</p>

                <p class="py-4 mr-4">Message: {{ selectedIncident?.message }}</p>
                <p class="py-4 mr-4">Estado: {{ selectedIncident?.status }}</p>
                <p class="py-4 mr-4">Creado: {{ selectedIncident?.createdAt }}</p>
                <p class="py-4 mr-4">Última Actualización: {{ selectedIncident?.updatedAt }}</p>
            </div>
            <div class="modal-action">
                <button @click="closeDialog" class="btn">Cerrar</button>
            </div>
        </div>
        </dialog>
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Gestionar Incidencias" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Contenido Gestionar Incidencias</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIncidentStore } from '~/stores/incidentStore';
import { type Incident } from '~/interfaces/incident';

const incidentStore = useIncidentStore()

onMounted(() => {
    incidentStore.loadIncidents()
})

const incidents = computed (() => incidentStore.incidents)

const selectedIncident = ref<Incident | null>(null);
const detailsDialog = ref<HTMLDialogElement | null>(null);

const showDetails = (incident: Incident) => {
  selectedIncident.value = incident;
  if (detailsDialog.value) {
    detailsDialog.value.showModal();
  }
};

const closeDialog = () => {
  if (detailsDialog.value) {
    detailsDialog.value.close();
  }
};

</script>