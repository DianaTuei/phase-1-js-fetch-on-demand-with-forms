const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const input = document.querySelector('input#searchByID')
    console.log(input.value)
    fetch(`http://localhost:3000/movies`)
    .then (response => response.json())
    .then (data => {
        console.log(data)
        const firstObject = data.filter(obj => obj.id == input.value)
        console.log (firstObject.length)

        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        firstObject.forEach(x => {
          console.log(x)
      
        title.innerText = x.title
        summary.innerText = x.summary
        })
       
    })
  })
}

document.addEventListener('DOMContentLoaded', init);