// document.addEventListener('scroll', () => {
//     const button = document.querySelector('#back-to-top');

//     if (window.scrollY > 550) {
//         button.classList.add('active');
//     } else {
//         button.classList.remove('active');
//     }
// });

function toggleElementsById(id) {
    const ids = typeof id !== 'string' ? [ ...id ] : [ id ];

    for (id of ids) {
        const element = document.getElementById(id);

        element.classList.toggle('active');
    }
}