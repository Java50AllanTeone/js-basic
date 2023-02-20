export class DataProcessor {
    #url;
    #cities;


    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }


    async getData(latitude, longitude) {
        const responseFromServer =  await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServer.json();
    }

    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        const responseFromServer =  await fetch(`${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}&start_date=${startDate}&end_date=${endDate}`);
        const obj = await responseFromServer.json();
        const arr = obj.hourly.time.map((str, index) => {
            const date = str.split('T');
            const hour = date[1].split(":");
            return {date: date[0], hour: hour[0], temperature: obj.hourly.temperature_2m[index]}
            
        });
        return arr.filter(obj => !(obj.date === startDate && obj.hour < hourFrom || obj.date === endDate && obj.hour > hourTo));
    }


}