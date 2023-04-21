// homepage.js
// Script for handling button clicks on homepage.html

// Get the Seller button element
const sellerBtn = document.getElementById('seller-btn');

// Add click event listener to Seller button
sellerBtn.addEventListener('click', function() {
  // Redirect to Seller page
  window.location.href = 'sellers/sellers_login.html';
});

// Get the Customer button element
const customerBtn = document.getElementById('customer-btn');

// Add click event listener to Customer button
customerBtn.addEventListener('click', function() {
  // Redirect to Customer page
  window.location.href = 'customer/customer_login.html';
});
