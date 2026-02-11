const eventContainer = document.getElementById("events");

const loadEvents = async () => {
  try {
    const response = await fetch("events.json");
    const events = await response.json();
    renderEvents(events);
  } catch (error) {
    console.error("Error fetching events", error);
  }
};

const renderEvents = (events) => {
  eventContainer.innerHTML = "";
  events.forEach(({ name, category, date }) => {
    eventContainer.innerHTML += `
      <div class="card">
        <h3>${name}</h3>
        <p>${category}</p>
        <p>${date}</p>
      </div>
    `;
  });
};

loadEvents();
