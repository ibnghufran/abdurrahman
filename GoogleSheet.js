const scriptURL = 'https://script.google.com/macros/s/AKfycbwpkZ1kIGeYsD9v5GjQXz1vmYBh633FR3XlZCg2nUPbGOFTf7qyUVNWyO2CLyoXa2OCQg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form has been submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})