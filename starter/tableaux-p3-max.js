/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10.
2. Affichez le tableau.
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau (précédée du message "La plus grande valeur de mon tableau est …").
4. Changez quelques valeurs dans le tableau (par exemple, le 9 en 90) et retestez.

Aide :
- Initialisez une variable 'max' avec la première valeur du tableau.
- Parcourez le tableau à la recherche d'un nombre plus grand que 'max' en commençant au deuxième élément du tableau :
  - Si la valeur courante est supérieure à 'max', elle devient le nouveau 'max'.
- Affichez le résultat.
*/

const nombres = [3, 11, 7, 2, 9, 10];

console.table(nombres);

let max = nombres[0];

for (let i = 0; i < nombres.length; i++) {
    if (max < nombres[i]){
        max = nombres[i];
    }
}
console.log(max)
