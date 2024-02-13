let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).style.display = 'none';
    currentPage++;
    document.getElementById(`page${currentPage}`).style.display = 'block';
  }
}

function prevPage() {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).style.display = 'none';
    currentPage--;
    document.getElementById(`page${currentPage}`).style.display = 'block';
  }
}