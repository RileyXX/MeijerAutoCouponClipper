const maxCoupons = 160;
const categories = ['Other', 'Bakery', 'Dairy', 'Deli', 'Dry Grocery', 'Fresh Meat', 'Fresh Seafood', 'Frozen Foods', 'Packaged Meat', 'Produce', 'Drinks'];

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
}