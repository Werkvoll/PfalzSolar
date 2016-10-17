// JavaScript Document

jQuery(document).ready(function() {
    jQuery('.et_dp_post_type').live('click', function() {
		if (jQuery(this).is(':checked')) {
			jQuery('.et_dp_'+jQuery(this).val()).attr("checked" , true);

		}
		else
			jQuery('.et_dp_'+jQuery(this).val()).attr("checked" , false);
    });

	jQuery('input[name="et_pb_include_categories"]').live('click', function() {
		if (jQuery(this).is(':checked')) {
			var thisClass = jQuery(this).attr('class');
			thisClass = thisClass.substring(6);
			var thisobject = '.et_dp_post_type[value="'+thisClass+'"]';
			jQuery(thisobject).attr("checked" , true);
		}
	});

});