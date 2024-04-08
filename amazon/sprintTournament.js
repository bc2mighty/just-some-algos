function getMaximumPoints(k, days) {
    let currentIndex = 0, nextSprint = days[currentIndex], counter = nextSprint - 1, trainingDays = []
    
    while(currentIndex < days.length) {
        if(counter < 0) {
            currentIndex++
            if(currentIndex == days.length) break
            nextSprint = days[currentIndex]
            counter = nextSprint - 1
        }
        trainingDays.push({day: nextSprint - counter, sprint: nextSprint})
        counter--
    }
    
    const trainingDaysSum = trainingDays.reduce((acc, obj) => acc + obj.day, 0);
    let totalSum = 0, trainingDayCounter = 0;
    for(let i = 0;i < k;i++) {
        totalSum += trainingDays[i].day;
    }
    let maxPoint = totalSum;
    console.log(totalSum);

    for(let i = k;i < trainingDays.length;i++) {
        totalSum = totalSum + trainingDays[i].day - trainingDays[trainingDayCounter].day;
        console.log(trainingDayCounter, i, totalSum);
        if(totalSum > maxPoint){ 
            maxPoint = totalSum;
        }
        trainingDayCounter++
    }
    console.log(trainingDays, maxPoint);
}

// getMaximumPoints(4, [2,3,2])
getMaximumPoints(8, [7,4,6,3,5])
// getMaximumPoints(2, [1,1])