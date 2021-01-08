export function prettyDate(date) {
    
    const dateObj = new Date(date + 'T00:00:00');
    
    const weekDay = dateObj.toLocaleString('en-us', {  weekday: 'long' });
    const month = dateObj.getMonth() +1;
    const day = dateObj.getDate();
    return `${weekDay} ${month}/${day}`
}

export function wateringDate(date) {
    
    let t = new Date();
    const today = new Date(t.getFullYear(),t.getMonth(),t.getDate());
    
    const wateringDate = new Date(date + 'T00:00:00');

    const weekDay = wateringDate.toLocaleString('en-us', {  weekday: 'long' });
    const month = wateringDate.getMonth() +1;
    const day = wateringDate.getDate();
    const prettyDate = `${weekDay} ${month}/${day}`

    const isToday = today.toString() === wateringDate.toString() ? true : false;
    
    return isToday ? 'Today' : prettyDate;
}