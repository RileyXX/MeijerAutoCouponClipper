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
  setTimeout(() => {
    // Get all the clip elements, the number of coupons already clipped, and calculate how many more coupons need to be clipped
    const clipElements = document.getElementsByClassName('coupon-tile__button--clip');
    const preClipped = Number(document.getElementById('js-clipped-coupon-count-display').innerHTML);
    let numClipped = preClipped;
    const numToClip = maxCoupons - numClipped;

    // Loop through the clip elements and click them until the maximum number of coupons is reached
    for (let i = 0; i < numToClip; i++) {
      if (clipElements[i]) {
        clipElements[i].click();
        numClipped++;
      }
    }

    setTimeout(() => {
      // Calculate the number of newly clipped coupons and the total number of clipped coupons
      const clipped = numClipped - preClipped;
      const totalClipped = numClipped;
      // Create a modal with information about the clipped coupons
      const modal = document.createElement('div');
      modal.setAttribute('id', 'coupon-modal');
      modal.innerHTML = `
        <div class="coupon-modal__content">
          <p>Coupons Clipped: ${clipped}</p>
          <p>Total Coupons Clipped: ${totalClipped}</p>
          <p>Clipping Done!</p>
          <button class="coupon-modal__close-btn">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
      // Style the modal and add an event listener to remove it when the "Close" button is clicked
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

      const closeBtn = document.querySelector('.coupon-modal__close-btn');
      closeBtn.addEventListener('click', () => {
        modal.remove();
      });
    }, 2000); // Wait 2 seconds for the coupons to be clipped before showing the modal
  }, 6000); // Wait 6 seconds for the coupons to load before clipping them
} else {
  // If there are no coupons available in selected categories, show a modal with a message with a 2 second delay
  setTimeout(() => {
    // create a modal/popup
    const modal = document.createElement('div');
    modal.setAttribute('id', 'coupon-modal');
    modal.innerHTML = `
      <div class="coupon-modal__content">
        <p>No coupons available in selected categories</p>
        <button class="coupon-modal__close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    // Style the modal and add an event listener to remove it when the "Close" button is clicked
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

    const closeBtn = document.querySelector('.coupon-modal__close-btn');
    closeBtn.addEventListener('click', () => {
      modal.remove();
    });
  }, 2000); // 2 seconds delay
}
