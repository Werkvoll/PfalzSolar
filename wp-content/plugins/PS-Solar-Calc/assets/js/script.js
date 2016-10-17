
jQuery(document).ready(function() {
	
    jQuery('.registration-form fieldset:first-child').fadeIn('slow');
    
      
    // next step
    jQuery('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = jQuery(this).parents('fieldset');
    	var next_step = true;
    	
    	   	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		jQuery(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    jQuery('.registration-form .btn-previous').on('click', function() {
    	jQuery(this).parents('fieldset').fadeOut(400, function() {
    		jQuery(this).prev().fadeIn();
    	});
    });
    
});
function Dachneigung(id,a,show){
    if (show)jQuery('#Dachneigung_other').show(500);
    else{
        jQuery('#Dachneigung_other').hide(500);
        jQuery("input[name='Dachneigung']").val(a);
    }
    jQuery("[id^=Dachneigung_]"+' > img').removeClass('image_clicked');
    jQuery('#Dachneigung_0'+id+' > img').addClass('image_clicked');
}
function Dachausrichtung(id,a){
    jQuery("[id^=Dachausrichtung_]"+' > img').removeClass('image_clicked');
    jQuery('#Dachausrichtung_0'+id+' > img').addClass('image_clicked');
}

function Dachflaeche(id,a,show){
    if (show)jQuery('#Dachflaeche_other').show(500);
    else{
        jQuery('#Dachflaeche_other').hide(500);
        jQuery("input[name='Dachflache']").val(a);
    }
    jQuery("[id^=Dachflaeche_]"+' > img').removeClass('image_clicked');
    jQuery('#Dachflaeche_0'+id+' > img').addClass('image_clicked');
}