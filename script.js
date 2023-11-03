const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  let sidebar = document.querySelector('.sidebar')
  btn.classList.toggle('active')
  if(sidebar.classList.contains('hide')) {
    sidebar.classList.add('show')
    sidebar.classList.remove('hide')
  }else {
    sidebar.classList.add('hide')
    sidebar.classList.remove('show')
  }
})