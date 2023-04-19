# MeijerAutoCouponClipper
This script will auto clip coupons on Meijer.com for user desired categories.

## How to use:

1. Copy the following [javascript code](https://github.com/RileyXX/MeijerAutoCouponClipper#javascript-code-preset-food-only-categories-up-to-160-coupons). Alternatively, you can download and save the code as a .txt file on your computer for later use.
2. Login to meijer.com and navigate to the [coupons page](https://www.meijer.com/content/meijer/en/mperks/coupons.html)
3. In browser, press F12 OR right click>inspect element
4. Click the console tab in the popup window
5. Paste the javascript code in the box at the bottom and press enter

*Note: These are Chrome browser instructions, hotkeys might vary depending on your browser/operating system.*

## Javascript code (preset food only categories, up to 160 coupons):
Copy the following code and go to [step 2](https://github.com/RileyXX/MeijerAutoCouponClipper#how-to-use) of the "How to use" section. Alternatively, to download this code as a text file right click [this link](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipper.txt) > save link as > save. Or open link and ctrl+s to download.

    const maxCoupons = 160;
    const categories = ['Other', 'Bakery', 'Dairy', 'Deli', 'Dry Grocery', 'Fresh Meat', 'Fresh Seafood', 'Frozen Foods', 'Packaged Meat', 'Produce', 'Drinks'];
    
    fetch("https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipper.js").then((e=>e.text())).then((e=>{let t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t)})).catch((e=>console.error(e)));


## Alternative code (manually select coupon categories from the meijer website before running the code):
Copy the following code and go to [step 2](https://github.com/RileyXX/MeijerAutoCouponClipper#how-to-use) of the "How to use" section. Alternatively, to download this code as a text file right click [this link](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipperNoCategories.txt) > save link as > save. Or open link and ctrl+s to download.

    const maxCoupons = 160;
    fetch("https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/MeijerAutoCouponClipperNoCategories.js").then((e=>e.text())).then((e=>{let t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t)})).catch((e=>console.error(e)));

## How to edit:

1. Open the text file you created with the code
2. Replace the maxCoupons value in line 1 with your desired amount of coupons to clip. (150) for example
3. Replace or add categories manually in line 2 (make sure to use the same format using quotes around each category and a comma seperator)
4. Save the .txt file

## Notes/Limitations:

* Sending too many requests at once can get your IP temporarily banned from accessing the meijer website. Try not to paste the code twice or run it too many times during a small time frame. Recommended to use a VPN but not necessary. If your IP gets banned simply click the little shield button in the navigation bar of your browser and delete all the cookies for meijer.com. Then change VPN server or wait (not sure how long but could be anywhere from a couple minutes to 24hours)
* Meijer.com only let's you clip up to 160 coupons. In total they usually have atleast a few hundred coupons at a time. So you should only select the categories that you know you will use the most. By default only the food categories are selected. But they can be edited manually.

## Demo:
![Demo](https://raw.githubusercontent.com/RileyXX/MeijerAutoCouponClipper/main/demo.gif)

## Features:

* Auto select coupons on meijer.com by category. Food only categories by default. Up to 160 coupons max. This is a meijer limitation. I noticed I can get most if not all the coupons in the food categories clipped.
* Works on any browser (hot keys might be different)
* Alternative categories by editing and saving the coupon categories in the second line of the code
* Modify max amount of coupons for the script to clip by editing the maxCoupons value in the first line of the code. You can set this to 150 for example to leave room for you to manually clip other coupons that you may want to clip. By default it is set to 160 (max). Do not set this higher than 160.

## Description:

So funny story I've been messing around with [ChatGPT OpenAi](https://chat.openai.com/chat) and it's been really helpful at helping me write code for random projects. It helped me improve this script I made for meijer.com. I wanted a way to easily clip all their coupons because they have hundreds of them and I hated having to go through them all manually trying to find what stuff I wanted. Now with this script I made it just takes a couple seconds to clip all of then at once. That way I can get the discounts automatically in store or by placing an order on the website.

I saw some other threads on reddit from people wanting a script like this for other stores. But I couldnt find anything for meijer. Hence why I created it. If people end up using this script I might improve it and make it into a chrome extension at some point.

## This tool was also posted on:
* [Reddit](https://www.reddit.com/r/meijer/comments/108iftd/auto_clip_all_coupons_script_for_meijercom_with/)

## Donations, Sponsorships and Custom Projects:
Like my scripts? Consider donating! Become a sponsor and support my projects! See below for other donation options. Need help with a project? Open an issue and I will try my best to help! For other inquiries and custom projects contact me on [Twitter](https://twitter.com/RileyxBell).

#### More donation options:
- Cashapp: `$rileyxx`
- Venmo: `@rileyxx`
- Bitcoin: `bc1qrjevwqv49z8y77len3azqfghxrjmrjvhy5zqau`
- Amazon Wishlist: [Link ↗](https://www.amazon.com/hz/wishlist/ls/WURF5NWZ843U)
