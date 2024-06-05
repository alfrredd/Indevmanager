import { defineStore } from "#imports";
import type { Device } from "~/interfaces/device";
import { getDevices } from "~/services/deviceService";


export const useDeviceStore = defineStore('device', {
    state: () => ({
        devices: [] as Device[],
    }),
    actions: {
        async loadDevices() {
            this.devices = await getDevices()
        },
    },
});