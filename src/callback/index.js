const date = callback => {
    console.log(new Date)
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 3000)
}

const printDate = dateNow => console.log(dateNow)

date(printDate)