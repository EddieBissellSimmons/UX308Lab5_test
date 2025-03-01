//question 1
function convertFeetToAcres(feet){
    let acres = feet/43560;
    return acres;
}

//question 2
function cutlawn(width, length, cutrate){
    let minutes = (width*length)/cutrate;
    return minutes;
}

//question 3
function airquality(quality){
    let description;
    if (quality <= 50){
        description = "good";
    } else if (quality >= 51 && quality <= 100){
        description = "moderate";
    } else if (quality >= 101 && quality <= 150){
        description = "unhealthy for sensitive groups"
    } else if (quality >= 151 && quality <= 200){
        description = "unhealthy"
    } else if (quality >= 201 && quality <= 300){
        description = "very unhealthy"
    } else if (quality > 300){
        description = "hazardous"
    }
    return description;
}

//question 4
function yeehaw(number){
    let answer;
    if (number % 3 === 0 && number % 7 === 0){
        answer = "Yee Ha"
    } else if (number % 3 === 0){
        answer = "Yee"
    } else if (number % 7 === 0){
        answer = "Ha"
    } else {
        answer = "Nada"
    }
    return answer;
}

/*
"Yee" if number is evenly divisible by 3
"Ha" if number is evenly divisible by 7
"Yee Ha" if number is evenly divisible by both 3 and 7
"Nada" if number is none of the above
*/


//question 5


//exporting all of the functions
export {convertFeetToAcres}
export {cutlawn}
export {airquality}
export {yeehaw}