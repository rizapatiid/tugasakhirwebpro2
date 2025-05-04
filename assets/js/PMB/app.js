// Initialize variables
let currentStep = 1;
let num1, num2, correctAnswer;
let registrationNumber;

// Populate year dropdown
function populateYears() {
  const yearSelect = document.getElementById("tahunLulus");
  const currentYear = new Date().getFullYear();

  for (let i = currentYear; i >= currentYear - 10; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
}

// Generate captcha
function generateCaptcha() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 + num2;
  document.getElementById("captchaQuestion").textContent = `${num1} + ${num2}`;
  document.getElementById("captchaAnswer").value = "";
}

// Generate registration number
function generateRegistrationNumber() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `REG-${year}${month}-${randomNum}`;
}

// Format date
function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
}

// Navigate between steps
function goToStep(step) {
  // Hide all steps
  document.querySelectorAll(".step-content").forEach((el) => {
    el.classList.remove("active");
  });

  // Show current step
  document.getElementById(`step-${step}`).classList.add("active");

  // Update step indicators
  document.querySelectorAll(".step-indicator").forEach((el, index) => {
    el.classList.remove("active", "completed");
    if (index + 1 === step) {
      el.classList.add("active");
    } else if (index + 1 < step) {
      el.classList.add("completed");
    }
  });

  // Update progress bar
  const progressPercentage = ((step - 1) / 3) * 100;
  document.getElementById("progress-bar-fill").style.width =
    `${progressPercentage}%`;

  // Update current step
  currentStep = step;

  // If on step 4, update summary
  if (step === 4) {
    updateSummary();
  }
}

// Validate current step
function validateStep(step) {
  let isValid = true;
  const requiredFields = document.querySelectorAll(`#step-${step} [required]`);

  requiredFields.forEach((field) => {
    if (!field.value) {
      field.classList.add("border-red-500");
      isValid = false;
    } else {
      field.classList.remove("border-red-500");
    }
  });

  if (!isValid) {
    alert("Silakan lengkapi semua field yang wajib diisi.");
  }

  return isValid;
}

// Update summary
function updateSummary() {
  // Personal data
  document.getElementById("summary-nama").textContent =
    document.getElementById("nama").value;

  const tempatLahir = document.getElementById("tempatLahir").value;
  const tanggalLahir = document.getElementById("tanggalLahir").value
    ? new Date(
        document.getElementById("tanggalLahir").value,
      ).toLocaleDateString("id-ID")
    : "";
  document.getElementById("summary-ttl").textContent =
    `${tempatLahir}, ${tanggalLahir}`;

  const jenisKelamin = document.querySelector(
    'input[name="jenisKelamin"]:checked',
  );
  document.getElementById("summary-jenisKelamin").textContent = jenisKelamin
    ? jenisKelamin.value
    : "-";

  document.getElementById("summary-agama").textContent =
    document.getElementById("agama").value;
  document.getElementById("summary-wargaNegara").textContent =
    document.getElementById("wargaNegara").value;
  document.getElementById("summary-alamat").textContent =
    document.getElementById("alamat").value;
  document.getElementById("summary-telepon").textContent =
    document.getElementById("telepon").value;
  document.getElementById("summary-email").textContent =
    document.getElementById("email").value;

  // Parent data
  document.getElementById("summary-namaOrtu").textContent =
    document.getElementById("namaOrtu").value;
  document.getElementById("summary-teleponOrtu").textContent =
    document.getElementById("teleponOrtu").value;
  document.getElementById("summary-pekerjaanOrtu").textContent =
    document.getElementById("pekerjaanOrtu").value;
  document.getElementById("summary-alamatOrtu").textContent =
    document.getElementById("alamatOrtu").value;

  // Education data
  document.getElementById("summary-asalSekolah").textContent =
    document.getElementById("asalSekolah").value;
  document.getElementById("summary-tahunLulus").textContent =
    document.getElementById("tahunLulus").value;
  document.getElementById("summary-jurusanSekolah").textContent =
    document.getElementById("jurusanSekolah").value || "-";
  document.getElementById("summary-nilaiRataRata").textContent =
    document.getElementById("nilaiRataRata").value || "-";

  const programStudi = document.querySelector(
    'input[name="programStudi"]:checked',
  );
  document.getElementById("summary-programStudi").textContent = programStudi
    ? programStudi.value
    : "-";
}

