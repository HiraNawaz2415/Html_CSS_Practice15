// Load locations dynamically
const locations = ["Gujrat", "Wazirabad", "Lahore", "Gujranwala", "Karachi", "Sialkot","Fiaslabad","Rawalpindi","Sargoda","BWP"];
const locationDropdown = document.getElementById("location");
locations.forEach(loc => {
  const option = document.createElement("option");
  option.value = loc;
  option.text = loc;
  locationDropdown.appendChild(option);
});

document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const resume = document.getElementById("resume").files[0];
  const experience = document.getElementById("experience").value;
  const location = document.getElementById("location").value;

  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
                      .map(cb => cb.value);

  const fileError = document.getElementById("fileError");
  const skillError = document.getElementById("skillError");
  fileError.textContent = "";
  skillError.textContent = "";

  // File validation
  if (!resume || !/\.(pdf|doc|docx)$/i.test(resume.name)) {
    fileError.textContent = "Please upload a valid PDF or DOC file.";
    return;
  }

  // Skill validation
  if (skills.length < 2) {
    skillError.textContent = "Please select at least 2 skills.";
    return;
  }

  // Show success message
  const successBox = document.getElementById("successMessage");
  successBox.style.display = "block";
  successBox.innerHTML = `
    <h3>Application Submitted Successfully!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills.join(", ")}</p>
    <p><strong>Preferred Location:</strong> ${location}</p>
  `;

  // Optional: Reset the form
  document.getElementById("jobForm").reset();
});
