const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `card-${mushroomId}`;
});

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target;
  currentFilters[filterType] = e.target.value;

if (!document.startViewTransition) {
  filterCards();
  return;
}
document.startViewTransition(() => filterCards());}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeasons = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    if (
      (matchesEdible || currentFilters.edible == "all") &&
      (matchesSeasons || currentFilters.season == "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultMessage.hidden = true;
    } else {
      noResultMessage.hidden = false;
    }
  });
}

function enableFiltering() {
  seasonalFilter.removeAttribute("hidden");
  edibleFilter.removeAttribute("hidden");
}

enableFiltering();
