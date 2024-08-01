import { computed } from "vue";

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based.
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  export const isVirtuesOfTheVileReleased = computed(() => {
    const releaseDate = new Date("2024-09-25");
    const currentDate = new Date(getCurrentDate());
    return currentDate >= releaseDate;
  });