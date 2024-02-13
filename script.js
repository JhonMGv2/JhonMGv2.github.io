function confirmProceed() {
    var confirmMessage = confirm("Are you sure you want to proceed?");
    if (confirmMessage) {
      nextPage();
    } else {
      // If the user clicks "Cancel", ask again
      confirmProceed();
    }
  }
  
  function nextPage() {
    // Hide the current page
    document.getElementById('page1').style.display = 'none';
    // Proceed to the next page or perform any other action
    // For now, let's just show an alert
    alert("Proceeding to the next page!");
  }
  