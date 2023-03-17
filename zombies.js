'use strict';

function infection(tree, age) {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].age >= age && !tree[i].isImmuned) {
            tree[i].infectionName = (age > 0 ? "32" : "A");
        }
        infection(tree[i].friends, age);
    }
}

function zombie32(tree) {
    bZombie(tree, 32);
    aZombie(tree, 32);
}


function aZombie(tree, age = 0) {
    if (tree.filter(p => p.infectionName).length > 0) {
        infection(tree, age);
    } else {
        for (let i = 0; i < tree.length; i++) {
            if (tree[i].friends.length > 0) {
                aZombie(tree[i].friends, age);
            }
        }
    }
}

function bZombie(tree, age = 0) {
    var res = false;
    for (let i = 0; i < tree.length; i++) {
        if (bZombie(tree[i].friends, age) || tree[i].infectionName == (age > 0 ? "32" : "B")) {
            res = true;
            for (let y = 0; y < tree.length; y++) {
                if (tree[y].age >= age && !tree[i].isImmuned) {
                    tree[y].infectionName = age > 0 ? "32" : "B";
                }
            }
        }
    }
    return res;
}

function cZombie(tree) {
    if (tree.filter(p => p.infectionName).length > 0) {
        for (let i = 0; i < tree.length; i++) {
            if (i % 2 == 0 && !tree[i].isImmuned) {
                tree[i].infectionName = "C";
            }
        }
    }
    for (let i = 0; i < tree.length; i++) {
        cZombie(tree[i].friends);
    }
}

function ultimeZombie(tree, isFirst = false) {
    let res = false;
    for (let i = 0; i < tree.length; i++) {
        if (ultimeZombie(tree[i].friends)) {
            res = true;
            if (isFirst && !tree[i].isImmuned) {
                tree[i].infectionName = "U";
            }
        }
    }
    return tree.filter(p => p.infectionName == "U").length > 0 || res;
}

function a1Vaccin(tree) {
    for (let i = 0; i < tree.length; i++) {
        a1Vaccin(tree[i].friends);
        if (tree[i].age <= 30) {
            if(tree[i].infectionName == "32" || tree[i].infectionName == "A"){
                tree[i].infectionName = "";
            }
            tree[i].isImmuned = true;
        }
    }
}

function b1Vaccin(tree) {
    for (let i = 0; i < tree.length; i++) {
        b1Vaccin(tree[i].friends);
        if (i % 2 == 0) {
            tree[i].isDead = true;
        }else if(tree[i].infectionName == "B" || tree[i].infectionName == "C"){
            tree[i].infectionName = false;
        }
    }
}

function ultimeVaccin(tree) {
    for (let i = 0; i < tree.length; i++) {
        ultimeVaccin(tree[i].friends);
        if(tree[i].infectionName == "U"){
            tree[i].infectionName = "";
            tree[i].isImmuned = true;
        }
    }
}

let population = [];

//Initialisation des données
//Mettre dans infectionName : a pour zombieA, b pour zombieB, 32 pour zombie32 et U pour zombie ultime

function resetPopulation() {
    population = [
        {
            name: "v",
            infectionName: "",
            age: 20,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "judy",
                    infectionName: "",
                    age: 21,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "eve",
                    infectionName: "",
                    age: 36,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "saburo",
                            infectionName: "",
                            age: 45,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                }
            ]
        },
        {
            name: "david",
            infectionName: "",
            age: 20,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "rebecca",
                    infectionName: "",
                    age: 15,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "adam",
                    infectionName: "",
                    age: 118,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "gloria",
                    infectionName: "",
                    age: 55,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "lucy",
                    infectionName: "",
                    age: 20,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                }
            ]
        },
        {
            name: "rogue",
            infectionName: "",
            age: 88,
            isImmuned: false,
            isDead: false,
            friends: [
                {
                    name: "panam",
                    infectionName: "",
                    age: 22,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "murphy",
                    infectionName: "",
                    age: 30,
                    isImmuned: false,
                    isDead: false,
                    friends: []
                },
                {
                    name: "johnny",
                    infectionName: "",
                    age: 37,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "alt",
                            infectionName: "",
                            age: 32,
                            isImmuned: false,
                            isDead: false,
                            friends: []
                        }
                    ]
                },
                {
                    name: "t-bug",
                    infectionName: "A",
                    age: 26,
                    isImmuned: false,
                    isDead: false,
                    friends: [
                        {
                            name: "jackie",
                            infectionName: "",
                            age: 24,
                            isImmuned: false,
                            isDead: false,
                            friends: [
                                {
                                    name: "viktor",
                                    infectionName: "",
                                    age: 78,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                },
                                {
                                    name: "dexter",
                                    infectionName: "",
                                    age: 56,
                                    isImmuned: false,
                                    isDead: false,
                                    friends: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        
    ]
}

//liste des scénarios

resetPopulation();
aZombie(population);
console.log(JSON.stringify(population));

/*
resetPopulation();
startZombieB(population);
console.log(JSON.stringify(population));

resetPopulation();
startZombie32(population);
console.log(JSON.stringify(population));

resetPopulation();
startZombieC(population);
console.log(JSON.stringify(population));

resetPopulation();
startUltimateZombie(population, true);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinA1(population);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinB1(population);
console.log(JSON.stringify(population));

resetPopulation();
startVaccinUltime(population);
console.log(JSON.stringify(population));
*/