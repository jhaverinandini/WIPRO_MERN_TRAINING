const eventList = document.getElementById("eventList");
const filter = document.getElementById("filter");

async function loadEvents() {
  const res = await fetch("events.json");
  const data = await res.json();

  showEvents(data);

  filter.addEventListener("change", () => {
    const val = filter.value;

    const result = val === "all"
      ? data
      : data.filter(e => e.category === val);

    showEvents(result);
  });
}

function showEvents(events) {
  eventList.innerHTML = "";

  events.forEach(e => {
    eventList.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3 mb-2">
          <h5>${e.name}</h5>
          <p>${e.category}</p>
          <small>${e.date}</small>
        </div>
      </div>
    `;
  });
}

loadEvents();