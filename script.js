document.getElementById("youth-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const qualification = document.getElementById("qualification").value;
  const state = document.getElementById("state").value;
  const dob = document.getElementById("dob").value;

  // Create a youth object
  const youth = {
    fullName,
    email,
    phone,
    qualification,
    state,
    dob
  };

  // Save youth data to local storage or a database
  const youthsList = JSON.parse(localStorage.getItem("youths")) || [];
  youthsList.push(youth);
  localStorage.setItem("youths", JSON.stringify(youthsList));

  // Clear the form
  document.getElementById("youth-form").reset();

  // Optionally, show an alert or message to confirm successful submission
  alert("Your data has been submitted successfully!");
});


