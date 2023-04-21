// common.js
// Perform any common JavaScript actions here

// Example: Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerContainer = document.getElementById('header');
    const xhrHeader = new XMLHttpRequest();
    xhrHeader.open('GET', 'template/header.html', true);
    xhrHeader.onreadystatechange = function() {
      if (xhrHeader.readyState === XMLHttpRequest.DONE && xhrHeader.status === 200) {
        headerContainer.innerHTML = xhrHeader.responseText;
      }
    };
    xhrHeader.send();
  
    // Load footer
    const footerContainer = document.getElementById('footer');
    const xhrFooter = new XMLHttpRequest();
    xhrFooter.open('GET', 'template/footer.html', true);
    xhrFooter.onreadystatechange = function() {
      if (xhrFooter.readyState === XMLHttpRequest.DONE && xhrFooter.status === 200) {
        footerContainer.innerHTML = xhrFooter.responseText;
      }
    };
    xhrFooter.send();
  });
  