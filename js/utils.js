
/**
 * Retourne un élément au hasard dans le array
 * @param {Array} items 
 */
// function array_random(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }

/**
 * Force le navigateur à mettre à jour la balise passée en paramètre
 * @param {HTMLElement} element 
 */
function reflow(element) {
    if (element === undefined) {
        element = document.documentElement
    }
    void (element.offsetHeight)
}