# MeijerAutoCouponClipper
This script allows you to automatically clip coupons on Meijer.com for user-desired categories.

## How to Use:
1. Copy the following [JavaScript code](https://github.com/RileyXX/MeijerAutoCouponClipper#javascript-code-preset-food-only-categories).
2. Login to Meijer.com and navigate to the [coupons page](https://www.meijer.com/shopping/coupons.html).
3. In your browser, press F12 or right-click and select "Inspect Element".
4. Click the console tab in the popup window.
5. Paste the JavaScript code in the box at the bottom and press Enter.

   *Note: These instructions are for the Chrome browser. The hotkeys might vary depending on your browser/operating system.*
 
## Javascript Code (preset food only categories)
   ```javascript
   const maxCoupons = 160;
   const categories = ['Other', 'Bakery', 'Dairy', 'Deli', 'Dry Grocery', 'Fresh Meat', 'Fresh Seafood', 'Frozen Foods', 'Packaged Meat', 'Produce', 'Drinks'];
   
   fetch("https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipper.js")
     .then((e => e.text()))
     .then((e => {
       let t = document.createElement("script");
       t.innerHTML = e;
       document.body.appendChild(t);
     }))
     .catch((e => console.error(e)));
   ```
Copy the code and go to [step 2](https://github.com/RileyXX/MeijerAutoCouponClipper#how-to-use) of the "How to use" section. Alternatively, to download this code as a text file for later use right click [this link](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipper.txt) > save link as > save. Or open link and ctrl+s to download.
<br><br>Source code can be found [here](https://github.com/RileyXX/MeijerAutoCouponClipper/blob/main/MeijerAutoCouponClipper.js).

## Alternative Javascript Code (manually select coupon categories from the meijer website before running the code)
   ```javascript
    const maxCoupons = 160;
    
    fetch("https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipperNoCategories.js")
     .then((e => e.text()))
     .then((e => {
       let t = document.createElement("script");
       t.innerHTML = e;
       document.body.appendChild(t);
     }))
     .catch((e => console.error(e)));
   ```
Copy the code and go to [step 2](https://github.com/RileyXX/MeijerAutoCouponClipper#how-to-use) of the "How to use" section. Alternatively, to download this code as a text file for later use right click [this link](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipperNoCategories.txt) > save link as > save. Or open link and ctrl+s to download.
<br><br>Source code can be found [here](https://github.com/RileyXX/MeijerAutoCouponClipper/blob/main/MeijerAutoCouponClipperNoCategories.js).

## How to Edit:
1. Open the text file you created with the code.
2. Replace the `maxCoupons` value `160` in line 1 with your desired amount of coupons to clip (e.g., 150).
3. Replace or add categories manually in line 2. Make sure to use the same format, with quotes around each category and a comma separator.
4. Save the .txt file.

## Notes/Limitations:
- Sending too many requests at once can result in your IP being temporarily banned from accessing the Meijer website. Try not to paste the code twice or run it too many times within a short time frame. It's recommended to use a VPN, but not necessary. If your IP gets banned, simply click the little shield button in the navigation bar of your browser and delete all the cookies for Meijer.com. Then change VPN server or wait (the duration of the ban is unknown, could range anywhere from a few minutes to 24 hours).
- Meijer.com allows clipping up to 160 coupons. By default, only the food categories are selected, but you can manually edit the categories. Select only the categories you know you will use the most.

## Demo:
![Demo](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/demo.gif)

## Features:
- Automatically selects coupons on Meijer.com by category, with a maximum of 160 coupons. This is a limitation set by Meijer.
- Works on any browser (hotkeys might vary).
- Alternative categories can be selected by editing and saving the coupon categories in the code.
- The maximum number of coupons to clip can be modified by editing the `maxCoupons` value in the code's first line. The default is set to 160 (the maximum limit). Do not set this value higher than 160.

## Description:
I created this script to easily clip all the coupons on Meijer.com because they have hundreds of them, and manually going through them all to find what I wanted was time-consuming. With this script, it only takes a couple of seconds to clip all the coupons at once, allowing me to get the discounts automatically in-store or by placing an order on the website. I noticed that other users on Reddit were looking for similar scripts for different stores, but I couldn't find anything specifically for Meijer. That's why I created this script. I may improve this script and turn it into a Chrome extension at some point in the future.

## This Tool Was Also Posted On:
- [Reddit](https://www.reddit.com/r/meijer/comments/108iftd/auto_clip_all_coupons_script_for_meijercom_with/)

## Sponsorships, Donations, and Custom Projects:
If you find my scripts helpful, you can become a [sponsor](https://github.com/sponsors/RileyXX) and support my projects! If you need help with a project, open an issue, and I'll do my best to assist you. For other inquiries and custom projects, you can contact me on [Twitter](https://twitter.com/RileyxBell).

#### More Donation Options:
- Cashapp: `$rileyxx`
- Venmo: `@rileyxx`
- Bitcoin: `bc1qrjevwqv49z8y77len3azqfghxrjmrjvhy5zqau`
- Amazon Wishlist: [Link ↗](https://www.amazon.com/hz/wishlist/ls/WURF5NWZ843U)
