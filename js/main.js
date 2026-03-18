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

   /* =============================================
   MOBILE HORIZONTAL SCROLL FIX
   Add this to the bottom of main.css
   ============================================= */

/* Root fix — prevent ANY element from causing overflow */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

/* Hero grid bg can bleed outside — clip it */
.hero {
  overflow: hidden;
}

/* Contact section glow blob is 700px wide — clips on mobile */
.contact-section {
  overflow: hidden;
}

/* Stat cards hover shifts them right — can cause overflow on small screens */
@media (max-width: 768px) {
  .stat-card:hover {
    transform: translateY(-3px); /* override the translateX */
  }

  .faq-item:hover {
    transform: none;
  }

  /* Niche grid shouldn't overflow its container */
  .niche-grid {
    width: 100%;
  }

  /* Pricing card padding can overflow on tiny screens */
  .pricing-card {
    box-sizing: border-box;
    width: 100%;
  }

  /* Footer links row can overflow if items are wide */
  .footer-inner {
    width: 100%;
  }
}

/* Theme modal background blur can sometimes trigger scroll */
.theme-modal {
  overflow: hidden;
}

}


