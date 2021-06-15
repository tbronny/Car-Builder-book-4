import { getTechnology, setTech } from "./database.js"

const technology = getTechnology()

document.addEventListener("change", (event) => {
    if (event.target.name === "technology") {
        setTech(parseInt(event.target.value))
    }
})

export const Technology = () => {
    let html = "<ul>"

    const listTechology = technology.map((tech) => {
        return `<li>
        <input type="radio" name="technology" value="${tech.id}" /> ${tech.type}
        </li>`
    })
    html += listTechology.join("")
    html += "</ul>"

    return html
}
