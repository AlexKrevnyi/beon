window.addEventListener("load", function() {
  const form = document.getElementById('main-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thank you for submitting your information. We will reach out to you shortly with an offer");
    })
  });
});

