'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = [game.players[0], game.players[1]];
// console.log(players1, players2);
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const [team1, x, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// console.log(team1, x, team2);
// function printGoals(...players) {
//   const arr = [...players];
//   console.log(`${players.length} goals were scored`);
//   console.log(arr);
// }
// printGoals('Burki', 'Schulz', 'Hummels');

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

// let totalOdd = 0;
// for (const odd of Object.values(game.odds)) {
//   totalOdd += odd;
// }
// console.log(totalOdd / Object.values(game.odds).length)

// console.log(game[Object.keys(game.odds)[0]])

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = [...new Set(gameEvents.values())];

// gameEvents.delete(64, '🔶 Yellow card');

// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents) console.log(key, value);

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(text.split('\n'));

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
