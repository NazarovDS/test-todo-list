export const getDate = () => {
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear();
    if (Number(day) < 10) {
        day = '0' + day
    }
    if (Number(month) < 10) {
        month = '0' + month
    }
    return `${day}.${month}.${year}`
}