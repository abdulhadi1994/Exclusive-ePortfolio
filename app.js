function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_2foa6c7
// service_4r0fsdi
// snl5EmpMrFTSyzJ-3

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    // Loading state
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_4r0fsdi",
      "template_2foa6c7",
      event.target,
      "snl5EmpMrFTSyzJ-3"
    );

    // Success state
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert(
      "An error has occured. Please try again later or contact me at a.hadi94@hotmail.co.uk."
    )
  }
}