// ==================================
// 1. WEDDING DETAILS
// ==================================

const WEDDING = {
  date: "2026-12-01",
  venueName: "The Wedding Venue",
  venueAddress: "Your venue address",
  mapsUrl: "https://maps.google.com",
  arrivalTime: "07:00 PM",
  whatsappNumber: "2010XXXXXXXX"
};


// ==================================
// 2. OPEN THE INVITATION (FROM BUTTON ONLY)
// ==================================

function openInvitation() {
    const opening = document.getElementById("opening");
    const site = document.getElementById("site");

    opening.classList.add("hidden");
    site.classList.add("visible");
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// التفعيل يتم حصرياً عند الضغط على زر OPEN INVITATION
document.getElementById("openButton").addEventListener("click", openInvitation);


// ==================================
// 3. SET WEDDING DETAILS
// ==================================

document.querySelectorAll(".venue-name")
.forEach(element => {
  element.textContent = WEDDING.venueName;
});

document.querySelectorAll(".venue-address")
.forEach(element => {
  element.textContent = WEDDING.venueAddress;
});

document.getElementById("mapLink").href = WEDDING.mapsUrl;
document.getElementById("mapLink2").href = WEDDING.mapsUrl;
document.getElementById("arrivalTime").textContent = "AT " + WEDDING.arrivalTime;


// ==================================
// 4. CREATE THE CALENDAR
// ==================================

function createCalendar() {
  const date = new Date(WEDDING.date + "T12:00:00");
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const offset = (firstDay + 6) % 7;

  const calendar = document.getElementById("calendarDays");
  calendar.innerHTML = "";

  for (let i = 0; i < offset; i++) {
    calendar.appendChild(document.createElement("span"));
  }

  for (let day = 1; day <= totalDays; day++) {
    const cell = document.createElement("span");
    cell.textContent = String(day).padStart(2, "0");

    if (day === date.getDate()) {
      cell.classList.add("selected");
    }
    calendar.appendChild(cell);
  }

  document.getElementById("monthName").textContent =
    date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
}

createCalendar();


// ==================================
// 5. BACKGROUND MUSIC
// ==================================

const audio = document.getElementById("weddingMusic");

document.getElementById("musicButton")
.addEventListener("click", async () => {
  const label = document.getElementById("musicText");

  if (audio.paused) {
    try {
      await audio.play();
      label.textContent = "Pause music";
    } catch {
      alert("Please add your MP3 file first.");
    }
  } else {
    audio.pause();
    label.textContent = "Play music";
  }
});


// ==================================
// 6. RSVP THROUGH WHATSAPP
// ==================================

document.getElementById("rsvpForm")
.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked')?.value;
  const guests = document.getElementById("guestCount").value;
  const message = document.getElementById("guestMessage").value.trim();

  if (!/^20\d{8,13}$/.test(WEDDING.whatsappNumber)) {
    document.getElementById("formNote").textContent = "Please add the correct WhatsApp number first.";
    return;
  }

  const text = `
Hello Hisham & Rahma!

Wedding RSVP

Name: ${name}
Attendance: ${attendance}
Number of guests: ${guests}
Message: ${message}
  `;

  const url = "https://wa.me/" + WEDDING.whatsappNumber + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
});