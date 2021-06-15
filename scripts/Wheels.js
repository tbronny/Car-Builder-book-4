import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener("change", (event) => {
    if (event.target.name === "wheels") {
        setWheel(parseInt(event.target.value))
    }
})

export const Wheels = () => {
    let html = "<ul>"

    const listWheels = wheels.map((wheel) => {
        return `<li>
        <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.type}
        </li>`
    })
    html += listWheels.join("")
    html += "</ul>"

    return html
}
