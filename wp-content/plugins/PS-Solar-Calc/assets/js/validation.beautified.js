function thousends_seperator(e) {
    var r = e.toString().split(".");
    return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."), r.join(",");
}

function process_test_json(e) {
    var r = e, a = "" + recurse(r);
    return a;
}

function recurse(e) {
    var r = "<ul class='recurseObj' >";
    for (var a in e) "object" == typeof e[a] && null != e[a] ? (r += "<li class='keyObj' ><strong>" + a + ":</strong><ul class='recurseSubObj' >", 
    r += recurse(e[a]), r += "</ul  ></li   >") : r += "<li class='keyStr' ><strong>" + a + ": </strong>&quot;" + e[a] + "&quot;</li  >";
    return r += "</ul >";
}

function present_results(e) {
    get_html = jQuery("#results_table").html(), get_html = get_html.replace("$Size", thousends_seperator(Number(e.Leistung).toFixed(2))), 
    get_html = get_html.replace("$Invest", thousends_seperator(Number(e.Price).toFixed(2))), 
    get_html = get_html.replace("$Power", thousends_seperator(Number(e.Erzeugung).toFixed(2))), 
    get_html = get_html.replace("$EV", thousends_seperator(Number(e.VALUES.Anteil).toFixed(2))), 
    get_html = get_html.replace("$Savingsev", thousends_seperator(Number(e.Einspeiseverguetung).toFixed(2))), 
    get_html = get_html.replace("$Savings_ges", thousends_seperator(Number(e.Spar).toFixed(2))), 
    get_html = get_html.replace("$Savings", thousends_seperator(Number(e.Einsparung_Selbstverbrauch).toFixed(2))), 
    jQuery("#results_table").html(get_html), jQuery("#psc_plugin").cycle("next"), setTimeout(function() {
        jQuery(".popmake-solarrechner-3").click();
    }, 7e3);
}

function show_results(e) {
    function r() {
        0 == runned ? (pieChart(e.Spar, e.Einspeiseverguetung, e.Einsparung_Selbstverbrauch, runned), 
        runned = 1) : pieChart(e.Spar, e.Einspeiseverguetung, e.Einsparung_Selbstverbrauch, runned);
    }
    r();
}

function inputs() {
    jQuery("input.grad_org ").change(function() {
        jQuery("input.grad_dup  ").val(this.value + "°");
    }), jQuery("input.grad_dup ").change(function() {
        jQuery("input.grad_org").val(this.value.replace(/\D+$/g, ""));
    }), jQuery("input.square_org ").change(function() {
        jQuery("input.square_dup ").val(this.value + "m²");
    }), jQuery("input.square_dup ").change(function() {
        jQuery("input.square_org").val(this.value.replace(/\D+$/g, ""));
    }), jQuery("input.kw_org ").change(function() {
        jQuery("input.kw_dup ").val(this.value + " kWh/Jahr");
    }), jQuery("input.kw_dup ").change(function() {
        jQuery("input.kw_org").val(this.value.replace(/\D+$/g, ""));
    }), jQuery("input.pro_org ").change(function() {
        jQuery("input.pro_dup ").val(this.value + "%");
    }), jQuery("input.pro_dup ").change(function() {
        jQuery("input.pro_org").val(this.value.replace(/\D+$/g, ""));
    }), jQuery("input.cent_org ").change(function() {
        jQuery("input.cent_dup ").val(this.value + " cent/kWh");
    }), jQuery("input.cent_dup ").change(function() {
        jQuery("input.cent_org").val(this.value.replace(/\D+$/g, ""));
    });
    var e = !0;
    jQuery("h3#Akku_L").click(function() {
        jQuery(".SP_L").slideToggle(500), jQuery(".no_SP_L").slideToggle(500), e = !e, e ? jQuery(this).html("Ergebnis mit Speicher anzeigen!").fadeTo(500) : jQuery(this).html("Ergebnis ohne Speicher anzeigen!").fadeTo(500);
    }), jQuery("h3#Akku_S").click(function() {
        jQuery(".SP").slideToggle(500), jQuery(".no_SP").slideToggle(500), e = !e, e ? jQuery(this).html("Ergebnis mit Speicher anzeigen!").fadeTo(500) : jQuery(this).html("Ergebnis ohne Speicher anzeigen!").fadeTo(500);
    });
}

function toggleContact(e) {
    jQuery("input.hidden-167").val(e), jQuery("#psc_plugin").cycle("next");
}

