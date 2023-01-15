const clipElements = document.getElementsByClassName('coupon-tile__button--clip');
const clipped = document.getElementById('js-clipped-coupon-count-display').innerHTML;
const numToClip = maxCoupons - Number(clipped);
for (let i = 0; i < numToClip; i++) {
  clipElements[i].click();
}