// Fill print data
function fillPrintData() {
  const today = new Date();
  const formattedDate = formatDate(today);

  // Set registration details
  document.getElementById("print-noPendaftaran").textContent =
    registrationNumber;
  document.getElementById("print-tanggalPendaftaran").textContent =
    formattedDate;
  document.getElementById("printDate").textContent =
    `Dicetak pada: ${formattedDate}`;
  document.getElementById("registrationNumber").textContent =
    registrationNumber;

  // Set personal data
  document.getElementById("print-nama").textContent =
    document.getElementById("nama").value;
  document.getElementById("print-ttl").textContent =
    `${document.getElementById("tempatLahir").value}, ${new Date(document.getElementById("tanggalLahir").value).toLocaleDateString("id-ID")}`;

  const jenisKelamin = document.querySelector(
    'input[name="jenisKelamin"]:checked',
  );
  document.getElementById("print-jenisKelamin").textContent = jenisKelamin
    ? jenisKelamin.value
    : "-";

  document.getElementById("print-agama").textContent =
    document.getElementById("agama").value;
  document.getElementById("print-wargaNegara").textContent =
    document.getElementById("wargaNegara").value;
  document.getElementById("print-alamat").textContent =
    document.getElementById("alamat").value;
  document.getElementById("print-telepon").textContent =
    document.getElementById("telepon").value;
  document.getElementById("print-email").textContent =
    document.getElementById("email").value;

  // Set parent data
  document.getElementById("print-namaOrtu").textContent =
    document.getElementById("namaOrtu").value;
  document.getElementById("print-teleponOrtu").textContent =
    document.getElementById("teleponOrtu").value;
  document.getElementById("print-pekerjaanOrtu").textContent =
    document.getElementById("pekerjaanOrtu").value;
  document.getElementById("print-alamatOrtu").textContent =
    document.getElementById("alamatOrtu").value;

  // Set education data
  document.getElementById("print-asalSekolah").textContent =
    document.getElementById("asalSekolah").value;
  document.getElementById("print-tahunLulus").textContent =
    document.getElementById("tahunLulus").value;
  document.getElementById("print-jurusanSekolah").textContent =
    document.getElementById("jurusanSekolah").value || "-";
  document.getElementById("print-nilaiRataRata").textContent =
    document.getElementById("nilaiRataRata").value || "-";

  const programStudi = document.querySelector(
    'input[name="programStudi"]:checked',
  );
  document.getElementById("print-programStudi").textContent = programStudi
    ? programStudi.value
    : "-";
}

// Print function
function printRegistration() {
  fillPrintData();
  window.print();
}

// Saving to spreadsheet (hidden from user)
async function saveToSpreadsheet() {
  try {
    // Show loading overlay
    document.getElementById("loadingOverlay").classList.add("active");

    // Prepare form data
    const formData = {
      nama: document.getElementById("nama").value,
      tempatLahir: document.getElementById("tempatLahir").value,
      tanggalLahir: document.getElementById("tanggalLahir").value,
      jenisKelamin:
        document.querySelector('input[name="jenisKelamin"]:checked')?.value ||
        "",
      agama: document.getElementById("agama").value,
      wargaNegara: document.getElementById("wargaNegara").value,
      alamat: document.getElementById("alamat").value,
      telepon: document.getElementById("telepon").value,
      email: document.getElementById("email").value,
      namaOrtu: document.getElementById("namaOrtu").value,
      teleponOrtu: document.getElementById("teleponOrtu").value,
      pekerjaanOrtu: document.getElementById("pekerjaanOrtu").value,
      alamatOrtu: document.getElementById("alamatOrtu").value,
      asalSekolah: document.getElementById("asalSekolah").value,
      tahunLulus: document.getElementById("tahunLulus").value,
      jurusanSekolah: document.getElementById("jurusanSekolah").value,
      nilaiRataRata: document.getElementById("nilaiRataRata").value,
      programStudi:
        document.querySelector('input[name="programStudi"]:checked')?.value ||
        "",
    };

    // Send data to PHP API endpoint
    const response = await fetch("/save_registration.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status !== "success") {
      throw new Error(result.message);
    }

    // Set registration number from response
    registrationNumber = result.registrationNumber;

    // Hide loading overlay
    document.getElementById("loadingOverlay").classList.remove("active");

    return result;
  } catch (error) {
    // Hide loading overlay
    document.getElementById("loadingOverlay").classList.remove("active");

    // Show error message
    alert("Gagal menyimpan data: " + error.message);
    console.error("Error saving data:", error);

    throw error;
  }
}

