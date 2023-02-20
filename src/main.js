import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";

const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);


async function displayTemperatures() {
    const data = await dataProcessor.getTemperatureData("Rehovot", "2023-02-25", "2023-02-28", 5, 5);
    console.log(data);
}

displayTemperatures();