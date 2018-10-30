
function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const FireWarning = hazardWarningCreator('Fire on the Road');
const winterWarning = hazardWarningCreator('Snow on the Road');

rocksWarning('Main St and Pacific Ave');
FireWarning('Elm Street');
winterWarning('hakhak street'); 