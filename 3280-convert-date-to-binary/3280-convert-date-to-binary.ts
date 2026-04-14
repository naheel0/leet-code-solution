function convertDateToBinary(date: string): string {
    let newDate=date.split("-")
    let year=Number(newDate[0]).toString(2);
    let month=Number(newDate[1]).toString(2);
    let day=Number(newDate[2]).toString(2);
    let result=[year,month,day].join("-");
    return result;
};