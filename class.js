class Player {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        // console.log('calling the constructor method',name)
    }
     goal() {
        console.log('score a goal')
    }
    getTeamName() {
        return 'Barca'
    }
}


const player1 = new Player('tom',30)
const player2 = new Player('jery',40)
console.log(player1 instanceof Player);
console.log(player2);

// player1.goal()
// console.log(player1);
