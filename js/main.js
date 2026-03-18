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




