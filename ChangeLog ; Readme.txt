Changelog
===================================================================================
V1
	Added:PA1 feature
######################################################################################
								PA2 Update
######################################################################################
V2
	Added: 
	1.Order.html & OrderComplete.html
	2.Styles2.css
	
	Change: clean up Style.css
	
v2.1
	Added: Address textbox (on Order.html)
	
	Change: js.js (Added productAdd(), productDelete() productEdit()  and genID())
	
v2.1.1
	Added: 
	1.client_captcha.js
	2.submit button will check textbox validation and captcha validation
	3."Your Enquiry" at navigation bar on all side
	
	Change: 
	1.js.js (Added captcha code)
	2.WIP.html (contant at page 2 change)
	
	Removed: "Your cart" from navigation bar on all side
	
v2.2
	Added: Title radia box (on Order.html)
	
	Fixed: Quantity textbox not validating (added jquery validation)
	
v2.3
	Added: Summary table and show summary button (on Order.html)
	
v2.3.1
	Added: Validating for summary table
	
	Change: 
	1.Summary table is now responsive
	2.Footer change for mobile
	
	Fixed: Background for order.html is not fullscreen
	
v2.4
	Added: 
	1.animation for summary table
	2.Refresh button and hide button for summary table
	
	Change: 
	1.show summary button will fade away when click
	2.Redesigned the from
	
v2.4.1
	Change: 
	1.Retexture radio button
	2.Cleanup project code
	
	Fixed: Save button not working for columm 2 onward
	
######################################################################################
								PA3 Update
######################################################################################
V3.0.0
	Added: 
	1.login.html
	2.login.php
	
V3.0.1
	major change: all html, css and javascript remove, working to recode
	
	Change:
	1.index.html is login.html now
	2.login.html redesign
	
	remove: boilerplate.css
	
V3.0.2
	Added:
	1.registor.html & registor.php with registor system(SQL)
	2.login system (SQL) at login.php
	
	Change: Cleanup CSS code
	
	Fixed: 
	1.backgroud is not full on some size at Default_style.css
	2.textbox color on hover at Login_style.css
	
V3.0.3 (failed build)
	Added: recoded store.html
	
V3.0.4
	Added: 
	1.ajax to login and registor at JS.js
	2.login redirct and registor redirct at JS.js
	3.old html and css file back 
	
	Change: 
	1.rename old index.html to store.html
	2.update prouct name at store.html
	
	Fixed: registor button shown as login button
	
	Remove: boilerplate support at index.html & registor.html
	
V3.0.5
	Added: support for mobile and tablet mode on login and registor from
	
	Change(at Login_Styles.css, Registor_Styles.css & Default_style.css):
	1.clean up css for login and registor from, share css code is transfer into Default_style.css
	2.width for the login and registor is bigger
	3.textbox for login and registor from is more reponsive
	
V3.0.6
	Added: 
	1.better error exception for registor at registor.php
	2.md5 support for password at registor.php & login.php
	3.store.php to retived prduct name and price
	
	Change: 
	1.product name will be get from sql now at store.html
	2.button redesign, it will show product price and when hover, it will change to "add to cart" at store.html
	3.better change log format and clean up at ChangeLog.txt
	
	Fixed: store in all nav bring you to login and not store 

V3.1.0
	Added: 
	1.session login check, it check did you login, if not it bring you to index.html & loginCheck.php. if you are login and at index.html or registor.html, it will bring you to store.html
	2."logout" at nav & logout.php
	3.display user username under the logo (only for desktop mode)
	3*.".UName" to style.css and style2.css
	4.logo add the tab
	
	Change:
	1.reorganise the nav
	2.".menu" padding at style2.css
	3.reformat change log at ChangeLog.txt
	4.use jquery.md5.js for md5 support and not php md5 function
	5.update font asesome api to v5.6.3
	6.title for html look nicer (ex.Cocoland | Store)
	
	Fixed:
	1.contact.html missing
	2.fullpage.js keep outputing that there is no lience in dev console
	
	Remove:
	1. remove font asesome link at index.html and registor.html as it never use
	
V3.1.1
	Added:
	1.tooltip for login.html and register.html textbox
	2.back button at register.html
	
	Change:
	1.login.html and register.html design to align textbox to center nicer
	
	Fixed:
	1.jquery.md5 error 404
	2.typo "registor" to "register" on all file

V3.1.2
	Added:
	1.hover effect for "a" property for login.html and register.html

	Change:
	1.better optimize md5 encryption(no long paste the encryped password back to password textbox)
	2.the hover color for login and register textbox is a lighter orange
	3.move "a" property to Default_style.css

	Remove:
	1.unused or duplicated property in css file

######################################################################################
								PA4 Update
######################################################################################
V4.0.0
	Added:
	1."Role" to sql user table
	2.register.html give the new account role "N" by default ("N" mean normal)
	3.Admin account have role "A" ("A" mean admin)
	4.admin.html
	5.function roleCheck() in js.js and when login success, it run this function which bring you to admin.html if user role is "A", else bring ti store.html

	Change:
	1.loginCheck.php will check for role too
	2.update login_check.js to better work with the new loginCheck.php

	Fixed:
	1.the nav backgroud may be smaller than the nav contant if use style2.css

V4.0.1
	Added:
	1.admin.js & admin.php that display all user info when admin.html is open
	2.style3.css for admin.html
	3.role check system for admin.html in login_check.js, now it will only allow role "A" to access admin.html

	Fixed:
	1.to be able to enter the store.html and other file without login(just key store.html or etc) in login_Check.js

	Remove:
	1.style2.css from admin.html as it is using style3.css now

V4.0.2
	Added:
	1.edit.html

	Change:
	1.style3.css for edit.html support
	2."User name" to "User Name" for table at admin.html

V4.0.3
	Added:
	1.edit.js & userSearch.php
	2.feature on admin.html, when user role is click, it bring you to edit.html with the user data display nice into the textbox

	Change:
	1.Recoded user info table display on admin.html so it can run javascript when click
	2.minor changes on edit.html contant

	Fixed:
	1.back button at edit.html now work