(() => {
  "use strict";

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const resetScrollOnReload = () => {
    const navigation = performance.getEntriesByType("navigation")[0];

    if (!navigation || navigation.type !== "reload") return;

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

      requestAnimationFrame(goTop);
    });

    setTimeout(goTop, 100);
    setTimeout(goTop, 500);
  };

  window.addEventListener("pageshow", resetScrollOnReload);
  window.addEventListener("load", resetScrollOnReload);

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

  let B = {
    step: 1,
    t: null,
    d: null,
    date: null,
    shift: "morning",
    slot: null
  };

  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[char]
    );

  const modal = (id) => {
    const element = $("#" + id);

    if (element) {
      element.classList.add("show");
    }
  };

  const close = (id) => {
    const element = $("#" + id);

    if (element) {
      element.classList.remove("show");
    }

    document.body.style.overflow = "";
  };

  const open = (id) => {
    modal(id);
    document.body.style.overflow = "hidden";
  };

  function treatmentCards(filter = "All Procedures") {
    const list =
      filter === "All Procedures"
        ? T
        : T.filter((item) => item[2] === filter);

    const grid = $("#treatmentGrid");

    if (!grid) return;

    grid.innerHTML = list
      .map(
        (item) => `
          <div class="col-md-6 col-xl-3">
            <article class="treatment-card reveal visible">
              <div class="treatment-head">
                <span class="category-badge">${item[2]}</span>
                <span class="duration">${item[4]}</span>
              </div>

              <h3>${item[1]}</h3>

              <p>${item[3]}</p>

              <div class="price">
                From ₹${item[5].toLocaleString("en-IN")}
              </div>

              <div class="emi-line">
                ${
                  item[6]
                    ? `EMI from ₹${item[6].toLocaleString("en-IN")}/mo`
                    : "Transparent one-time estimate"
                }
              </div>

              <div class="card-actions">
                <button
                  class="protocol-btn"
                  data-protocol="${item[0]}"
                >
                  View Protocol
                </button>

                <button
                  class="book-treatment"
                  data-book="${item[0]}"
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

  function bookingView() {
    const container = $("#bookingContent");

    if (!container) return;

    let heading = "";
    let body = "";

    if (B.step === 1) {
      heading = "Select your treatment";

      body = `
        <div class="choice-grid">
          ${T.map(
            (item) => `
              <button
                class="choice-card ${B.t === item[0] ? "selected" : ""}"
                data-t="${item[0]}"
              >
                <strong>${item[1]}</strong>
                <small>
                  ${item[4]} • From ₹${item[5].toLocaleString("en-IN")}
                </small>
              </button>
            `
          ).join("")}
        </div>
      `;
    } else if (B.step === 2) {
      heading = "Choose your specialist";

      body = `
        <div class="choice-grid">
          <button
            class="choice-card ${B.d === "fastest" ? "selected" : ""}"
            data-d="fastest"
          >
            <strong>⚡ First Available Specialist (Fastest)</strong>
            <small>Earliest suitable clinician</small>
          </button>

          ${D.map(
            (doctor) => `
              <button
                class="choice-card ${B.d === doctor[0] ? "selected" : ""}"
                data-d="${doctor[0]}"
              >
                <strong>${doctor[1]}</strong>
                <small>${doctor[2]}</small>
              </button>
            `
          ).join("")}
        </div>
      `;
    } else if (B.step === 3) {
      const availableDates = dates();

      body = `
        <div class="date-row">
          ${availableDates
            .map(
              (date, index) => {
                const value = date.toISOString().slice(0, 10);

                return `
                  <button
                    class="date-pill ${B.date === value ? "active" : ""}"
                    data-date="${value}"
                  >
                    ${dateText(date, index)}
                    <small>
                      ${date.toLocaleDateString("en-IN", {
                        month: "short"
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
            class="${B.shift === "morning" ? "active" : ""}"
            data-shift="morning"
          >
            ☀ Morning 9:00-1:00
          </button>

          <button
            class="${B.shift === "evening" ? "active" : ""}"
            data-shift="evening"
          >
            ◐ Evening 4:30-8:30
          </button>
        </div>

        <div class="slot-row">
          ${slots[B.shift]
            .map(
              (slot) => `
                <button
                  class="
                    slot-chip
                    ${slot[1] === "b" ? "booked" : ""}
                    ${slot[1] === "f" ? "fast" : ""}
                    ${B.slot === slot[0] ? "selected" : ""}
                  "
                  ${slot[1] === "b" ? "disabled" : ""}
                  data-slot="${slot[0]}"
                >
                  ${slot[0]}
                  ${slot[1] === "f" ? " • 1 left" : ""}
                  ${B.slot === slot[0] ? " ✓" : ""}
                </button>
              `
            )
            .join("")}
        </div>
      `;
    } else {
      heading = "Enter your details";

      body = `
        <form id="patientForm" class="form-grid">
          <label>
            Full Name *
            <input name="name" required>
          </label>

          <label>
            WhatsApp Mobile Number *
            <input name="phone" required>
          </label>

          <label>
            Age *
            <input
              name="age"
              type="number"
              min="1"
              max="120"
              required
            >
          </label>

          <label>
            Gender *
            <select name="gender" required>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Consultation Type *
            <select name="type" required>
              <option value="">Select</option>
              <option>In-Clinic Consultation</option>
              <option>Emergency Toothache</option>
            </select>
          </label>

          <label class="full">
            Chief Complaint
            <textarea
              name="complaint"
              rows="3"
            ></textarea>
          </label>

          <label class="full">
            <input
              name="wa"
              type="checkbox"
              checked
            >
            Receive instant appointment confirmation & reminders on WhatsApp
          </label>
        </form>
      `;
    }

    container.innerHTML = `
      <span class="eyebrow">
        STEP ${B.step} OF 4
      </span>

      <h2>${heading}</h2>

      ${
        B.step === 1
          ? "<p>Visual treatment cards with duration and starting price.</p>"
          : ""
      }

      ${body}

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
            : "<span></span>"
        }

        ${
          B.step < 4
            ? `
              <button
                type="button"
                class="btn btn-primary-glow"
                data-next
                ${
                  (B.step === 1 && !B.t) ||
                  (B.step === 2 && !B.d) ||
                  (B.step === 3 && (!B.date || !B.slot))
                    ? "disabled"
                    : ""
                }
              >
                Continue →
              </button>
            `
            : `
              <button
                type="submit"
                form="patientForm"
                class="btn btn-primary-glow"
              >
                Confirm Appointment
              </button>
            `
        }
      </div>
    `;
  }

  function confirmAppointment(patient, treatment, doctor) {
    const container = $("#bookingContent");

    if (!container) return;

    container.innerHTML = `
      <div class="loader">
        <div class="loader-ring"></div>

        <h3>
          Securing your appointment slot...
        </h3>

        <p>
          0.8 second medical loader
        </p>
      </div>
    `;

    setTimeout(() => {
      container.innerHTML = `
        <div class="confirm-card">
          <span class="eyebrow">
            APPOINTMENT CONFIRMED
          </span>

          <h2>
            Your appointment is secured.
          </h2>

          <div class="token-big">
            ${patient.token}
          </div>

          <div class="confirm-details">
            <div>
              <small>Patient</small>
              <strong>${esc(patient.name)}</strong>
            </div>

            <div>
              <small>Treatment</small>
              <strong>${esc(treatment[1])}</strong>
            </div>

            <div>
              <small>Doctor</small>
              <strong>${esc(doctor[1])}</strong>
            </div>

            <div>
              <small>Date & Time</small>
              <strong>
                ${patient.date} • ${patient.slot}
              </strong>
            </div>
          </div>

          <div class="calendar-actions">
            <button
              class="btn btn-primary-glow"
              id="gcal"
            >
              Google Calendar
            </button>

            <button
              class="btn btn-outline-teal"
              id="ical"
            >
              Apple Calendar
            </button>

            <button
              class="btn btn-outline-teal"
              id="pslip"
            >
              Download PDF Slip
            </button>
          </div>

          <button
            class="btn btn-link"
            data-close-booking
          >
            Close
          </button>
        </div>
      `;

      setTimeout(() => {
        const toast = $("#whatsappToast");

        if (!toast) return;

        $("#waMessage").textContent =
          `Hello ${patient.name}! Your appointment at Apex Dental Studio is confirmed. ` +
          `Token ${patient.token}. Doctor: ${doctor[1]}. ` +
          `Date: ${patient.date} at ${patient.slot}. ` +
          "Tap for Google Maps directions.";

        toast.classList.add("show");
      }, 1200);

      $("#gcal").onclick = () =>
        gcal(patient, treatment, doctor);

      $("#ical").onclick = () =>
        ical(patient, treatment, doctor);

      $("#pslip").onclick = () =>
        pdf(patient, treatment, doctor);
    }, 800);
  }

  function gcal(patient, treatment, doctor) {
    const start =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot) +
      "00";

    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      `&text=${encodeURIComponent("Apex Dental " + patient.token)}` +
      `&dates=${start}/${start}` +
      `&details=${encodeURIComponent(
        treatment[1] + " with " + doctor[1]
      )}` +
      `&location=${encodeURIComponent(
        "Plot 18, Jubilee Hills Road No. 36, Hyderabad"
      )}`;

    window.open(url, "_blank");
  }

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

  function downloadFile(data, filename, type) {
    const link = document.createElement("a");
    const url = URL.createObjectURL(
      new Blob([data], { type })
    );

    link.href = url;
    link.download = filename;
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function ical(patient, treatment, doctor) {
    const start =
      patient.date.replaceAll("-", "") +
      "T" +
      to24(patient.slot) +
      "00";

    const data = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apex Dental//EN
BEGIN:VEVENT
UID:${Date.now()}@apex
DTSTART:${start}
SUMMARY:Apex Dental ${patient.token}
DESCRIPTION:${treatment[1]} with ${doctor[1]}
END:VEVENT
END:VCALENDAR`;

    downloadFile(
      data,
      "apex-dental.ics",
      "text/calendar"
    );
  }

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
          (line) =>
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

    objects.forEach((object) => {
      offsets.push(output.length);
      output += object + "\n";
    });

    const xref = output.length;

    output +=
      `xref\n0 ${objects.length + 1}\n` +
      "0000000000 65535 f \n" +
      offsets
        .slice(1)
        .map(
          (offset) =>
            String(offset).padStart(10, "0") +
            " 00000 n \n"
        )
        .join("") +
      `trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\n` +
      `startxref\n${xref}\n%%EOF`;

    downloadFile(
      output,
      "apex-dental-appointment-slip.pdf",
      "application/pdf"
    );
  }

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

    const render = () => {
      const content = $("#assessmentContent");

      if (!content) return;

      if (step < questions.length) {
        content.innerHTML = `
          <span class="eyebrow">
            60-SECOND SMILE ASSESSMENT • ${step + 1}/3
          </span>

          <h2>
            ${questions[step][0]}
          </h2>

          <div class="assessment-options">
            ${questions[step][1]
              .map(
                (option) => `
                  <button data-answer="${esc(option)}">
                    ${esc(option)}
                  </button>
                `
              )
              .join("")}
          </div>
        `;

        return;
      }

      const primaryGoal = answers[0];

      const treatment =
        primaryGoal === "Replace missing teeth"
          ? "Computerized Implant Evaluation + 3D CBCT Scan"
          : primaryGoal === "Straighten teeth"
            ? "3D Clear Aligner Smile Plan"
            : primaryGoal === "Whiter smile"
              ? "In-Clinic Laser Whitening Consultation"
              : "Urgent Dental Examination & Pain-Relief Consultation";

      const specialist =
        primaryGoal === "Straighten teeth"
          ? "Dr. Sneha Reddy, MDS"
          : primaryGoal === "Replace missing teeth"
            ? "Dr. Arvind Swaminathan, MDS"
            : primaryGoal === "Whiter smile"
              ? "Dr. Sneha Reddy, MDS"
              : "Dr. Vikram Varma, MDS";

      content.innerHTML = `
        <span class="eyebrow">
          YOUR RESULT
        </span>

        <h2>
          Recommended Treatment Plan
        </h2>

        <div class="result-plan">
          <h3>
            ${treatment}
          </h3>

          <p>
            Recommended Specialist:
            <b>${specialist}</b>
          </p>

          <strong>
            ₹500 Consultation Waiver Applied to Token
          </strong>
        </div>

        <button
          class="btn btn-primary-glow mt-3"
          data-open-booking
        >
          Book This Solution
        </button>
      `;
    };

    const content = $("#assessmentContent");

    if (!content) return;

    content.onclick = (event) => {
      const answer = event.target.closest("[data-answer]");

      if (answer) {
        answers[step] = answer.dataset.answer;
        step++;
        render();
        return;
      }

      if (event.target.closest("[data-open-booking]")) {
        close("assessmentModal");

        B = {
          step: 1,
          t: null,
          d: null,
          date: null,
          shift: "morning",
          slot: null
        };

        bookingView();
        open("bookingModal");
      }
    };

    render();
    open("assessmentModal");
  }

  function initializeTreatmentFilters() {
    const filters = $("#treatmentFilters");

    if (!filters) return;

    const categories = [
      "All Procedures",
      "Implants & Surgery",
      "Cosmetic & Aligners",
      "Root Canal & Crowns",
      "Pediatric (Kids)"
    ];

    filters.innerHTML = categories
      .map(
        (category, index) => `
          <button
            class="${index === 0 ? "active" : ""}"
            data-filter="${category}"
          >
            ${category}${index === 0 ? " (8)" : ""}
          </button>
        `
      )
      .join("");

    treatmentCards();

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button");

      if (!button) return;

      $$("button", filters).forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      treatmentCards(
        button.dataset.filter || "All Procedures"
      );
    });
  }

  function initializeBeforeAfter() {
    const wrapper = $("#beforeAfter");

    if (!wrapper) return;

    let dragging = false;

    const move = (clientX) => {
      const rect = wrapper.getBoundingClientRect();

      const position = Math.max(
        0,
        Math.min(
          100,
          ((clientX - rect.left) / rect.width) * 100
        )
      );

      const before = $("#baBefore");
      const divider = $("#baDivider");
      const hint = $("#dragHint");

      if (before) {
        before.style.clipPath =
          `inset(0 ${100 - position}% 0 0)`;
      }

      if (divider) {
        divider.style.left = position + "%";
      }

      if (hint) {
        hint.style.display = "none";
      }
    };

    wrapper.onpointerdown = (event) => {
      dragging = true;
      move(event.clientX);
      wrapper.setPointerCapture(event.pointerId);
    };

    wrapper.onpointermove = (event) => {
      if (dragging) {
        move(event.clientX);
      }
    };

    wrapper.onpointerup = () => {
      dragging = false;
    };

    wrapper.onpointercancel = () => {
      dragging = false;
    };
  }

  function initializeDoctors() {
    const grid = $("#doctorGrid");

    if (!grid) return;

    grid.innerHTML = D.map(
      (doctor) => `
        <article class="doctor-card">
          <div class="doctor-avatar">
            🧑‍⚕️
          </div>

          <div class="doctor-body">
            <h3>${doctor[1]}</h3>

            <div class="doctor-title">
              ${doctor[2]}
            </div>

            <div class="doctor-meta">
              <span>★ ${doctor[5]} (${doctor[6]})</span>
              <span>${doctor[3]}</span>
              <span>Medical Council ✓</span>
              <span>${doctor[8]}</span>

              ${doctor[7]
                .map((day) => `<span>${day}</span>`)
                .join("")}

              <span class="available">
                ${doctor[9]}
              </span>
            </div>

            <small>
              ${doctor[4]}
            </small>

            <button
              class="doctor-book"
              data-doctor="${doctor[0]}"
            >
              Book with Dr. ${doctor[1].split(" ")[1]}
            </button>
          </div>
        </article>
      `
    ).join("");
  }

  function initializeReviews() {
    const grid = $("#reviewsGrid");

    if (!grid) return;

    grid.innerHTML = S.map(
      (review) => `
        <article class="review">
          <div class="stars">
            ★★★★★
          </div>

          <p>
            “${esc(review[3])}”
          </p>

          <div class="reviewer">
            <b>${esc(review[0])}</b>

            <span>
              ${review[1]} • ✓ ${esc(review[2])}
            </span>
          </div>
        </article>
      `
    ).join("");
  }

  function initializeFaq() {
    const accordion = $("#faqAccordion");

    if (!accordion) return;

    accordion.innerHTML = F.map(
      (item, index) => `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button ${index ? "collapsed" : ""}"
              data-bs-toggle="collapse"
              data-bs-target="#faq${index}"
            >
              ${esc(item[0])}
            </button>
          </h2>

          <div
            id="faq${index}"
            class="accordion-collapse collapse ${index ? "" : "show"}"
          >
            <div class="accordion-body">
              ${esc(item[1])}
            </div>
          </div>
        </div>
      `
    ).join("");
  }

  function initializeEmi() {
    const cost = $("#emiCost");
    const months = $("#emiMonths");

    if (!cost || !months) return;

    const calculate = () => {
      const amount = Number(cost.value);
      const duration = Number(months.value);

      const costOutput = $("#emiCostOut");
      const monthsOutput = $("#emiMonthsOut");
      const result = $("#emiResult");

      if (costOutput) {
        costOutput.textContent =
          "₹" + amount.toLocaleString("en-IN");
      }

      if (monthsOutput) {
        monthsOutput.textContent =
          duration + " months";
      }

      if (result) {
        result.textContent =
          "₹" +
          Math.round(amount / duration).toLocaleString("en-IN");
      }
    };

    cost.addEventListener("input", calculate);
    months.addEventListener("input", calculate);

    calculate();
  }

  function initializeCountersAndReveal() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.dataset.count) {
            const target = Number(
              entry.target.dataset.count
            );

            const start = performance.now();

            const animate = (time) => {
              const progress = Math.min(
                1,
                (time - start) / 1000
              );

              const value = Math.floor(
                target *
                  (1 - Math.pow(1 - progress, 3))
              );

              entry.target.textContent =
                value.toLocaleString("en-IN") + "+";

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2
      }
    );

    $$(".reveal, [data-count]").forEach((element) => {
      observer.observe(element);
    });
  }

  function initializeEvents() {
    document.addEventListener("click", (event) => {
      const openBookingButton =
        event.target.closest("[data-open-booking]");

      if (openBookingButton) {
        B = {
          step: 1,
          t: null,
          d: null,
          date: null,
          shift: "morning",
          slot: null
        };

        bookingView();
        open("bookingModal");
      }

      const bookTreatment =
        event.target.closest("[data-book]");

      if (bookTreatment) {
        B = {
          step: 3,
          t: bookTreatment.dataset.book,
          d: "fastest",
          date: dates()[0].toISOString().slice(0, 10),
          shift: "morning",
          slot: null
        };

        bookingView();
        open("bookingModal");
        close("protocolModal");
      }

      const doctorButton =
        event.target.closest("[data-doctor]");

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
      }

      const protocolButton =
        event.target.closest("[data-protocol]");

      if (protocolButton) {
        const treatment = T.find(
          (item) =>
            item[0] === protocolButton.dataset.protocol
        );

        if (!treatment) return;

        $("#protocolContent").innerHTML = `
          <span class="eyebrow">
            ${treatment[2]}
          </span>

          <h2>
            ${treatment[1]}
          </h2>

          <p>
            ${treatment[3]}
          </p>

          <div class="roadmap-line">
            ${treatment[8]
              .map(
                (stage, index) => `
                  <article>
                    <b>0${index + 1}</b>

                    <h3>
                      ${stage}
                    </h3>

                    <p>
                      Preparation, comfort-first treatment and review.
                    </p>
                  </article>
                `
              )
              .join("")}
          </div>

          <p>
            <b>
              Starting from ₹${treatment[5].toLocaleString("en-IN")}
            </b>

            ${
              treatment[6]
                ? ` • EMI from ₹${treatment[6].toLocaleString("en-IN")}/mo`
                : ""
            }
          </p>

          <button
            class="btn btn-primary-glow"
            data-book="${treatment[0]}"
          >
            Book this treatment
          </button>
        `;

        open("protocolModal");
      }

      if (event.target.closest("[data-close-booking]")) {
        close("bookingModal");
      }

      const closeButton =
        event.target.closest("[data-close]");

      if (closeButton) {
        close(closeButton.dataset.close);
      }

      if (event.target.closest("[data-back]")) {
        if (B.step > 1) {
          B.step--;
          bookingView();
        }
      }

      const nextButton =
        event.target.closest("[data-next]");

      if (nextButton && !nextButton.disabled) {
        B.step++;

        if (B.step === 3 && !B.date) {
          B.date = dates()[0]
            .toISOString()
            .slice(0, 10);
        }

        bookingView();
      }

      const treatmentButton =
        event.target.closest("[data-t]");

      if (treatmentButton) {
        B.t = treatmentButton.dataset.t;
        bookingView();
      }

      const doctorChoice =
        event.target.closest("[data-d]");

      if (doctorChoice) {
        B.d = doctorChoice.dataset.d;
        bookingView();
      }

      const dateButton =
        event.target.closest("[data-date]");

      if (dateButton) {
        B.date = dateButton.dataset.date;
        B.slot = null;
        bookingView();
      }

      const shiftButton =
        event.target.closest("[data-shift]");

      if (shiftButton) {
        B.shift = shiftButton.dataset.shift;
        B.slot = null;
        bookingView();
      }

      const slotButton =
        event.target.closest("[data-slot]");

      if (slotButton && !slotButton.disabled) {
        B.slot = slotButton.dataset.slot;
        bookingView();
      }

      if (event.target.closest("#closeWa")) {
        const toast = $("#whatsappToast");

        if (toast) {
          toast.classList.remove("show");
        }
      }

      if (event.target.closest("#playTour")) {
        alert(
          "Virtual tour preview: Reception → Consultation → Digital Scan → Surgery → Recovery."
        );
      }

      if (event.target.closest("[data-open-assessment]")) {
        assessment();
      }
    });

    document.addEventListener("submit", (event) => {
      if (event.target.id !== "patientForm") return;

      event.preventDefault();

      const form = new FormData(event.target);

      const treatment = T.find(
        (item) => item[0] === B.t
      );

      const doctor =
        B.d === "fastest"
          ? D[0]
          : D.find((item) => item[0] === B.d) || D[0];

      if (!treatment) return;

      const patient = {
        name: form.get("name"),
        phone: form.get("phone"),
        age: form.get("age"),
        gender: form.get("gender"),
        type: form.get("type"),
        complaint: form.get("complaint"),
        token:
          "#APX-" +
          new Date().getFullYear() +
          "-" +
          Math.floor(1000 + Math.random() * 9000),
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
    });
  }

  function init() {
    initializeTreatmentFilters();
    initializeBeforeAfter();
    initializeDoctors();
    initializeReviews();
    initializeFaq();
    initializeEmi();
    initializeCountersAndReveal();
    initializeEvents();

    const year = $("#year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }
})();