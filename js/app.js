(() => {
  "use strict";

  /* =========================================================
     REFRESH / SCROLL POSITION FIX
     ========================================================= */

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const resetScrollOnReload = () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload = navigation && navigation.type === "reload";

    if (!isReload) return;

    if (window.location.hash) {
      history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
    }

    const goTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    };

    goTop();

    requestAnimationFrame(() => {
      goTop();

      requestAnimationFrame(() => {
        goTop();
      });
    });

    setTimeout(goTop, 100);
    setTimeout(goTop, 500);
  };

  window.addEventListener("pageshow", resetScrollOnReload);
  window.addEventListener("load", resetScrollOnReload);

  /* =========================================================
     HELPERS
     ========================================================= */

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const esc = value =>
    String(value ?? "").replace(
      /[&<>"']/g,
      char =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[char]
    );

  const money = value =>
    Number(value).toLocaleString("en-IN");

  /* =========================================================
     TREATMENTS
     ========================================================= */

  const T = [
    [
      "implant-single",
      "Single & Full Mouth Dental Implants",
      "Implants & Surgery",
      "Permanent titanium tooth replacement.",
      "60 mins",
      16999,
      1499,
      "Most Popular",
      "Implantologist",
      [
        "Digital 3D Bone Scan",
        "Painless Fixture Placement",
        "Zirconia Crown Placement"
      ]
    ],
    [
      "clear-aligners",
      "Invisible Aligners & Clear Braces",
      "Cosmetic & Aligners",
      "Zero-metal correction with a 3D smile scan.",
      "6-12 Months",
      44999,
      3499,
      "Zero Metal",
      "Orthodontist",
      [
        "3D Virtual Smile Plan",
        "Custom Tray Delivery",
        "Progress Reviews"
      ]
    ],
    [
      "rct-laser",
      "Rotary Painless Root Canal (Single Sitting)",
      "Root Canal & Crowns",
      "Laser-assisted computerized rotary endodontics.",
      "45 mins",
      3499,
      null,
      "100% Painless",
      "Endodontist",
      [
        "Anaesthetic & Isolation",
        "Microscopic Canal Cleaning",
        "Crown Seal"
      ]
    ],
    [
      "laser-whitening",
      "Laser Teeth Whitening & Polishing",
      "Cosmetic & Aligners",
      "Up to 8 shades brighter in one session.",
      "45 mins",
      4999,
      null,
      "Instant Glow",
      "Cosmetic Dentist",
      [
        "Enamel Inspection",
        "Gum Barrier",
        "Laser Activation"
      ]
    ],
    [
      "veneers",
      "Porcelain Veneers & Smile Makeovers",
      "Cosmetic & Aligners",
      "Custom ceramic smile design and gap closure.",
      "2 sittings",
      12999,
      1199,
      "Smile Design",
      "Cosmetic Dentist",
      [
        "Digital Smile Design",
        "Trial Smile",
        "Ceramic Bonding"
      ]
    ],
    [
      "wisdom",
      "Wisdom Tooth Microsurgery",
      "Implants & Surgery",
      "Painless extraction with sedation.",
      "45-60 mins",
      5999,
      null,
      "Sedation",
      "Oral Surgeon",
      [
        "3D Imaging",
        "Sedation & Guided Access",
        "Recovery Review"
      ]
    ],
    [
      "kids",
      "Kids Pediatric Dentistry",
      "Pediatric (Kids)",
      "Fluoride therapy, cavity prevention and gentle care.",
      "30 mins",
      2499,
      null,
      "Gentle Care",
      "Pedodontist",
      [
        "Child-Friendly Exam",
        "Preventive Care",
        "Home Care Plan"
      ]
    ],
    [
      "gum-laser",
      "Periodontal Gum Laser Therapy",
      "Root Canal & Crowns",
      "Deep cleaning and laser support for bleeding gums.",
      "45 mins",
      3999,
      null,
      "Laser Care",
      "Periodontist",
      [
        "Gum Assessment",
        "Deep Cleaning",
        "Laser Therapy & Review"
      ]
    ]
  ];

  /* =========================================================
     DOCTORS
     ========================================================= */

  const D = [
    [
      "doc-1",
      "Dr. Arvind Swaminathan, MDS",
      "Chief Implantologist & Maxillofacial Surgeon",
      "14 yrs exp",
      "MDS - Oral & Maxillofacial Surgery (AIIMS)",
      "4.9",
      "380",
      ["Mon", "Tue", "Thu", "Fri", "Sat"],
      "2,800+ implant surgeries",
      "Available Today @ 5:00 PM"
    ],
    [
      "doc-2",
      "Dr. Sneha Reddy, MDS",
      "Aesthetic Dentist & Invisible Aligner Specialist",
      "10 yrs exp",
      "MDS - Orthodontics & Dentofacial Orthopedics",
      "4.95",
      "420",
      ["Tue", "Wed", "Fri", "Sat"],
      "1,400+ smile cases",
      "Available Today @ 4:30 PM"
    ],
    [
      "doc-3",
      "Dr. Vikram Varma, MDS",
      "Endodontist & Microscopic Root Canal Specialist",
      "9 yrs exp",
      "MDS - Conservative Dentistry & Endodontics",
      "4.9",
      "310",
      ["Mon", "Wed", "Fri"],
      "1,900+ RCT cases",
      "Available Today @ 6:00 PM"
    ],
    [
      "doc-4",
      "Dr. Kavitha Nair, BDS",
      "Child & Preventative Dental Specialist",
      "8 yrs exp",
      "BDS, Fellowship in Pedodontics",
      "4.9",
      "265",
      ["Mon", "Tue", "Thu", "Sat"],
      "3,200+ child visits",
      "Available Today @ 5:00 PM"
    ]
  ];

  /* =========================================================
     REVIEWS
     ========================================================= */

  const S = [
    [
      "Priya Reddy",
      "Oct 2026",
      "Dr. Arvind",
      "The team explained every implant stage clearly.",
      "5"
    ],
    [
      "Arjun Kumar",
      "Sep 2026",
      "Dr. Vikram",
      "The root canal experience was comfortable and organised.",
      "5"
    ],
    [
      "Sneha Patel",
      "Sep 2026",
      "Dr. Sneha",
      "A welcoming aligner consultation with clear pricing.",
      "5"
    ],
    [
      "Vikram Rao",
      "Aug 2026",
      "Dr. Arvind",
      "Clean clinic, friendly staff and excellent consultation.",
      "5"
    ],
    [
      "Meera Sharma",
      "Aug 2026",
      "Dr. Kavitha",
      "My child was comfortable throughout the appointment.",
      "5"
    ],
    [
      "Rahul Varma",
      "Jul 2026",
      "Dr. Sneha",
      "The smile design explanation made the decision easy.",
      "5"
    ]
  ];

  /* =========================================================
     FAQ
     ========================================================= */

  const F = [
    [
      "Is the root canal procedure completely painless?",
      "Modern local anaesthesia, rotary instruments and careful isolation are designed to make treatment comfortable."
    ],
    [
      "How long do dental implants last?",
      "With proper planning, hygiene and maintenance, implants can be long-lasting."
    ],
    [
      "What is the difference between traditional braces and clear aligners?",
      "Braces use fixed brackets and wires; aligners use a series of removable transparent trays."
    ],
    [
      "Can I pay for dental treatment in monthly installments (EMI)?",
      "This prototype includes an EMI calculator; actual financing depends on the provider."
    ],
    [
      "What sterilization protocols do you follow between patients?",
      "The prototype highlights 100% autoclave sterilisation and bio-waste management compliance."
    ],
    [
      "Can I reschedule or cancel my booked slot?",
      "Contact the clinic before the appointment so the team can update or release the slot."
    ]
  ];

  /* =========================================================
     AVAILABLE SLOTS
     ========================================================= */

  const slots = {
    morning: [
      ["09:30 AM", "a"],
      ["10:15 AM", "a"],
      ["11:00 AM", "b"],
      ["11:45 AM", "f"],
      ["12:30 PM", "a"]
    ],
    evening: [
      ["04:30 PM", "b"],
      ["05:15 PM", "a"],
      ["06:00 PM", "a"],
      ["06:45 PM", "f"],
      ["07:30 PM", "a"],
      ["08:00 PM", "a"]
    ]
  };

  /* =========================================================
     BOOKING STATE
     ========================================================= */

  let B = {
    step: 1,
    t: null,
    d: null,
    date: null,
    shift: "morning",
    slot: null
  };

  /* =========================================================
     DATE HELPERS
     ========================================================= */

  function localDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function dates() {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date();

      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + index);

      return date;
    });
  }

  function dateText(date, index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";

    return (
      date.toLocaleDateString("en-IN", {
        weekday: "short"
      }) +
      " " +
      date.getDate()
    );
  }

  /* =========================================================
     MODALS
     ========================================================= */

  const modal = id => {
    const element = $("#" + id);

    if (!element) return;

    element.classList.add("show");
    element.setAttribute("aria-hidden", "false");
  };

  const close = id => {
    const element = $("#" + id);

    if (!element) return;

    element.classList.remove("show");
    element.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  };

  const open = id => {
    modal(id);
    document.body.style.overflow = "hidden";
  };

  /* =========================================================
     RESET BOOKING
     ========================================================= */

  function resetBooking() {
    B = {
      step: 1,
      t: null,
      d: null,
      date: null,
      shift: "morning",
      slot: null
    };
  }

  /* =========================================================
     BOOKING STEP HEADER
     ========================================================= */

  function bookingSteps() {
    const treatment = T.find(item => item[0] === B.t);
    const doctor =
      B.d === "fastest"
        ? null
        : D.find(item => item[0] === B.d);

    const stepData = [
      {
        number: 1,
        title: "Treatment",
        value: treatment ? treatment[1] : "Select treatment"
      },
      {
        number: 2,
        title: "Specialist",
        value: doctor
          ? doctor[1]
          : B.d === "fastest"
            ? "First available"
            : "Select specialist"
      },
      {
        number: 3,
        title: "Date & Slot",
        value:
          B.date && B.slot
            ? `${B.date} • ${B.slot}`
            : "Select date & time"
      },
      {
        number: 4,
        title: "Patient Info",
        value: "Enter patient details"
      }
    ];

    return `
      <div class="booking-step-list">
        ${stepData
          .map(
            item => `
              <button
                type="button"
                class="
                  booking-step
                  ${B.step === item.number ? "active" : ""}
                  ${B.step > item.number ? "completed" : ""}
                "
                data-step="${item.number}"
              >
                <span class="booking-step-number">
                  ${item.number}
                </span>

                <span class="booking-step-content">
                  <strong>
                    ${item.number} ${esc(item.title)}
                  </strong>

                  <small>
                    ${esc(item.value)}
                  </small>
                </span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  /* =========================================================
     BOOKING SUMMARY
     ========================================================= */

  function bookingSummary() {
    const treatment = T.find(item => item[0] === B.t);
    const doctor =
      B.d === "fastest"
        ? null
        : D.find(item => item[0] === B.d);

    if (!treatment && !doctor && !B.date) {
      return "";
    }

    return `
      <div class="booking-summary">

        ${
          treatment
            ? `
              <div>
                <small>Treatment</small>
                <strong>${esc(treatment[1])}</strong>
              </div>
            `
            : ""
        }

        ${
          doctor
            ? `
              <div>
                <small>Specialist</small>
                <strong>${esc(doctor[1])}</strong>
              </div>
            `
            : B.d === "fastest"
              ? `
                <div>
                  <small>Specialist</small>
                  <strong>First Available Specialist</strong>
                </div>
              `
              : ""
        }

        ${
          B.date
            ? `
              <div>
                <small>Date</small>
                <strong>${esc(B.date)}</strong>
              </div>
            `
            : ""
        }

        ${
          B.slot
            ? `
              <div>
                <small>Time</small>
                <strong>${esc(B.slot)}</strong>
              </div>
            `
            : ""
        }

      </div>
    `;
  }

  /* =========================================================
     BOOKING VIEW
     ========================================================= */

  function bookingView() {
    const content = $("#bookingContent");

    if (!content) return;

    let heading = "";
    let description = "";
    let body = "";

    /* -------------------------------------------------------
       STEP 1
       ------------------------------------------------------- */

    if (B.step === 1) {
      heading = "Select your treatment";
      description = "Choose the dental treatment you need.";

      body = `
        <div class="choice-grid">

          ${T.map(
            treatment => `
              <button
                type="button"
                class="
                  choice-card
                  ${B.t === treatment[0] ? "selected" : ""}
                "
                data-t="${treatment[0]}"
              >

                <span class="choice-number">
                  ${B.t === treatment[0] ? "✓" : ""}
                </span>

                <strong>
                  ${esc(treatment[1])}
                </strong>

                <small>
                  ${esc(treatment[2])}
                </small>

                <small>
                  ${esc(treatment[4])}
                  • From ₹${money(treatment[5])}
                </small>

                ${
                  treatment[6]
                    ? `
                      <small>
                        EMI from ₹${money(treatment[6])}/mo
                      </small>
                    `
                    : ""
                }

              </button>
            `
          ).join("")}

        </div>
      `;
    }

    /* -------------------------------------------------------
       STEP 2
       ------------------------------------------------------- */

    else if (B.step === 2) {
      heading = "Choose your specialist";
      description =
        "Select your preferred specialist or choose the first available doctor.";

      body = `
        <div class="choice-grid">

          <button
            type="button"
            class="
              choice-card
              ${B.d === "fastest" ? "selected" : ""}
            "
            data-d="fastest"
          >

            <span class="choice-number">
              ${B.d === "fastest" ? "✓" : ""}
            </span>

            <strong>
              ⚡ First Available Specialist
            </strong>

            <small>
              Earliest suitable clinician
            </small>

          </button>

          ${D.map(
            doctor => `
              <button
                type="button"
                class="
                  choice-card
                  ${B.d === doctor[0] ? "selected" : ""}
                "
                data-d="${doctor[0]}"
              >

                <span class="choice-number">
                  ${B.d === doctor[0] ? "✓" : ""}
                </span>

                <strong>
                  ${esc(doctor[1])}
                </strong>

                <small>
                  ${esc(doctor[2])}
                </small>

                <small>
                  ★ ${esc(doctor[5])}
                  • ${esc(doctor[3])}
                </small>

                <small>
                  ${esc(doctor[9])}
                </small>

              </button>
            `
          ).join("")}

        </div>
      `;
    }

    /* -------------------------------------------------------
       STEP 3
       ------------------------------------------------------- */

    else if (B.step === 3) {
      heading = "Select date & slot";
      description =
        "Choose your preferred appointment date and available time.";

      const availableDates = dates();

      body = `
        <div class="date-row">

          ${availableDates
            .map(
              (date, index) => {
                const key = localDateKey(date);

                return `
                  <button
                    type="button"
                    class="
                      date-pill
                      ${B.date === key ? "active" : ""}
                    "
                    data-date="${key}"
                  >

                    <strong>
                      ${dateText(date, index)}
                    </strong>

                    <small>
                      ${date.toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric"
                      })}
                    </small>

                  </button>
                `;
              }
            )
            .join("")}

        </div>

        <div class="shift-row">

          <button
            type="button"
            class="${B.shift === "morning" ? "active" : ""}"
            data-shift="morning"
          >
            ☀ Morning
            <small>9:00 AM - 1:00 PM</small>
          </button>

          <button
            type="button"
            class="${B.shift === "evening" ? "active" : ""}"
            data-shift="evening"
          >
            ◐ Evening
            <small>4:30 PM - 8:30 PM</small>
          </button>

        </div>

        <div class="slot-heading">
          <strong>
            Available time slots
          </strong>

          <span>
            ${
              B.date
                ? esc(B.date)
                : "Select a date first"
            }
          </span>
        </div>

        <div class="slot-row">

          ${B.date
            ? slots[B.shift]
                .map(slot => {
                  const isBooked = slot[1] === "b";
                  const isFast = slot[1] === "f";
                  const isSelected = B.slot === slot[0];

                  return `
                    <button
                      type="button"
                      class="
                        slot-chip
                        ${isBooked ? "booked" : ""}
                        ${isFast ? "fast" : ""}
                        ${isSelected ? "selected" : ""}
                      "
                      ${isBooked ? "disabled" : ""}
                      data-slot="${slot[0]}"
                    >

                      ${esc(slot[0])}

                      ${
                        isFast
                          ? `<small>1 left</small>`
                          : ""
                      }

                      ${
                        isSelected
                          ? " ✓"
                          : ""
                      }

                    </button>
                  `;
                })
                .join("")
            : `
              <div class="empty-slot-message">
                Please select a date to view available slots.
              </div>
            `}

        </div>
      `;
    }

    /* -------------------------------------------------------
       STEP 4
       ------------------------------------------------------- */

    else {
      heading = "Enter patient information";
      description =
        "Enter the patient's details to confirm the appointment.";

      body = `
        ${bookingSummary()}

        <form
          id="patientForm"
          class="form-grid"
        >

          <label>
            <span>Full Name *</span>

            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              autocomplete="name"
              required
            >
          </label>

          <label>
            <span>WhatsApp Mobile Number *</span>

            <input
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              autocomplete="tel"
              required
            >
          </label>

          <label>
            <span>Age *</span>

            <input
              name="age"
              type="number"
              min="1"
              max="120"
              placeholder="Age"
              required
            >
          </label>

          <label>
            <span>Gender *</span>

            <select
              name="gender"
              required
            >
              <option value="">
                Select Gender
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </label>

          <label>
            <span>Consultation Type *</span>

            <select
              name="type"
              required
            >
              <option value="">
                Select consultation
              </option>

              <option value="In-Clinic Consultation">
                In-Clinic Consultation
              </option>

              <option value="Emergency Toothache">
                Emergency Toothache
              </option>
            </select>
          </label>

          <label>
            <span>Email Address</span>

            <input
              name="email"
              type="email"
              placeholder="example@email.com"
              autocomplete="email"
            >
          </label>

          <label class="full">
            <span>Chief Complaint</span>

            <textarea
              name="complaint"
              rows="3"
              placeholder="Tell us about your dental problem..."
            ></textarea>
          </label>

          <label class="checkbox-label full">

            <input
              name="wa"
              type="checkbox"
              checked
            >

            <span>
              Receive appointment confirmation
              and reminders on WhatsApp
            </span>

          </label>

        </form>
      `;
    }

    /* =======================================================
       RENDER COMPLETE BOOKING CONTENT
       ======================================================= */

    content.innerHTML = `
      ${bookingSteps()}

      <div class="booking-main">

        <span class="eyebrow">
          STEP ${B.step} OF 4
        </span>

        <h2>
          ${esc(heading)}
        </h2>

        <p class="booking-description">
          ${esc(description)}
        </p>

        ${body}

        ${
          B.step < 4
            ? `
              <div class="wizard-actions">

                ${
                  B.step > 1
                    ? `
                      <button
                        type="button"
                        class="btn btn-outline-teal"
                        data-back
                      >
                        ← Back
                      </button>
                    `
                    : `
                      <span></span>
                    `
                }

                <button
                  type="button"
                  class="btn btn-primary-glow"
                  data-next
                  ${
                    (B.step === 1 && !B.t) ||
                    (B.step === 2 && !B.d) ||
                    (B.step === 3 &&
                      (!B.date || !B.slot))
                      ? "disabled"
                      : ""
                  }
                >
                  Continue →
                </button>

              </div>
            `
            : `
              <div class="wizard-actions">

                <button
                  type="button"
                  class="btn btn-outline-teal"
                  data-back
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  form="patientForm"
                  class="btn btn-primary-glow"
                >
                  Confirm Appointment
                </button>

              </div>
            `
        }

      </div>
    `;
  }

  /* =========================================================
     OPEN BOOKING
     ========================================================= */

  function startBooking() {
    resetBooking();
    bookingView();
    open("bookingModal");
  }

  /* =========================================================
     CONFIRM APPOINTMENT
     ========================================================= */

  function confirmAppointment(patient, treatment, doctor) {
    const content = $("#bookingContent");

    if (!content) return;

    content.innerHTML = `
      <div class="loader">

        <div class="loader-ring"></div>

        <h3>
          Securing your appointment slot...
        </h3>

        <p>
          Please wait...
        </p>

      </div>
    `;

    setTimeout(() => {
      content.innerHTML = `
        <div class="confirm-card">

          <span class="eyebrow">
            APPOINTMENT CONFIRMED
          </span>

          <h2>
            Your appointment is secured.
          </h2>

          <div class="token-big">
            ${esc(patient.token)}
          </div>

          <div class="confirm-details">

            <div>
              <small>Patient</small>
              <strong>
                ${esc(patient.name)}
              </strong>
            </div>

            <div>
              <small>Treatment</small>
              <strong>
                ${esc(treatment[1])}
              </strong>
            </div>

            <div>
              <small>Doctor</small>
              <strong>
                ${esc(doctor[1])}
              </strong>
            </div>

            <div>
              <small>Date & Time</small>
              <strong>
                ${esc(patient.date)}
                •
                ${esc(patient.slot)}
              </strong>
            </div>

          </div>

          <div class="calendar-actions">

            <button
              type="button"
              class="btn btn-primary-glow"
              id="gcal"
            >
              Google Calendar
            </button>

            <button
              type="button"
              class="btn btn-outline-teal"
              id="ical"
            >
              Apple Calendar
            </button>

            <button
              type="button"
              class="btn btn-outline-teal"
              id="pslip"
            >
              Download PDF Slip
            </button>

          </div>

          <button
            type="button"
            class="btn btn-link"
            data-close-booking
          >
            Close
          </button>

        </div>
      `;

      const toast = $("#whatsappToast");

      if (toast) {
        const message = $("#waMessage");

        if (message) {
          message.textContent =
            `Hello ${patient.name}! Your appointment at Apex Dental Studio is confirmed. Token ${patient.token}. Doctor: ${doctor[1]}. Date: ${patient.date} at ${patient.slot}.`;
        }

        setTimeout(() => {
          toast.classList.add("show");
        }, 800);
      }

      const gcalButton = $("#gcal");
      const icalButton = $("#ical");
      const pdfButton = $("#pslip");

      if (gcalButton) {
        gcalButton.onclick = () =>
          gcal(patient, treatment, doctor);
      }

      if (icalButton) {
        icalButton.onclick = () =>
          ical(patient, treatment, doctor);
      }

      if (pdfButton) {
        pdfButton.onclick = () =>
          pdf(patient, treatment, doctor);
      };
    }, 800);
  }

  /* =========================================================
     GOOGLE CALENDAR
     ========================================================= */

  function gcal(patient, treatment, doctor) {
    const start =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot) +
      "00";

    const end =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot, 45) +
      "00";

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(
        "Apex Dental " + patient.token
      )}` +
      `&dates=${start}/${end}` +
      `&details=${encodeURIComponent(
        treatment[1] + " with " + doctor[1]
      )}` +
      `&location=${encodeURIComponent(
        "Plot 18, Jubilee Hills Road No. 36, Hyderabad"
      )}`;

    window.open(url, "_blank");
  }

  /* =========================================================
     TIME CONVERSION
     ========================================================= */

  function to24(time, add = 0) {
    const match = time.match(
      /(\d+):(\d+)\s*(AM|PM)/i
    );

    if (!match) return "0000";

    let hours = Number(match[1]);
    let minutes = Number(match[2]);

    const period = match[3].toUpperCase();

    if (period === "PM" && hours < 12) {
      hours += 12;
    }

    if (period === "AM" && hours === 12) {
      hours = 0;
    }

    minutes += add;

    hours += Math.floor(minutes / 60);
    minutes %= 60;

    return (
      String(hours).padStart(2, "0") +
      String(minutes).padStart(2, "0")
    );
  }

  /* =========================================================
     DOWNLOAD FILE
     ========================================================= */

  function dl(data, name, type) {
    const link = document.createElement("a");

    const url = URL.createObjectURL(
      new Blob([data], { type })
    );

    link.href = url;
    link.download = name;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  /* =========================================================
     APPLE CALENDAR
     ========================================================= */

  function ical(patient, treatment, doctor) {
    const start =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot) +
      "00";

    const end =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot, 45) +
      "00";

    dl(
      `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apex Dental//EN
