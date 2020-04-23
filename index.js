const scoreMax = parseInt(prompt("Veuillez indiquer le score à atteindre"));
const teamCount = parseInt(prompt("Veuillez indiquer le nombre d'équipe"));

let index = 0;
let round = 1;

let teamScores = [];
teamScores.length = teamCount;
teamScores.fill(0);

while (teamScores.every(s => s < scoreMax)) {
    const score = parseInt(prompt("Score obtenu par l'équipe " + (index + 1) + " au tour " + round + " :"));
    teamScores[index] += score;
    console.log(teamScores);
    index = (index + 1) % teamCount;
    if (index === 0) {
        round++;
    }
}

index = (index - 1 + teamCount) % teamCount;
alert("L'équipe gagnante est l'équipe " + (index + 1));

const rank = teamScores.map((x, i) => [i + 1, x]).sort((a, b) => b[1] - a[1]);
for (let i = 0; i < rank.length; i++) {
    alert("L'équipe " + rank[i][0] + " à terminée en position " + (i + 1) + " avec un score de " + rank[i][1]);
}