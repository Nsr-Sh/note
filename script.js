// variables

const box = document.querySelector('#main .container'),
  stickyNote = document.querySelectorAll('.stickynotes'),
  title = document.querySelectorAll('.stickynotes>input'),
  text = document.querySelectorAll('.stickynotes>textarea'),
  palette = document.querySelectorAll('.colorpalette'),
  iconPalette = document.querySelectorAll('.fa-palette'),
  iconEdit = document.querySelectorAll('.fa-pencil'),
  iconNew = document.querySelectorAll('.fa-check'),
  iconDelete = document.querySelectorAll('.fa-trash-can');

// event: open colorpalettes
iconPalette.forEach(item => item.addEventListener('click', open))

function open() {
  let ele = this.parentElement.previousElementSibling;
  if (ele.classList.contains('show')) {
    ele.classList.remove('show')
  } else {
    ele.classList.add('show')
  };
}