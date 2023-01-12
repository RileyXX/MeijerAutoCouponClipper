const filterElements = document.querySelectorAll('.coupon-filter__checkbox-wrapper .mperks-checkbox__container');

let checkedCategories = false;
for (const element of filterElements) {
  if (categories.some((category) => element.textContent.includes(category))) {
    element.click();
    checkedCategories = true;
  }
}

if (checkedCategories) {
  setTimeout(() => {
    const clipElements = document.getElementsByClassName('coupon-tile__button--clip');
    const clipped = document.getElementById('js-clipped-coupon-count-display').innerHTML;
    const numToClip = maxCoupons - Number(clipped);
    for (let i = 0; i < numToClip; i++) {
      clipElements[i].click();
    }
  }, 6000); // 6 seconds

  setTimeout(() => {
    // re-calculate numToClip
    const clipped = document.getElementsByClassName('coupon-tile__button--unclip').length;
    const numClipped = Number(clipped);
    
    // create a modual/popup
    const modual = document.createElement('div');
    modual.setAttribute('id', 'coupon-modual');
    modual.innerHTML = `
      <div class="coupon-modual__content">
        <p>Coupons Clipped: ${numClipped}</p>
        <p>Clipping Done!</p>
        <button class="coupon-modual__close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(modual);
    // add styles to modual
    modual.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px #333333;
    `;

    const closeBtn = document.querySelector('.coupon-modual__close-btn');
    closeBtn.addEventListener('click', () => {
      modual.remove();
    });
  }, 8000); // 8 seconds (6 seconds for clipping + 2 seconds delay)
} else {
	// run when there are no coupons available in selected categories
  setTimeout(() => {
    // create a modual/popup
    const modual = document.createElement('div');
    modual.setAttribute('id', 'coupon-modual');
    modual.innerHTML = `
      <div class="coupon-modual__content">
        <p>No coupons available in selected categories</p>
        <button class="coupon-modual__close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(modual);
    // add styles to modual
    modual.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px #333333;
    `;

    const closeBtn = document.querySelector('.coupon-modual__close-btn');
    closeBtn.addEventListener('click', () => {
      modual.remove();
    });
  }, 2000); // 2 seconds delay
}