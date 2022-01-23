const inputbox = document.querySelector('.input_list input');
const submitbtn = document.querySelector('.input_list button');
const todo = document.querySelector('.list_work');
const deleteAll = document.querySelector('.clear');

inputbox.onkeyup = () => {
  let userdata = inputbox.value;
  if (userdata.trim() != 0) {
    submitbtn.classList.add('active');
  } else {
    submitbtn.classList.remove('active');
  }
};

submitbtn.onclick = () => {
  let userdata = inputbox.value;
  let getlocalstorage = localStorage.getItem('newword');
  if (getlocalstorage == null) {
    listarr = [];
  } else {
    listarr = JSON.parse(getlocalstorage);
  }
  if (userdata.length != 0) {
    listarr.push(userdata);
  } else {
    alert('There is No task');
  }
  localStorage.setItem('newword', JSON.stringify(listarr));
  showlist();
};

function showlist() {
  let getlocalstorage = localStorage.getItem('newword');
  if (getlocalstorage == null) {
    listarr = [];
  } else {
    listarr = JSON.parse(getlocalstorage);
  }
  const pendingNumb = document.querySelector('.pendingnum');
  pendingNumb.textContent = listarr.length;
  let newli = '';
  listarr.forEach((element, index) => {
    newli += `<li class = "list">${element}<span onclick ="delete_list(${index})";><button class = "delete_btn"><i class = "fas fa-trash dtrash"></i></button></span></li>`;
  });
  todo.innerHTML = newli;
  inputbox.value = '';
}
function delete_list(index) {
  let getlocalstorage = localStorage.getItem('newword');
  listarr = JSON.parse(getlocalstorage);
  listarr.splice(index, 1);
  localStorage.setItem('newword', JSON.stringify(listarr));
  showlist();
}

deleteAll.onclick = () => {
  listarr = [];
  localStorage.setItem('newword', JSON.stringify(listarr));
  showlist();
};
