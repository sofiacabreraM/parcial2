export async function getData() {
    try {
        const data = await fetch(`https://catfact.ninja/fact`).then(res =>res.json())
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getData2 () {
    try {
        const data2 = await fetch(`https://cataas.com/#/`).then(res =>res.json())
        console.log(data2)
        return data2
    } catch (error) {
        console.error(error)
    }
}