BEGIN:VEVENT
UID:${Date.now()}@apex
DTSTART:${start}
DTEND:${end}
SUMMARY:Apex Dental ${patient.token}
DESCRIPTION:${treatment[1]} with ${doctor[1]}
LOCATION:Plot 18, Jubilee Hills Road No. 36, Hyderabad
END:VEVENT
END:VCALENDAR`,
      "apex-dental.ics",
      "text/calendar"
    );
  }

  /* =========================================================
     PDF
     ========================================================= */

  function pdf(patient, treatment, doctor) {
    const lines = [
      "APEX DENTAL & IMPLANT STUDIO",
      "Appointment Confirmation",
      "Token: " + patient.token,
      "Patient: " + patient.name,
      "Treatment: " + treatment[1],
      "Doctor: " + doctor[1],
      "Date: " + patient.date,
      "Time: " + patient.slot,
      "Type: " + patient.type,
      "Plot 18, Jubilee Hills Road No. 36, Hyderabad",
      "Phone: +91 98480 22338"
    ];

    const stream =
      "BT /F1 16 Tf 50 800 Td " +
      lines
        .map(
          line =>
            `(${line.replace(
              /([\\()])/g,
              "\\$1"
            )}) Tj 0 -25 Td`
        )
        .join(" ") +
      " ET";

    const objects = [
      "1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj",

      "2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj",

      "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>endobj",

      "4 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj",

      `5 0 obj<< /Length ${stream.length} >>stream
