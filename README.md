# MeijerAutoCouponClipper
This script will auto clip coupons on Meijer.com for user desired categories.

## Description:

So funny story I've been messing around with [ChatGPT OpenAi](https://chat.openai.com/chat) and it's been really helpful at helping me write code for random projects. It helped me improve this script I made for meijer.com. I wanted a way to easily clip all their coupons because they have hundreds of them and I hated having to go through them all manually trying to find what stuff I wanted. Now with this script I made it just takes a couple seconds to clip all of then at once. That way I can get the discounts automatically in store or by placing an order on the website.

I saw some other threads on reddit from people wanting a script like this for other stores. But I couldnt find anything for meijer. Hence why I created it. If people end up using this script I might improve it and make it into a chrome extension at some point.

## Features:

* Auto select coupons on meijer.com by category. Food only categories by default. Up to 160 coupons max. This is a meijer limitation. I noticed I can get most if not all the coupons in the food categories clipped.
* Works on any browser (hot keys might be different)
* Alternative categories by editing and saving the coupon categories in the second line of the code
* Modify max amount of coupons for the script to clip by editing the maxCoupons value in the first line of the code. You can set this to 150 for example to leave room for you to manually clip other coupons that you may want to clip. By default it is set to 160 (max). Do not set this higher than 160.

## How to use (Chrome browser instructions, hotkeys might vary depending on your browser/operating system):

1. Create a new .txt file on your computer and save the following javascript code
2. Login to meijer.com and navigate to the [coupons page](https://www.meijer.com/content/meijer/en/mperks/coupons.html)
3. In browser, press F12 OR right click>inspect element
4. Click the console tab in the popup window
5. Paste the javascript code in the box at the bottom and press enter

## Notes/Limitations:

* Sending too many requests at once can get your IP temporarily banned from accessing the meijer website. Try not to paste the code twice or run it too many times during a small time frame. Recommended to use a VPN but not necessary. If your IP gets banned simply click the little shield button in the navigation bar of your browser and delete all the cookies for meijer.com. Then change VPN server or wait (not sure how long but could be anywhere from a couple minutes to 24hours)
* Meijer.com only let's you clip up to 160 coupons. In total they usually have atleast a few hundred coupons at a time. So you should only select the categories that you know you will use the most. By default only the food categories are selected. But they can be edited manually.

## How to edit:

1. Open the text file you created with the code
2. Replace or add categories manually in line 2
3. Replace the maxCoupons value in line 1 with your desired amount of coupons to clip. (150) for example
4. Save the .txt file

## Javascript code (preset food only categories, up to 160 coupons):

    const maxCoupons = 160;
    const categories = ['Other', 'Bakery', 'Dairy', 'Deli', 'Dry Grocery', 'Fresh Meat', 'Fresh Seafood', 'Frozen Foods', 'Packaged Meat', 'Produce', 'Drinks'];
    
    const filterElements=document.querySelectorAll(".coupon-filter__checkbox-wrapper .mperks-checkbox__container");let checkedCategories=!1;for(const e of filterElements)categories.some((n=>e.textContent.includes(n)))&&(e.click(),checkedCategories=!0);checkedCategories?(setTimeout((()=>{const e=document.getElementsByClassName("coupon-tile__button--clip"),n=document.getElementById("js-clipped-coupon-count-display").innerHTML,o=maxCoupons-Number(n);for(let n=0;n<o;n++)e[n].click()}),6e3),setTimeout((()=>{const e=document.getElementsByClassName("coupon-tile__button--unclip").length,n=Number(e),o=document.createElement("div");o.setAttribute("id","coupon-modual"),o.innerHTML=`\n      <div class="coupon-modual__content">\n        <p>Coupons Clipped: ${n}</p>\n        <p>Clipping Done!</p>\n        <button class="coupon-modual__close-btn">Close</button>\n      </div>\n    `,document.body.appendChild(o),o.style.cssText="\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background-color: white;\n      padding: 20px;\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px #333333;\n    ";document.querySelector(".coupon-modual__close-btn").addEventListener("click",(()=>{o.remove()}))}),8e3)):setTimeout((()=>{const e=document.createElement("div");e.setAttribute("id","coupon-modual"),e.innerHTML='\n      <div class="coupon-modual__content">\n        <p>No coupons available in selected categories</p>\n        <button class="coupon-modual__close-btn">Close</button>\n      </div>\n    ',document.body.appendChild(e),e.style.cssText="\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background-color: white;\n      padding: 20px;\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px #333333;\n    ";document.querySelector(".coupon-modual__close-btn").addEventListener("click",(()=>{e.remove()}))}),2e3);

## Alternative code (manually select coupon categories from the meijer website before running the code):

    const maxCoupons = 160;
    const clipElements = document.getElementsByClassName('coupon-tile__button--clip');
    const clipped = document.getElementById('js-clipped-coupon-count-display').innerHTML;
    const numToClip = maxCoupons - Number(clipped);
    for (let i = 0; i < numToClip; i++) {
      clipElements[i].click();
    }
