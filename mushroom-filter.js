const card = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const currentFilters = {
  season: "all",
  edible: "all",
};

seasonalFilter.addEventListener('change', (event) => {
    currentFilters.season = event.target.value;
})

edibleFilter.addEventListener('change', (event) => {
    currentFilters.edible = event.target.value;
})