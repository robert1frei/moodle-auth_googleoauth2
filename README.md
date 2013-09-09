Google/Facebook/WindowsLive Oauth 2.0 Authentication Plugin
===========================================================

This plugin adds a Google/Facebook/Windows Live button on the front page (see the installation process on how to edit your login page).
The first time the user clicks on the button, a new account is created.

Plugin installation:
--------------------

> Step 4. is about adding some code in Moodle to display the authentication providers logos. It is a just an example.
It could actually be implemented anywhere (theme, block, alternative login page...). This step requires PHP and Moodle code knowledge.

1. add the plugin into /auth/googleoauth2/

2. in Moodle admin, enable the plugin (Admin block > Plugins > Auhtentication)

3. in the plugin settings, follow the instructions to your client ids + client secrets.

4. add the following code to your login page (For most of you copy it at the bottom of login/index_form.html. Some custom themes have their own login page. In this case you should find the login layout page indicated in the theme config.php file. Often the file location is something like /theme/YOURTHEME/layout/login.php.):

	<?php
	require_once($CFG->dirroot . '/auth/googleoauth2/lib.php');
	display_buttons();
	?>

5. (Recommended) Register on IPinfoDB for key: http://www.ipinfodb.com/register.php. Then enter the key in the plugin settings. Thus Moodle can pre-filled the city and the country of the user.

6. (Optional) Change the prefix of new users. By default they are name social_user_XXX.

FAQ and Support
---------------

Read the [Wiki](https://github.com/mouneyrac/auth_googleoauth2/wiki).
You are welcome to send Pull Request and to report [issues](https://github.com/mouneyrac/auth_googleoauth2/issues).
