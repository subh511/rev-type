

type Employee = {
    name:string,
    date: Date,
}

type Manager = {
    name: string,
    occupation: string
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name:"samrat",
    date: new Date(),
    occupation:"Software Developer"
}

console.log(teamLead)