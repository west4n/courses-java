const btn = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Alert');
// };
// let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
   item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});