import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener("change", (event) => {
    if (event.target.name === "colors") {
        setColor(parseInt(event.target.value))
    }
})

export const PaintColors = () => {
    let html = "<ul>"

    const listColors = colors.map((color) => {
        return `<li>
        <input type="radio" name="colors" value="${color.id}" /> ${color.type}
        </li>`
    })
    html += listColors.join("")
    html += "</ul>"

    return html
}
