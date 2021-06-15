import { PaintColors } from "./PaintColors.js"
import { Interiors } from "./Interiors.js"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomBuild } from "./database.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        addCustomBuild()
    }
})

export const Cars = () => {
    return `
        <h1>Cars R Us</h1>
        
        <article class="choices">
            <section class="choices_colors options">
                <h2>Colors</h2>
                ${PaintColors()}

            </section>
            <section class="choices_interiors options">
                <h2>Interiors</h2>
                ${Interiors()}

            </section>
            <section class="choices_packages options">
                <h2>Packages</h2>
                ${Technology()}

            </section>
            <section class="choices_wheels options">
                <h2>Wheels</h2>
                ${Wheels()}

            </section>    
        </article>
        <article>
            <button id="orderButton">Create Custom Build</button>
        </article>

        <article class="customOrders">
            <h2>Price Quote</h2>
            ${Orders()}
        
        </article>
    `
}
