const margins = [8, 72, 138, 205, 269];
const circle = document.getElementById('circle');
const icons = [0,1,2,3,4].map(i => document.getElementById('icon'+i));
const divs = document.querySelectorAll('.icon div');

function navClick(idx) {
   circle.style.marginLeft = margins[idx] + 'px';
   icons.forEach((img, i) => img.style.filter = i === idx ? 'invert()' : 'none');
   divs.forEach((div, i) => div.classList.toggle('active', i === idx));
}

navClick(2);