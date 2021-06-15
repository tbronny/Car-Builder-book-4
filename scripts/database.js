const database = {
    colors: [
        { id: 1, type: "Silver", price: 500 },
        { id: 2, type: "Midnight Blue", price: 650 },
        { id: 3, type: "Firebrick Red", price: 700 },
        { id: 4, type: "Spring Green", price: 450 },
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 50 },
        { id: 2, type: "Charcoal Fabric", price: 50 },
        { id: 3, type: "White Leather", price: 200 },
        { id: 4, type: "Black Leather", price: 300 },
    ],
    technology: [
        { id: 1, type: "Basic Package", price: 135 },
        { id: 2, type: "Navigation Package", price: 905 },
        { id: 3, type: "Visibility Package", price: 675 },
        { id: 4, type: "Ultra Package", price: 1500 },
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 400 },
        { id: 2, type: "17-inch Pair Radial Black", price: 470 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 700 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 850 },
    ],
    customOrders: [],
    orderBuilder: {},
}

export const getColors = () => {
    return database.colors.map((color) => ({ ...color }))
}

export const getInteriors = () => {
    return database.interiors.map((interior) => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technology.map((tech) => ({ ...tech }))
}

export const getWheels = () => {
    return database.wheels.map((wheel) => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map((order) => ({ ...order }))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomBuild = () => {
    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1
    newOrder.id = lastIndex > -1 ? database.customOrders[lastIndex].id + 1 : 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
