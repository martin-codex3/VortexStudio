import {defineStore} from "pinia";

export const useGetToolBox = defineStore("toolBox", () => {
    const toggleToolBox: boolean = ref(false)

    return { toggleToolBox }
})