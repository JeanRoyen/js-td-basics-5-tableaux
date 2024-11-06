/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */

// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine

let semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau

console.log(semaine[0]);
console.log(semaine[6]);


// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine

console.log(semaine.length);

// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.

semaine[5] = "saturday";
console.log(semaine[5]);
let jourFerie = semaine[6];
console.log(jourFerie);
semaine.push("dimanche2");
console.table(semaine)

// 5. Un tableau peut contenir des données de différents types
// 6. Méthodes associées à un tableau
// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits
