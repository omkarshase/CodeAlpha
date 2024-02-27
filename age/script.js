function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultContainer = document.getElementById('result');
  
    const dob = new Date(dobInput.value);
    const currentDate = new Date();
  
    // Calculate age
    const ageInMilliseconds = currentDate - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; // average days in a month
    const ageInYears = ageInDays / 365.25; // average days in a year
  
    const ageObject = {
      years: Math.floor(ageInYears),
      months: Math.floor(ageInMonths % 12),
      days: Math.floor(ageInDays % 30.44),
    };
  
    // Display the result
    resultContainer.innerHTML = `
      <div>Your age is:</div>
      <div>${ageObject.years} years, ${ageObject.months} months, ${ageObject.days} days</div>
    `;
  }
  