const input = document.querySelector("input")
const buttonElement = document.querySelector("button")
const divElement = document.querySelector(".div")

buttonElement.onclick = (e) => {
  e.preventDefault()

  const number = Number(input.value)

  if (number) {
    const ulElement = document.createElement("ul")
    divElement.appendChild(ulElement)
    for (let i = 1; i <= 10; i++) {
      const newElementLi = document.createElement("li")
      newElementLi.innerHTML = `${number} x ${i} = ${number * i}`
      if (Array.from(divElement.children).length > 1) {
        divElement.removeChild(divElement.firstChild)
      }
      ulElement.appendChild(newElementLi)
    }
  }
}
