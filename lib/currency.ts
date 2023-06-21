export const numberToPriceMYR = (number: number) => {
    const options = {
        style: 'currency',
        currency: 'MYR',
    }

    return number.toLocaleString('en-MY', options)
}