// Simulate saving to spreadsheet (hidden from user)
async function simulateSavingToSpreadsheet() {
  return saveToSpreadsheet();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Initialize
  populateYears();
  generateCaptcha();

  // Step navigation
  document.getElementById("next-1").addEventListener("click", function () {
    if (validateStep(1)) {
      goToStep(2);
    }
  });

  document.getElementById("prev-2").addEventListener("click", function () {
    goToStep(1);
  });

  document.getElementById("next-2").addEventListener("click", function () {
    if (validateStep(2)) {
      goToStep(3);
    }
  });

  document.getElementById("prev-3").addEventListener("click", function () {
    goToStep(2);
  });

  document.getElementById("next-3").addEventListener("click", function () {
    if (validateStep(3)) {
      goToStep(4);
    }
  });

  document.getElementById("prev-4").addEventListener("click", function () {
    goToStep(3);
  });

  // Same address checkbox
  document
    .getElementById("sameAddress")
    .addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("alamatOrtu").value =
          document.getElementById("alamat").value;
      } else {
        document.getElementById("alamatOrtu").value = "";
      }
    });

  // Refresh captcha
  document
    .getElementById("refreshCaptcha")
    .addEventListener("click", generateCaptcha);

  // Submit form
  document.getElementById("submit-form").addEventListener("click", function () {
    const userAnswer = parseInt(document.getElementById("captchaAnswer").value);

    if (isNaN(userAnswer)) {
      alert("Silakan jawab captcha terlebih dahulu.");
      return;
    }

    if (userAnswer === correctAnswer) {
      // Show terms and conditions
      document.getElementById("termsModal").classList.remove("hidden");
    } else {
      // Show error with animation
      const captchaInput = document.getElementById("captchaAnswer");
      captchaInput.classList.add("border-red-500");
      captchaInput.animate(
        [
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(0)" },
        ],
        {
          duration: 300,
          iterations: 1,
        },
      );

      setTimeout(() => {
        captchaInput.classList.remove("border-red-500");
      }, 1500);

      generateCaptcha();
    }
  });

  // Terms modal
  document.getElementById("agreeTerms").addEventListener("change", function () {
    document.getElementById("confirmTerms").disabled = !this.checked;
  });

  document
    .getElementById("closeTermsModal")
    .addEventListener("click", function () {
      document.getElementById("termsModal").classList.add("hidden");
    });

  document.getElementById("cancelTerms").addEventListener("click", function () {
    document.getElementById("termsModal").classList.add("hidden");
  });

  document
    .getElementById("confirmTerms")
    .addEventListener("click", async function () {
      document.getElementById("termsModal").classList.add("hidden");

      // Simulate saving to spreadsheet (hidden from user)
      await simulateSavingToSpreadsheet();

      // Set registration number in success modal
      document.getElementById("registrationNumber").textContent =
        registrationNumber;

      // Show success modal
      document.getElementById("successModal").classList.remove("hidden");
    });

  // Success modal
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("successModal").classList.add("hidden");
    document.getElementById("registrationForm").reset();
    generateCaptcha();
    goToStep(1);
  });

  // Print button
  document
    .getElementById("printButton")
    .addEventListener("click", printRegistration);
});