function fillhiddenform(e) {
    jQuery("#hiddenPLZ").val(e.AllInputdata.PLZ), (null == e.AllInputdata.Dachneigung || "nil" == e.AllInputdata.Dachneigung) && e.AllInputdata.Dachneigung_other, 
    null != e.AllInputdata.Flaeche && "nil" != e.AllInputdata.Flaeche || e.AllInputdata.Flaeche_other, 
    jQuery("#hiddenSIZE").val(e.AllInputdata.Flaeche), jQuery("#hiddenOrientation").val(e.AllInputdata.Dachausrichtung), 
    jQuery("#hiddenTilt").val(e.AllInputdata.Dachneigung), jQuery("#hiddenVerbr").val(e.AllInputdata.Verbrauch), 
    jQuery("#hiddenDay").val(e.AllInputdata.Day), jQuery("#hiddenPrice").val(e.AllInputdata.Preis), 
    jQuery("#hiddenCalc_Data").val(e["DATA.SETS"]);
}

function person(e, r) {
    function a(e) {
        jQuery(".kw_org").val(e), jQuery(".kw_dup").val(e + " kWh/Jahr");
    }
    switch (e) {
      case "1":
        r && a("1500"), jQuery("#person_1").removeClass("p1").addClass("p1_h"), jQuery("#person_2").removeClass("p2_h").addClass("p2"), 
        jQuery("#person_3").removeClass("p3_h").addClass("p3"), jQuery("#person_4").removeClass("p3_h").addClass("p3"), 
        jQuery("#person_5").removeClass("p3_h").addClass("p3");
        break;

      case "2":
        jQuery("#person_1").removeClass("p1").addClass("p1_h"), jQuery("#person_2").removeClass("p2").addClass("p2_h"), 
        jQuery("#person_3").removeClass("p3_h").addClass("p3"), jQuery("#person_4").removeClass("p3_h").addClass("p3"), 
        jQuery("#person_5").removeClass("p3_h").addClass("p3"), r && a("2500");
        break;

      case "3":
        jQuery("#person_1").removeClass("p1").addClass("p1_h"), jQuery("#person_2").removeClass("p2").addClass("p2_h"), 
        jQuery("#person_3").removeClass("p3").addClass("p3_h"), jQuery("#person_4").removeClass("p3_h").addClass("p3"), 
        jQuery("#person_5").removeClass("p3_h").addClass("p3"), r && a("3000");
        break;

      case "4":
        jQuery("#person_1").removeClass("p1").addClass("p1_h"), jQuery("#person_2").removeClass("p2").addClass("p2_h"), 
        jQuery("#person_3").removeClass("p3").addClass("p3_h"), jQuery("#person_4").removeClass("p3").addClass("p3_h"), 
        jQuery("#person_5").removeClass("p3_h").addClass("p3"), r && a("5000");
        break;

      case "5":
        jQuery("#person_1").removeClass("p1").addClass("p1_h"), jQuery("#person_2").removeClass("p2").addClass("p2_h"), 
        jQuery("#person_3").removeClass("p3").addClass("p3_h"), jQuery("#person_4").removeClass("p3").addClass("p3_h"), 
        jQuery("#person_5").removeClass("p3").addClass("p3_h"), r && a("8000");
    }
}

function mapdraw() {
    jQuery("#map").length > 0 && (Bundeslaender = new jvm.Map({
        container: jQuery("#map"),
        map: "de_mill",
        zoomOnScroll: !1,
        backgroundColor: "none",
        regionsSelectable: "true",
        regionsSelectableOne: "true",
        regionStyle: {
            initial: {
                fill: "white",
                "fill-opacity": 1,
                stroke: "none",
                "stroke-width": 2,
                "stroke-opacity": 0
            },
            selected: {
                fill: "orange"
            },
            selectedHover: {
                fill: "orange",
                "fill-opacity": .75
            }
        },
        onRegionOut: function() {
            jQuery(".tip-selected").show();
        },
        onRegionTipShow: function() {
            jQuery(".tip-selected").hide();
        },
        onRegionSelected: function() {
            "" != Bundeslaender.getSelectedRegions() && (selected = Bundeslaender.getRegionName(Bundeslaender.getSelectedRegions()), 
            text = selected, selected_2 = text.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue").replace(/ß/g, "ss"), 
            jQuery(".jvectormap-tip").hide(), jQuery("input#BL").val(selected_2), jQuery(".tip-selected").html(selected), 
            jQuery(".tip-selected").show());
        }
    }));
}

function warning(e) {
    switch (e) {
      case "BL":
        alert("Bitte wählen Sie ihr Bundesland aus");
        break;

      case "Size":
        alert("Bitte beachten Sie, dass die Installation einer Photovoltaikanlage erst ab einer Dachfläche von 20 m² angeboten wird");
    }
}

function validation_BL(e) {
    checked = e.Bundesland, "NULL" != checked ? jQuery("#psc_plugin").cycle("next") : warning("BL");
}

function validation_Dach(e) {
    "nil" == e.Flaeche && (e.Flaeche = e.Flaeche_other), Size = e.Flaeche, Size < 20 ? warning("Size") : jQuery("#psc_plugin").cycle("next");
}