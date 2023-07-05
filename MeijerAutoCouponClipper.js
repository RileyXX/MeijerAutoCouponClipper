// Function to display a modal with the specified content
function showModal(content) {
  // Clear any existing modal HTML
  const existingModal = document.getElementById('coupon-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create the modal container
  const modal = document.createElement('div');
  modal.setAttribute('id', 'coupon-modal');
  modal.innerHTML = `
    <div class="coupon-modal__content">
      ${content}
      <div><button class="coupon-modal__close-btn">Close</button></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Style the modal
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #333333;
  `;

  // Add event listener to remove the modal when the "Close" button is clicked
  const closeBtn = document.querySelector('.coupon-modal__close-btn');
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });
}

// Expand the coupon categories box
const buttons = document.querySelectorAll('.coupon-filter__accordion-heading');
buttons.forEach(button => {
  if (button.textContent.includes("Categories") && button.getAttribute('aria-expanded') === 'false') {
    button.click();
  }
});

// Get all the filter elements and loop through them to check if any of them contains a category
const filterElements = document.querySelectorAll('.coupon-filter__checkbox-wrapper .mperks-checkbox__container');
let checkedCategories = false;
for (const element of filterElements) {
  if (categories.some((category) => element.textContent.includes(category))) {
    element.click();
    checkedCategories = true;
  }
}

// If there are coupons available in selected categories, clip them and show a modal with the number of clipped coupons
if (checkedCategories) {
  // Create a modal indicating that coupons are being clipped
  showModal('<p>Clipping coupons...</p>');

  setTimeout(() => {
    // Get all the clip elements, the number of coupons already clipped, and calculate how many more coupons need to be clipped
    const clipElements = document.getElementsByClassName('coupon-tile__button--clip');
    const preClipped = Number(document.getElementById('js-clipped-coupon-count-display').innerHTML);
    let numClipped = preClipped;
    const numToClip = maxCoupons - numClipped;

    // Define a recursive function to click elements with delay
    function clickElementWithDelay(i) {
      // If there are elements left to click
      if (i < numToClip) {
        // Check if the element exists
        if (clipElements[i]) {
          // Schedule a click after a random delay between 100-500 milliseconds
          setTimeout(() => {
            clipElements[i].click();
            numClipped++;
            // Call the function recursively with the next index
            clickElementWithDelay(i + 1);
          }, Math.floor(Math.random() * (500 - 100 + 1) + 100));
        }
      } else {
	// If there are elements left to click
	// Calculate the number of newly clipped coupons and the total number of clipped coupons
	const clipped = numClipped - preClipped;
	const totalClipped = numClipped;
	// Create the content for the modal
	const content = `
		<p>Coupons Clipped: ${clipped}</p>
		<p>Total Coupons Clipped: ${totalClipped}</p>
		<p>Clipping Done!</p>
		<p>Special Offers Page: <a href="https://www.meijer.com/shopping/coupons/hand-picked-offers.html" target="_blank">Link &#8599</a></p>
	`;
	// Display the modal with the content
	showModal(content);
        }
    }

    // Start the recursive function with index 0
    clickElementWithDelay(0);
  }, 6000); // Wait 6 seconds for the coupons to load before clipping them
} else {
  // If there are no coupons available in selected categories, show a modal with a message
	const content = `
		<p>No coupons available in selected categories</p>
	`;
	// Display the modal with the content
	showModal(content);
}
