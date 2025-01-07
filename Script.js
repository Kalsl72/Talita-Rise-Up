// Handle form submission
document.getElementById('survey-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    income: document.getElementById('income').value,
    health: document.getElementById('health').value,
    education: document.getElementById('education').value,
    needs: document.getElementById('needs').value,
    goal: document.getElementById('goal').value,
    deadline: document.getElementById('deadline').value,
  };

  // Log data to console (replace with API call in production)
  console.log('Form Data Submitted:', formData);

  // Clear form
  document.getElementById('survey-form').reset();

  // Show success message
  alert('Thank you! Your data has been submitted.');
});
