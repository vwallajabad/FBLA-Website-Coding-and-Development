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


function search_filter() {
  const jobCards = document.querySelectorAll(".job_card");
  const selectedFilters = [];
  const noJobsFound = document.createElement('h3');
  noJobsFound.textContent = 'No jobs found';
  noJobsFound.style.display = 'none';

  const locationSelects = ["all_Locations", "austin", "chicago", "dallas", "los_Angeles", "philadelphia", "remote", "saint_Louis", "san_Francisco"];
  const experienceSelects = ["all_experience_levels", "internships", "entry", "mid", "advanced", "executive_Senior_Management"];
  const categorySelects = ["all", "data", "software", "sales", "accounting", "advertising", "human_resources", "other"];

  locationSelects.forEach((selectId) => {
    if (document.getElementById(selectId).checked && !document.getElementById("all_Locations").checked) {
      selectedFilters.push(selectId.replace(/_/g, " ").toLowerCase());
    }
  });

  experienceSelects.forEach((selectId) => {
    if (document.getElementById(selectId).checked && !document.getElementById("all_experience_levels").checked) {
      selectedFilters.push(selectId.replace(/_/g, " ").toLowerCase());
    }
  });

  categorySelects.forEach((selectId) => {
    if (document.getElementById(selectId).checked && !document.getElementById("all").checked) {
      selectedFilters.push(selectId.replace(/_/g, " ").toLowerCase());
    }
  });

  jobCards.forEach((jobCard) => {
    const jobCardText = jobCard.textContent.toLowerCase();
    let isRelevant = true;

    if (selectedFilters.length > 0) {
      isRelevant = selectedFilters.some((filter) => jobCardText.includes(filter));
    }

    jobCard.style.display = isRelevant ? "block" : "none";
  });
  let foundJobs = false;
  jobCards.forEach((jobCard) => {
    const jobCardText = jobCard.textContent.toLowerCase();
    let isRelevant = true;
  
    if (selectedFilters.length >  0) {
      isRelevant = selectedFilters.every((filter) => jobCardText.includes(filter));
    }
  
    jobCard.style.display = isRelevant ? "block" : "none";
  });
  
  if (!foundJobs) {
    const mainContent = document.getElementById('main_content');
    const existingNoJobsFound = document.getElementById('no_jobs_found');
    if (!existingNoJobsFound) {
      const noJobsFound = document.createElement('h1');
      noJobsFound.textContent = 'No jobs found';
      noJobsFound.id = 'no_jobs_found';
      noJobsFound.style.display = 'block';
      noJobsFound.style.width = '600px';
      mainContent.appendChild(noJobsFound);
    } else {
      existingNoJobsFound.style.display = 'block';
      existingNoJobsFound.style.width = '600px';
    }
  } else {
    const existingNoJobsFound = document.getElementById('no_jobs_found');
    if (existingNoJobsFound) {
      existingNoJobsFound.style.display = 'none';
    }
  }
}