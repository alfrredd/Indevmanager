<template>
    <div role="tablist" class="tabs tabs-boxed">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Mis Equipos"  checked  />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">Mis Equipos Asociados
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="device in devices" :key="device.id" class="hover">
                        <th>{{device.id}}</th>
                        <td>{{ device.model }}</td>
                        <td>{{ device.brand }}</td>
                        <td>{{ device.type }}</td>
                        <td><button @click="showDetails(device)" class=" btn btn-neutral btn-sm"> Detalles </button></td>
                        <td><button @click="showNewIncident(device)" class=" btn btn-warning btn-sm"> Reportar </button></td>
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
                <p class="py-4 mr-4">Id: {{ selectedDevice?.id }}</p>
                <p class="py-4 mr-4">Modelo: {{ selectedDevice?.model }}</p>
                <p class="py-4 mr-4">Marca: {{ selectedDevice?.brand }}</p>
                <p class="py-4 mr-4">Tipo: {{ selectedDevice?.type }}</p>
            </div>
            <div class="modal-action">
                <button @click="closeDialog" class="btn">Cerrar</button>
            </div>
        </div>
        </dialog>

         <!--Incident Modal-->
        <dialog ref="incidentDialog" class="modal modal-top sm:modal-middle">
        <div class="modal-box">
            <h3 class="font-bold text-lg mb-3">Reportar Incidente</h3>
            <div class="flex flex-row">
                <p class="py-4 mr-4">Id Dispositivo: {{ selectedDevice?.id }}</p>
                <p class="py-4 mr-4">Modelo: {{ selectedDevice?.model }}</p>
                <p class="py-4 mr-4">Marca: {{ selectedDevice?.brand }}</p>
                <p class="py-4 mr-4">Tipo: {{ selectedDevice?.type }}</p>
            </div>
            <div class=" flex flex-col">
                <form class=" flex flex-col" @submit.prevent="submitIncident">
                    <span class="label-text mr-2">Tipo Incidencia:</span>
                    <select v-model="newIncident.type" class="select select-bordered w-full max-w-xs mb-3">
                    <option>Deterioro</option>
                    <option>Software</option>
                    <option>Accidente</option>
                    <option>Extravío</option>
                    <option>Robo</option>
                    </select>
                    <textarea v-model="newIncident.message" class="textarea textarea-bordered textarea-sm w-full max-w-xs mb-3" placeholder="Explica la incidencia:"></textarea>
                    <button type="submit" class=" btn btn-warning self-baseline"> Enviar Incidente </button>
                </form>
            </div>
            <div class="modal-action">
                <button @click="closeNewIncident" class="btn">Cerrar</button>
            </div>
        </div>
        </dialog>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Gestionar Equipos"/>
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Contenido Gestionar Equipos</div>
    </div>
</template>

<style>
.tab:is(input[type="radio"]) {
    width: max-content;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDeviceStore } from '~/stores/deviceStore';
import { useIncidentStore } from '~/stores/incidentStore';
import { type Device } from '~/interfaces/device';
import { type Incident } from '~/interfaces/incident';

const deviceStore = useDeviceStore();
const incidentStore = useIncidentStore();

onMounted(() => {
    deviceStore.loadDevices();
    incidentStore.loadIncidents();
})

const devices = computed(() => deviceStore.devices)


const selectedDevice = ref<Device | null>(null);
const newIncident = ref<Omit<Incident, 'id' | 'createdAt' | 'updatedAt'>>({
  idDevice: '',
  deviceModel: '',
  idUser: '927342',
  type: '',
  message: '',
  idAssignedTo: '2',
  status: 'Asignado',
});

const detailsDialog = ref<HTMLDialogElement | null>(null);
const incidentDialog = ref<HTMLDialogElement | null>(null);


const showDetails = (device: Device) => {
  selectedDevice.value = device;
  if (detailsDialog.value) {
    detailsDialog.value.showModal();
  }
};

const showNewIncident = (device: Device) => {
  selectedDevice.value = device;
  newIncident.value.idDevice = device.id!;
  newIncident.value.deviceModel = device.model!;
  incidentDialog.value?.showModal();
};


const closeDialog = () => {
  if (detailsDialog.value) {
    detailsDialog.value.close();
  }
};

const closeNewIncident = () => {
  incidentDialog.value?.close();
};

const submitIncident = () => {
  incidentStore.addIncident(newIncident.value);
  closeNewIncident();
};

</script>