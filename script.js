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
    // Proceed to the next page
    document.getElementById('page1').style.display = 'none';
    // Redirect to the next page or perform any other action
    // For now, let's just show an alert
    alert("Proceeding to the next page!");
  }
  