${stream}
endstream
endobj`
    ];

    let output = "%PDF-1.4\n";
    const offsets = [0];

    objects.forEach(object => {
      offsets.push(output.length);
      output += object + "\n";
    });

    const xrefPosition = output.length;

    output +=
      `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n` +
      offsets
        .slice(1)
        .map(
          offset =>
            String(offset).padStart(10, "0") +
            " 00000 n \n"
        )
        .join("") +
      `trailer<< /Size ${
        objects.length + 1
      } /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;

    dl(
      output,
      "apex-dental-appointment-slip.pdf",
      "application/pdf"
    );
  }

  /* =========================================================
     EMI
     ========================================================= */

  function openEMI() {
    close("bookingModal");
    close("protocolModal");
    close("roadmapModal");

    const emiSection = $("#emi");

    if (!emiSection) return;

    emiSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setTimeout(() => {
      const cost = $("#emiCost");

      if (cost) {
        cost.focus();
      }
    }, 700);
  }

  function initEMI() {
    const cost = $("#emiCost");
    const months = $("#emiMonths");

    if (!cost || !months) return;

    const update = () => {
      const amount = Number(cost.value);
      const duration = Number(months.value);

      const costOutput = $("#emiCostOut");
      const monthsOutput = $("#emiMonthsOut");
      const result = $("#emiResult");

      if (costOutput) {
        costOutput.textContent =
          "₹" + money(amount);
      }

      if (monthsOutput) {
        monthsOutput.textContent =
          duration + " months";
      }

      if (result) {
        result.textContent =
          "₹" +
          Math.round(
            amount / duration
          ).toLocaleString("en-IN");
      }
    };

    cost.addEventListener("input", update);
    months.addEventListener("input", update);

    update();
  }

  /* =========================================================
     ROADMAP
     ========================================================= */

  function openRoadmap() {
    open("roadmapModal");
  }

  /* =========================================================
     QUEUE
     ========================================================= */

  function openQueue() {
    const queue = $("#queue");

    if (!queue) return;

    queue.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* =========================================================
     PROTOCOL
     ========================================================= */

  function showProtocol(id) {
    const treatment = T.find(
      item => item[0] === id
    );

    if (!treatment) return;

    const content = $("#protocolContent");

    if (!content) return;

    content.innerHTML = `
      <span class="eyebrow">
        ${esc(treatment[2])}
      </span>

      <h2>
        ${esc(treatment[1])}
      </h2>

      <p>
        ${esc(treatment[3])}
      </p>

      <div class="roadmap-line">

        ${treatment[8]
          .map(
            (step, index) => `
              <article>

                <b>
                  0${index + 1}
                </b>

                <h3>
                  ${esc(step)}
                </h3>

                <p>
                  Preparation, comfort-first treatment
                  and review.
                </p>

              </article>
            `
          )
          .join("")}

      </div>

      <p>

        <b>
          Starting from
          ₹${money(treatment[5])}
        </b>

        ${
          treatment[6]
            ? ` • EMI from ₹${money(treatment[6])}/mo`
            : ""
        }

      </p>

      <button
        type="button"
        class="btn btn-primary-glow"
        data-book="${treatment[0]}"
      >
        Book this treatment
      </button>
    `;

    open("protocolModal");
  }

  /* =========================================================
     ASSESSMENT
     ========================================================= */

  function assessment() {
    let step = 0;
    const answers = [];

    const questions = [
      [
        "What is your primary dental goal?",
        [
          "Severe tooth pain",
          "Replace missing teeth",
          "Straighten teeth",
          "Whiter smile"
        ]
      ],
      [
        "How long have you experienced this issue?",
        [
          "Less than a week",
          "1-6 months",
          "Over a year"
        ]
      ],
      [
        "Do you experience dental anxiety or fear of needles?",
        [
          "Yes, need pain-free sedation",
          "No, comfortable"
        ]
      ]
    ];

    const content = $("#assessmentContent");

    if (!content) return;

    const render = () => {
      if (step < 3) {
        content.innerHTML = `
          <span class="eyebrow">
            60-SECOND SMILE ASSESSMENT •
            ${step + 1}/3
          </span>

          <h2>
            ${esc(questions[step][0])}
          </h2>

          <div class="assessment-options">

            ${questions[step][1]
              .map(
                option => `
                  <button
                    type="button"
                    data-answer="${esc(option)}"
                  >
                    ${esc(option)}
                  </button>
                `
              )
              .join("")}

          </div>
        `;
      } else {
        let treatment =
          "Urgent Dental Examination & Pain-Relief Consultation";

        let doctor =
          "Dr. Vikram Varma, MDS";

        if (
          answers[0] ===
          "Replace missing teeth"
        ) {
          treatment =
            "Computerized Implant Evaluation + 3D CBCT Scan";

          doctor =
            "Dr. Arvind Swaminathan, MDS";
        } else if (
          answers[0] ===
          "Straighten teeth"
        ) {
          treatment =
            "3D Clear Aligner Smile Plan";

          doctor =
            "Dr. Sneha Reddy, MDS";
        } else if (
          answers[0] ===
          "Whiter smile"
        ) {
          treatment =
            "In-Clinic Laser Whitening Consultation";

          doctor =
            "Dr. Sneha Reddy, MDS";
        }

        content.innerHTML = `
          <span class="eyebrow">
            YOUR RESULT
          </span>

          <h2>
            Recommended Treatment Plan
          </h2>

          <div class="result-plan">

            <h3>
              ${esc(treatment)}
            </h3>

            <p>
              Recommended Specialist:
              <b>${esc(doctor)}</b>
            </p>

            <strong>
              ₹500 Consultation Waiver Applied to Token
            </strong>

          </div>

          <button
            type="button"
            class="btn btn-primary-glow mt-3"
            data-assessment-book
          >
            Book This Solution
          </button>
        `;
      }
    };

    content.onclick = event => {
      const answerButton =
        event.target.closest("[data-answer]");

      if (answerButton) {
        answers[step] =
          answerButton.dataset.answer;

        step++;
        render();

        return;
      }

      if (
        event.target.closest(
          "[data-assessment-book]"
        )
      ) {
        close("assessmentModal");
        startBooking();
      }
    };

    render();
    open("assessmentModal");
  }

  /* =========================================================
     BEFORE / AFTER
     ========================================================= */

  function initBeforeAfter() {
    const wrapper = $("#beforeAfter");

    if (!wrapper) return;

    let dragging = false;

    const move = x => {
      const rect =
        wrapper.getBoundingClientRect();

      const percentage = Math.max(
        0,
        Math.min(
          100,
          ((x - rect.left) / rect.width) * 100
        )
      );

      const before = $("#baBefore");
      const divider = $("#baDivider");
      const hint = $("#dragHint");

      if (before) {
        before.style.clipPath =
          `inset(0 ${100 - percentage}% 0 0)`;
      }

      if (divider) {
        divider.style.left =
          percentage + "%";
      }

      if (hint) {
        hint.style.display = "none";
      }
    };

    wrapper.addEventListener(
      "pointerdown",
      event => {
        dragging = true;
        move(event.clientX);

        wrapper.setPointerCapture(
          event.pointerId
        );
      }
    );

    wrapper.addEventListener(
      "pointermove",
      event => {
        if (dragging) {
          move(event.clientX);
        }
      }
    );

    wrapper.addEventListener(
      "pointerup",
      () => {
        dragging = false;
      }
    );

    wrapper.addEventListener(
      "pointercancel",
      () => {
        dragging = false;
      }
    );
  }

  /* =========================================================
     DOCTORS
     ========================================================= */

  function initDoctors() {
    const grid = $("#doctorGrid");

    if (!grid) return;

    grid.innerHTML = D.map(
      doctor => `
        <article class="doctor-card">

          <div class="doctor-avatar">
            🧑‍⚕️
          </div>

          <div class="doctor-body">

            <h3>
              ${esc(doctor[1])}
            </h3>

            <div class="doctor-title">
              ${esc(doctor[2])}
            </div>

            <div class="doctor-meta">

              <span>
                ★ ${esc(doctor[5])}
                (${esc(doctor[6])})
              </span>

              <span>
                ${esc(doctor[3])}
              </span>

              <span>
                Medical Council ✓
              </span>

              <span>
                ${esc(doctor[8])}
              </span>

              ${doctor[7]
                .map(
                  day =>
                    `<span>${esc(day)}</span>`
                )
                .join("")}

              <span class="available">
                ${esc(doctor[9])}
              </span>

            </div>

            <small>
              ${esc(doctor[4])}
            </small>

            <button
              type="button"
              class="doctor-book"
              data-doctor="${doctor[0]}"
            >
              Book with Dr.
              ${esc(
                doctor[1].replace("Dr. ", "").split(" ")[0]
              )}
            </button>

          </div>

        </article>
      `
    ).join("");
  }

  /* =========================================================
     REVIEWS
     ========================================================= */

  function initReviews() {
    const grid = $("#reviewsGrid");

    if (!grid) return;

    grid.innerHTML = S.map(
      review => `
        <article class="review">

          <div class="stars">
            ★★★★★
          </div>

          <p>
            “${esc(review[3])}”
          </p>

          <div class="reviewer">

            <b>
              ${esc(review[0])}
            </b>

            <span>
              ${esc(review[1])}
              • ✓
              ${esc(review[2])}
            </span>

          </div>

        </article>
      `
    ).join("");
  }

  /* =========================================================
     FAQ
     ========================================================= */

  function initFAQ() {
    const accordion = $("#faqAccordion");

    if (!accordion) return;

    accordion.innerHTML = F.map(
      (faq, index) => `
        <div class="accordion-item">

          <h2 class="accordion-header">

            <button
              class="accordion-button ${
                index ? "collapsed" : ""
              }"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq${index}"
              aria-expanded="${index === 0}"
            >
              ${esc(faq[0])}
            </button>

          </h2>

          <div
            id="faq${index}"
            class="accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }"
          >

            <div class="accordion-body">
              ${esc(faq[1])}
            </div>

          </div>

        </div>
      `
    ).join("");
  }

  /* =========================================================
     TREATMENT CARDS
     ========================================================= */

  function treatmentCards(filter = "All Procedures") {
    const list =
      filter === "All Procedures"
        ? T
        : T.filter(item => item[2] === filter);

    const grid = $("#treatmentGrid");

    if (!grid) return;

    grid.innerHTML = list
      .map(
        treatment => `
          <div class="col-md-6 col-xl-3">

            <article class="treatment-card reveal visible">

              <div class="treatment-head">

                <span class="category-badge">
                  ${esc(treatment[2])}
                </span>

                <span class="duration">
                  ${esc(treatment[4])}
                </span>

              </div>

              <h3>
                ${esc(treatment[1])}
              </h3>

              <p>
                ${esc(treatment[3])}
              </p>

              <div class="price">
                From ₹${money(treatment[5])}
              </div>

              <div class="emi-line">

                ${
                  treatment[6]
                    ? `EMI from ₹${money(treatment[6])}/mo`
                    : "Transparent one-time estimate"
                }

              </div>

              <div class="card-actions">

                <button
                  type="button"
                  class="protocol-btn"
                  data-protocol="${treatment[0]}"
                >
                  View Protocol
                </button>

                <button
                  type="button"
                  class="book-treatment"
                  data-book="${treatment[0]}"
                >
                  Book Slot
                </button>

              </div>

            </article>

          </div>
        `
      )
      .join("");
  }

  /* =========================================================
     TREATMENT FILTERS
     ========================================================= */

  function initTreatmentFilters() {
    const filters = $("#treatmentFilters");

    if (!filters) return;

    const filterData = [
      {
        label: "All Procedures (8)",
        value: "All Procedures"
      },
      {
        label: "Implants & Surgery",
        value: "Implants & Surgery"
      },
      {
        label: "Cosmetic & Aligners",
        value: "Cosmetic & Aligners"
      },
      {
        label: "Root Canal & Crowns",
        value: "Root Canal & Crowns"
      },
      {
        label: "Pediatric (Kids)",
        value: "Pediatric (Kids)"
      }
    ];

    filters.innerHTML = filterData
      .map(
        (filter, index) => `
          <button
            type="button"
            class="${index === 0 ? "active" : ""}"
            data-filter="${esc(filter.value)}"
          >
            ${esc(filter.label)}
          </button>
        `
      )
      .join("");

    treatmentCards();

    filters.addEventListener("click", event => {
      const button =
        event.target.closest("button");

      if (!button) return;

      $$("button", filters).forEach(item =>
        item.classList.remove("active")
      );

      button.classList.add("active");

      treatmentCards(
        button.dataset.filter ||
        "All Procedures"
      );
    });
  }

  /* =========================================================
     REVEAL / COUNTERS
     ========================================================= */

  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(element =>
        element.classList.add("visible")
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const element =
              entry.target;

            if (element.dataset.count) {
              const target =
                Number(element.dataset.count);

              const start =
                performance.now();

              const animate =
                currentTime => {
                  const progress =
                    Math.min(
                      1,
                      (currentTime - start) /
                        1000
                    );

                  const value =
                    Math.floor(
                      target *
                        (1 -
                          Math.pow(
                            1 - progress,
                            3
                          ))
                    );

                  element.textContent =
                    value.toLocaleString(
                      "en-IN"
                    ) + "+";

                  if (progress < 1) {
                    requestAnimationFrame(
                      animate
                    );
                  }
                };

              requestAnimationFrame(
                animate
              );
            }

            element.classList.add(
              "visible"
            );

            observer.unobserve(
              element
            );
          });
        },
        {
          threshold: 0.2
        }
      );

    $$(".reveal,[data-count]").forEach(
      element =>
        observer.observe(element)
    );
  }

  /* =========================================================
     MAIN CLICK HANDLER
     ========================================================= */

  function initClicks() {
    document.addEventListener(
      "click",
      event => {

        /* ---------------------------------------------------
           BOOK APPOINTMENT
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-open-booking]"
          )
        ) {
          startBooking();
          return;
        }

        /* ---------------------------------------------------
           EMI
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-open-emi]"
          )
        ) {
          openEMI();
          return;
        }

        /* ---------------------------------------------------
           ROADMAP
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-open-roadmap]"
          )
        ) {
          openRoadmap();
          return;
        }

        /* ---------------------------------------------------
           QUEUE
           --------------------------------------------------- */

        const queueButton =
          event.target.closest(
            "[data-open-queue]"
          );

        if (queueButton) {
          event.preventDefault();
          openQueue();
          return;
        }

        /* ---------------------------------------------------
           BOOK TREATMENT
           --------------------------------------------------- */

        const bookButton =
          event.target.closest(
            "[data-book]"
          );

        if (bookButton) {
          const treatmentId =
            bookButton.dataset.book;

          const treatment =
            T.find(
              item =>
                item[0] === treatmentId
            );

          if (!treatment) return;

          B = {
            step: 1,
            t: treatmentId,
            d: null,
            date: null,
            shift: "morning",
            slot: null
          };

          close("protocolModal");

          bookingView();
          open("bookingModal");

          return;
        }

        /* ---------------------------------------------------
           BOOK WITH DOCTOR
           --------------------------------------------------- */

        const doctorButton =
          event.target.closest(
            "[data-doctor]"
          );

        if (doctorButton) {
          B = {
            step: 1,
            t: null,
            d: doctorButton.dataset.doctor,
            date: null,
            shift: "morning",
            slot: null
          };

          bookingView();
          open("bookingModal");

          return;
        }

        /* ---------------------------------------------------
           BOOKING STEP NAVIGATION
           --------------------------------------------------- */

        const stepButton =
          event.target.closest(
            "[data-step]"
          );

        if (stepButton) {
          const targetStep =
            Number(
              stepButton.dataset.step
            );

          if (
            targetStep < B.step ||
            (
              targetStep === 2 &&
              B.t
            ) ||
            (
              targetStep === 3 &&
              B.t &&
              B.d
            ) ||
            (
              targetStep === 4 &&
              B.t &&
              B.d &&
              B.date &&
              B.slot
            )
          ) {
            B.step = targetStep;
            bookingView();
          }

          return;
        }

        /* ---------------------------------------------------
           PROTOCOL
           --------------------------------------------------- */

        const protocolButton =
          event.target.closest(
            "[data-protocol]"
          );

        if (protocolButton) {
          showProtocol(
            protocolButton.dataset.protocol
          );

          return;
        }

        /* ---------------------------------------------------
           CLOSE BOOKING
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-close-booking]"
          )
        ) {
          close("bookingModal");
          return;
        }

        /* ---------------------------------------------------
           CLOSE MODALS
           --------------------------------------------------- */

        const closeButton =
          event.target.closest(
            "[data-close]"
          );

        if (closeButton) {
          close(
            closeButton.dataset.close
          );

          return;
        }

        /* ---------------------------------------------------
           BACK
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-back]"
          )
        ) {
          if (B.step > 1) {
            B.step--;
            bookingView();
          }

          return;
        }

        /* ---------------------------------------------------
           NEXT
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-next]"
          )
        ) {
          if (B.step >= 4) return;

          if (B.step === 1 && !B.t) {
            return;
          }

          if (B.step === 2 && !B.d) {
            return;
          }

          if (
            B.step === 3 &&
            (!B.date || !B.slot)
          ) {
            return;
          }

          B.step++;

          if (
            B.step === 2 &&
            !B.d
          ) {
            B.d = "fastest";
          }

          if (
            B.step === 3 &&
            !B.date
          ) {
            B.date =
              localDateKey(
                dates()[0]
              );
          }

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           TREATMENT SELECTION
           --------------------------------------------------- */

        const treatmentButton =
          event.target.closest(
            "[data-t]"
          );

        if (treatmentButton) {
          B.t =
            treatmentButton.dataset.t;

          B.step = 2;

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           DOCTOR SELECTION
           --------------------------------------------------- */

        const doctorChoice =
          event.target.closest(
            "[data-d]"
          );

        if (doctorChoice) {
          B.d =
            doctorChoice.dataset.d;

          B.step = 3;

          if (!B.date) {
            B.date =
              localDateKey(
                dates()[0]
              );
          }

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           DATE
           --------------------------------------------------- */

        const dateButton =
          event.target.closest(
            "[data-date]"
          );

        if (dateButton) {
          B.date =
            dateButton.dataset.date;

          B.slot = null;

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           SHIFT
           --------------------------------------------------- */

        const shiftButton =
          event.target.closest(
            "[data-shift]"
          );

        if (shiftButton) {
          B.shift =
            shiftButton.dataset.shift;

          B.slot = null;

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           SLOT
           --------------------------------------------------- */

        const slotButton =
          event.target.closest(
            "[data-slot]"
          );

        if (
          slotButton &&
          !slotButton.disabled
        ) {
          B.slot =
            slotButton.dataset.slot;

          bookingView();

          return;
        }

        /* ---------------------------------------------------
           WHATSAPP CLOSE
           --------------------------------------------------- */

        if (
          event.target.closest(
            "#closeWa"
          )
        ) {
          const toast =
            $("#whatsappToast");

          if (toast) {
            toast.classList.remove(
              "show"
            );
          }

          return;
        }

        /* ---------------------------------------------------
           VIRTUAL TOUR
           --------------------------------------------------- */

        if (
          event.target.closest(
            "#playTour"
          )
        ) {
          alert(
            "Virtual tour preview:\n\nReception → Consultation → Digital Scan → Surgery → Recovery"
          );

          return;
        }

        /* ---------------------------------------------------
           ASSESSMENT
           --------------------------------------------------- */

        if (
          event.target.closest(
            "[data-open-assessment]"
          )
        ) {
          assessment();
        }
      }
    );
  }

  /* =========================================================
     FORM SUBMISSION
     ========================================================= */

  function initForms() {
    document.addEventListener(
      "submit",
      event => {
        if (
          event.target.id !==
          "patientForm"
        ) {
          return;
        }

        event.preventDefault();

        const form =
          new FormData(
            event.target
          );

        const treatment =
          T.find(
            item =>
              item[0] === B.t
          );

        if (!treatment) {
          alert(
            "Please select a treatment."
          );

          B.step = 1;
          bookingView();

          return;
        }

        const doctor =
          B.d === "fastest"
            ? D[0]
            : D.find(
                item =>
                  item[0] === B.d
              ) || D[0];

        if (!B.date || !B.slot) {
          alert(
            "Please select a date and time slot."
          );

          B.step = 3;
          bookingView();

          return;
        }

        const patient = {
          name: form.get("name"),
          phone: form.get("phone"),
          age: form.get("age"),
          gender: form.get("gender"),
          email: form.get("email"),
          type: form.get("type"),
          complaint:
            form.get("complaint"),
          whatsapp:
            form.get("wa") === "on",

          token:
            "#APX-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(
              1000 +
                Math.random() *
                  9000
            ),

          date: B.date,
          slot: B.slot
        };

        localStorage.setItem(
          "apexLastAppointment",
          JSON.stringify(patient)
        );

        confirmAppointment(
          patient,
          treatment,
          doctor
        );
      }
    );
  }

  /* =========================================================
     YEAR
     ========================================================= */

  function initYear() {
    const year = $("#year");

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }
  }

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {
    initTreatmentFilters();
    initBeforeAfter();
    initDoctors();
    initReviews();
    initFAQ();
    initEMI();
    initReveal();
    initClicks();
    initForms();
    initYear();
  }

  /* =========================================================
     START APPLICATION
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();