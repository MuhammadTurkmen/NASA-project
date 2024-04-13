const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/* 
 new Promise = new Promise((resolve, reject) => {
    resolve(42)
 }) 
 Promise.then((result) => {

 })
 const result = await promise
*/

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("kepler_data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitablePlanets found!`);
        resolve();
      });
  });
}

module.exports = {
  planets: habitablePlanets,
};
