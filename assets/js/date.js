const date = new Date();
const year = date.getFullYear();

document.getElementById(
  "copyrights"
).innerHTML = `Copyright &copy; ${year} Gonçalo Sousa`;
