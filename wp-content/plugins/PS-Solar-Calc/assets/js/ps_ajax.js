function calculation(a){switch(a){case"GGEW":jQuery.ajax({type:"POST",url:PSC_ajax_script.ajaxurl,data:{action:"GGEW_calculate_data",result:jQuery("#SolarCalc").serialize()},success:function(a){var a=JSON.parse(a);a=check_for_cases(a),GGEW_results(a)},error:function(a,e,r){alert("There was an error: "+r)},timeout:1e4});break;case"PS":jQuery.ajax({type:"POST",url:PSC_ajax_script.ajaxurl,data:{action:"calculate_data",result:jQuery("#SolarCalc").serialize()},success:function(a){var a=JSON.parse(a);present_results(a);console.log(a)},error:function(a,e,r){alert("There was an error: "+r)},timeout:1e4})}}function validate_BL(){data2=jQuery("#SolarCalc").serializeObject(),validation_BL(data2)}function validate_Dach(){data=jQuery("#SolarCalc").serializeObject(),validation_Dach(data)}function infobox(){jQuery.ajax({type:"POST",url:PSC_ajax_script.ajaxurl,data:{action:"get_infobox_var",result:jQuery("#SolarCalc").serialize()},success:function(a){infoboxes(a)},error:function(a,e,r){alert("There was an error: "+r)},timeout:1e4})}jQuery.fn.serializeObject=function(){var a={},e=this.serializeArray();return jQuery.each(e,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a};