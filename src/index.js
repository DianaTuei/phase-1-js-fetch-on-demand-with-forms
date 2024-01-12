const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const input = document.querySelector('#searchByID')
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then (response => response.json())
    .then (data => {
        const title = document.querySelector('h4')
        const summary = document.querySelector('p')

        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);