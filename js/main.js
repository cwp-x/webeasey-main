/* =========================
   FAQ TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector("h4");
    const answer = item.querySelector("p");

    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = answer.style.display === "block";

      // Close all FAQs
      document.querySelectorAll(".faq-item p").forEach((p) => {
        p.style.display = "none";
      });

      // Toggle current
      answer.style.display = isOpen ? "none" : "block";
    });
  });
});

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* =========================
   CONTACT ACTIONS
========================= */

// WhatsApp click
function openWhatsApp() {
  const phoneNumber = "917757081507"; // country code +91
  const message = `Hi, I'm interested in getting a professional website built for my business.
Could you please share the details, pricing, and next steps?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}


