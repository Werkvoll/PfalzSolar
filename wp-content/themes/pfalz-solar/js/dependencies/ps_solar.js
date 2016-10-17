//Mehr Erfahren
jQuery(".et_pb_more_button").each(function() {
    var me = jQuery(this), fw = me.text().split("#");
    me.html("<i id='more_icon'>p</i><span>" + fw.shift() + "</span> " + fw.join(" "));
});

//Incons Betragsslider
jQuery(".et_pb_slide_content").each(function() {
    var str = jQuery(this).html();
    if (str != null) {
        //    console.log(str)
        var res = str.replace("herzIcon", "<i class='fa fa-heart fa-3x'></i>");
        res = res.replace("kreisIcon", "<i class='fa fa-genderless fa-3x'></i>");
        res = res.replace("chartIcon", "<i class='fa fa-area-chart fa-3x'></i>");
        res = res.replace("calcIcon", "<i class='fa fa-calculator fa-3x'></i>");
        jQuery(this).html(res);
    }
});

//Icons Invesorenseite
jQuery(".et_pb_toggle_title").each(function() {
    var str = jQuery(this).html();
    if (str != null) {
        //   console.log(str)
        var res = str.replace("iconPlanung", "<i class='fa fa-clipboard fa-5x'></i>");
        res = res.replace("iconBau", "<i class='fa fa-cubes fa-5x'></i>");
        res = res.replace("iconFinanz", "<i class='fa fa-gears fa-5x'></i>");
        res = res.replace("iconBetrieb", "<i class='fa fa-line-chart fa-5x'></i>");
        jQuery(this).html(res);
    }
});

//Menu Icon replace
jQuery("#top-menu").each(function() {
    var str = jQuery(this).html();
    if (str != null) {
        var res = str.replace(/\<a(.*)\>\<i class\=\"fa fa-arrows\"\>\<\/i\> (.*)\<\/a\>/g, '<div class="PSMenu"><a><img class="PSMenu" src="http://pfalzsolar.de/wp-content/themes/pfalz-solar/images/sunButton.svg" alt="PSMenuButton"><span class ="PSMenu orange">MENU<span></a></div>');
        jQuery(this).html(res);
    }
});

function contact(name, eng) {
    jQuery("#Mitarbeitername").each(function() {
        jQuery(this).val("name");
    });
    if (eng){
    	window.open("http://pfalzsolar.de/en/contact/");
    }
    else
    window.open("http://pfalzsolar.de/de/kontakt/");
}

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("url");
    });
    jQuery("#Investor_slider").find("a").each(function(index, element) {
        if (index == 2) {
            this.href = "#IGH";
        } else {
            this.href = "";
        }
    });
    jQuery("#Beitragsslider").find("a").each(function(index, element) {
        switch (index) {
          case 0:
          case 1:
            this.href = "wir-sind/";
            break;

          case 2:
          case 3:
            this.href = "investoren/";
            break;

          case 4:
          case 5:
            this.href = "solarcalc/";
            break;
        }
    });

    jQuery("#Beitragsslider_eng").find("a").each(function(index, element){
        this.href=index;
        switch (index) {
          case 0:
          case 1:
            this.href = "investoren/";
            break;
          case 2:
          case 3:
            this.href = "wir-sind/";
            break;
          case 4:
          case 5:
            this.href = "solarcalc/";
            break;
        }
    });
});