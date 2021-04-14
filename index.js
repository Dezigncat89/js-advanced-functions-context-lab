//Array Map
let dataEmployees = [
          {firstName: "Thor", lastName: "Odinsson", title: "Electrical Engineer", hrsWork: 45},
          {firstName: "Loki", lastName: "Laufeysson-Odinsson", title: "HR Representative", hrsWork: 35},
          {firstName: "Natalia", lastName: "Romanov", title: "CEO", hrsWork: 150},
          {firsName: "Darcey", lastName: "Lewis", title: "Intern", hrsWork: 15},
          {firstName: "Jarvis", lastName: "Stark", title: "CIO", hrsWork: 125},
          {firstName: "Anthony", lastName: "Stark", title: "Angel Investor", hrsWork: 300},
          {firstName: "Byron", lastName: "Poodle", title: "Mascot", hrsWork: 3},
          {firstName: "Julius", lastName: "Caesar", title: "General", hrsWork: 27},
          {firstName: "Rafiki", lastName: "", title: "Aide", hrsWork: 10},
          {firstName: "Simba", lastName: "", title: "King", hrsWork: 100}
        ];
const totalWages = dataEmployees.map(unit => {
    const container = {};
   return unit + container.wagesEarned = hrsWork * 27;
  });

console.log(`Total Wages for the week ${this.totalWages`});

//Array Reduce
let totalSum = dataEmployees.reduce(function (hours, cost) {
    const cost = 27;
    return hours + cost * cost.hrsWork;
},0);

console.log(`Total Cost for Payroll ${this.totalSum`});

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
