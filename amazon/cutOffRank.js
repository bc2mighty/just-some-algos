function countLevelUpPlayers(cutOffRank, num, scores) {
    let uniqueScores = [...new Set(scores)], scoresObj = {}, scoreLen = scores.length;
    if(uniqueScores[0] < uniqueScores[uniqueScores.length - 1]) uniqueScores = uniqueScores.reverse();

    for(let i = 0;i < num;i++) {
        scores[i] in scoresObj
            ? scoresObj[scores[i]] += 1
            : scoresObj[scores[i]] = 1
    }

    let currentindex = 0, rankCount = scoresObj[uniqueScores[currentindex]], ranks = [], currentRank = 1;
    while(scoreLen > 0) {
        if(!rankCount){
            currentindex += 1;
            rankCount = scoresObj[uniqueScores[currentindex]]
            currentRank = ranks.length + 1;
        }
        if(currentRank > cutOffRank) break;
        ranks.push(currentRank)
        rankCount--;
        scoreLen--;
    }
    return ranks.length;
}

let ranks = countLevelUpPlayers(2, 5, [100, 90, 80, 70, 60])
console.log(ranks);
ranks = countLevelUpPlayers(4, 5, [100, 100, 80, 70, 60])
console.log(ranks);
ranks = countLevelUpPlayers(3, 4, [100, 50, 50, 25 ])
console.log(ranks);
ranks = countLevelUpPlayers(4, 5, [2,2,3,4,5])
console.log(ranks);