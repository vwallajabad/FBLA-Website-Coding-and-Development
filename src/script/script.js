function search_bar(id) {
  const inputElement = document.getElementById(id);
  const jobCards = document.querySelectorAll(".job_card");

  inputElement.addEventListener("input", () => {
    const searchTerm = inputElement.value.toLowerCase();

    jobCards.forEach((jobCard) => {
      const jobCardText = jobCard.textContent.toLowerCase();

      if (jobCardText.includes(searchTerm)) {
        jobCard.style.display = "block";
      } else {
        jobCard.style.display = "none";
      }
    });
  });
}

