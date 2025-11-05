import {defineStore} from "pinia";

export const useGetToolBox = defineStore("toolBox", () => {
    const toggleToolBox = ref<boolean>(false)

    return { toggleToolBox }
})