<?php
/**define('WP_CACHE', true); // Added by WP Rocket

/** Enable W3 Total Cache Edge Mode */
/**define('W3TC_EDGE_MODE', true); // Added by W3 Total Cache


define('REVISR_WORK_TREE', '/home/admin/web/pfalzsolar.werkvoll.design/public_html/'); // Added by Revisr
define('REVISR_GIT_PATH', ''); // Added by Revisr
/**	if(isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && $_SERVER["HTTP_X_FORWARDED_PROTO"]=="https")$_SERVER["HTTPS"]="on";
	/** * The base configuration for WordPress * * The wp-config.php creation script uses this file during the * installation. You don't have to use the web site, you can * copy this file to "wp-config.php" and fill in the values. * * This file contains the following configurations: * * * MySQL settings * * Secret keys * * Database table prefix * * ABSPATH * * @link https://codex.wordpress.org/Editing_wp-config.php * * @package WordPress */// ** MySQL settings - You can get this info from your web host ** //
	/** The name of the database for WordPress */define( 'DB_NAME', 'admin_devs' );
	/** MySQL database username */define( 'DB_USER', 'admin_devs' );
	/** MySQL database password */define( 'DB_PASSWORD', '4Owhfb0Vky' );
	/** MySQL host3ApCTCE5ZjAZEJZBname */define( 'DB_HOST', '127.0.0.1' );
	/** Database Charset to use in creating database tables. */define('DB_CHARSET','utf8');
	/** The Database Collate type. Don't change this if in doubt. */define('DB_COLLATE','');
	/**#@+ * Authentication Unique Keys and Salts. * * Change these to different unique phrases! * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service} * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again. * * @since 2.6.0 */define('AUTH_KEY','put your unique phrase here');
	define('SECURE_AUTH_KEY','put your unique phrase here');
	define('LOGGED_IN_KEY','put your unique phrase here');
	define('NONCE_KEY','put your unique phrase here');
	define('AUTH_SALT','put your unique phrase here');
	define('SECURE_AUTH_SALT','put your unique phrase here');
	define('LOGGED_IN_SALT','put your unique phrase here');
	define('NONCE_SALT','put your unique phrase here');
	/**#@-*//** * WordPress Database Table prefix. * * You can have multiple installations in one database if you give each * a unique prefix. Only numbers, letters, and underscores please! */$table_prefix = 'ps_dev_';
	/** * For developers: WordPress debugging mode. * * Change this to true to enable the display of notices during development. * It is strongly recommended that plugin and theme developers use WP_DEBUG * in their development environments. * * For information on other constants that can be used for debugging, * visit the Codex. * * @link https://codex.wordpress.org/Debugging_in_WordPress */define('WP_DEBUG',false);
	$_SERVER["HTTP_HOST"]=$_SERVER["SERVER_NAME"];
	$_SERVER["HTTP_HOST"]=$_SERVER["SERVER_NAME"];
//define( 'WP_HOME', 'http://pfalzsolar.werkvoll.design' );
//define( 'WP_SITEURL', 'http://pfalzsolar.werkvoll.design' );
	/* That's all, stop editing! Happy blogging. */
	/** Absolute path to the WordPress directory. */if(!defined('ABSPATH'))define('ABSPATH',dirname(__FILE__).'/');
	/** Sets up WordPress vars and included files. */require_once(ABSPATH.'wp-settings.php');
//	define('ALTERNATE_WP_CRON', true);
	 /* Enable WP_DEBUG mode
	 define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings 
define( 'WP_DEBUG_DISPLAY', true );
@ini_set( 'display_errors', 1 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );