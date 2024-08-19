const timeConvert = (timeStamp) => {
    const date = new Date(timeStamp);
    const formattedDate = date.toLocaleString();
    return formattedDate;
}

module.exports = {timeConvert};