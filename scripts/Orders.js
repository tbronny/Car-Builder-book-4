import {
    getOrders,
    getInteriors,
    getTechnology,
    getWheels,
    getColors,
} from "./database.js"

const buildCustomCar = (order) => {
    const colors = getColors()
    const foundColor = colors.find((color) => {
        return color.id === order.colorId
    })
    let totalCost = foundColor.price

    const interiors = getInteriors()
    const foundInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
    })
    totalCost += foundInterior.price

    const technology = getTechnology()
    const foundTech = technology.find((tech) => {
        return tech.id === order.techId
    })
    totalCost += foundTech.price

    const wheels = getWheels()
    const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId
    })

    totalCost += foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })

    return `<li>
    Order ${order.id}: Your custom build will be ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listOrders = orders.map(buildCustomCar)

    html += listOrders.join("")
    html += "</ul>"

    return html
}
