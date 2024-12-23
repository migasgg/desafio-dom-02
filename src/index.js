const input = document.querySelector("input")
const ulElement = document.querySelector("ul")
const buttonElement = document.querySelector("button")

buttonElement.onclick = (e) => {
  e.preventDefault()
  const number = input.value
  if (number) {
    for (let i = 1; i <= 10; i++) {
      const newElementLi = document.createElement("li")
      const element = (10)[i]
      newElementLi.innerHTML = number * i
      ulElement.appendChild(newElementLi)
    }
  }
}
