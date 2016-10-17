var WPViews=WPViews||{};WPViews.ViewAddonMaps=function($){var self=this;self.api=google.maps;self.maps_data=[];self.maps={};self.markers={};self.infowindows={};self.bounds={};self.default_cluster_options={imagePath:views_addon_maps_i10n.cluster_default_imagePath,gridSize:60,maxZoom:null,zoomOnClick:true,minimumClusterSize:2};self.cluster_options={};self.has_cluster_options={};self.resize_queue=[];self.collect_maps_data=function(){$('.js-wpv-addon-maps-render').each(function(){self.collect_map_data($(this));});};self.collect_map_data=function(thiz_map){var thiz_map_id=thiz_map.data('map'),thiz_map_points=[],thiz_map_options={},thiz_cluster_options={},thiz_map_collected={};$('.js-wpv-addon-maps-markerfor-'+thiz_map_id).each(function(){var thiz_marker=$(this);thiz_map_points.push({'marker':thiz_marker.data('marker'),'title':thiz_marker.data('markertitle'),'markerlat':thiz_marker.data('markerlat'),'markerlon':thiz_marker.data('markerlon'),'markerinfowindow':thiz_marker.html(),'markericon':thiz_marker.data('markericon'),'markericonhover':thiz_marker.data('markericonhover')});});thiz_map_options['general_zoom']=thiz_map.data('generalzoom');thiz_map_options['general_center_lat']=thiz_map.data('generalcenterlat');thiz_map_options['general_center_lon']=thiz_map.data('generalcenterlon');thiz_map_options['fitbounds']=thiz_map.data('fitbounds');thiz_map_options['single_zoom']=thiz_map.data('singlezoom');thiz_map_options['single_center']=thiz_map.data('singlecenter');thiz_map_options['map_type']=thiz_map.data('maptype');thiz_map_options['show_layer_interests']=thiz_map.data('showlayerinterests');thiz_map_options['marker_icon']=thiz_map.data('markericon');thiz_map_options['marker_icon_hover']=thiz_map.data('markericonhover');thiz_map_options['draggable']=thiz_map.data('draggable');thiz_map_options['scrollwheel']=thiz_map.data('scrollwheel');thiz_map_options['double_click_zoom']=thiz_map.data('doubleclickzoom');thiz_map_options['background_color']=thiz_map.data('backgroundcolor');thiz_map_options['cluster']=thiz_map.data('cluster');thiz_cluster_options={'cluster':thiz_map.data('cluster'),'gridSize':parseInt(thiz_map.data('clustergridsize')),'maxZoom':(parseInt(thiz_map.data('clustermaxzoom'))>0)?parseInt(thiz_map.data('clustermaxzoom')):null,'zoomOnClick':(thiz_map.data('clusterclickzoom')=='off')?false:true,'minimumClusterSize':parseInt(thiz_map.data('clusterminsize'))}
if(_.has(self.has_cluster_options,thiz_map_id)){if(_.has(self.has_cluster_options[thiz_map_id],"styles")){thiz_cluster_options['styles']=self.has_cluster_options[thiz_map_id]['styles'];}
if(_.has(self.has_cluster_options[thiz_map_id],"calculator")){thiz_cluster_options['calculator']=self.has_cluster_options[thiz_map_id]['calculator'];}}
thiz_map_collected={'map':thiz_map_id,'markers':thiz_map_points,'options':thiz_map_options,'cluster_options':thiz_cluster_options};self.maps_data.push(thiz_map_collected);self.cluster_options[thiz_map_id]=thiz_cluster_options;return thiz_map_collected;};self.init_maps=function(){self.maps_data.map(function(thiz){self.init_map(thiz);});};self.init_map=function(thiz){var map_icon='',map_icon_hover='',map_settings={zoom:thiz.options['general_zoom']},event_settings={map_id:thiz.map,map_options:thiz.options};$(document).trigger('js_event_wpv_addon_maps_init_map_started',[event_settings]);if(thiz.options['general_center_lat']!=''&&thiz.options['general_center_lon']!=''){map_settings['center']={lat:thiz.options['general_center_lat'],lng:thiz.options['general_center_lon']};}else{map_settings['center']={lat:0,lng:0};}
if(thiz.options['draggable']=='off'){map_settings['draggable']=false;}
if(thiz.options['scrollwheel']=='off'){map_settings['scrollwheel']=false;}
if(thiz.options['double_click_zoom']=='off'){map_settings['disableDoubleClickZoom']=true;}
if(thiz.options['background_color']!=''){map_settings['backgroundColor']=thiz.options['background_color'];}
self.maps[thiz.map]=new self.api.Map(document.getElementById('js-wpv-addon-maps-render-'+thiz.map),map_settings);$(document).trigger('js_event_wpv_addon_maps_init_map_inited',[event_settings]);self.bounds[thiz.map]=new self.api.LatLngBounds();if(thiz.options['marker_icon']!=''){map_icon=thiz.options['marker_icon'];}
if(thiz.options['marker_icon_hover']!=''){map_icon_hover=thiz.options['marker_icon_hover'];}
thiz.markers.map(function(thaz){var marker_lat_long=new self.api.LatLng(thaz.markerlat,thaz.markerlon),marker_map_icon=(thaz.markericon=='')?map_icon:thaz.markericon,marker_map_icon_hover=(thaz.markericonhover=='')?map_icon_hover:thaz.markericonhover,marker_settings={position:marker_lat_long,map:self.maps[thiz.map],optimized:false};if(marker_map_icon!=''){marker_settings['icon']=marker_map_icon;}
if(thaz.title!=''){marker_settings['title']=thaz.title;}
self.markers[thiz.map]=self.markers[thiz.map]||{};self.markers[thiz.map][thaz.marker]=new self.api.Marker(marker_settings);self.bounds[thiz.map].extend(self.markers[thiz.map][thaz.marker].position);if(marker_map_icon!=''||marker_map_icon_hover!=''){marker_map_icon=(marker_map_icon=='')?views_addon_maps_i10n.marker_default_url:marker_map_icon;marker_map_icon_hover=(marker_map_icon_hover=='')?marker_map_icon:marker_map_icon_hover;if(marker_map_icon!=marker_map_icon_hover){self.api.event.addListener(self.markers[thiz.map][thaz.marker],'mouseover',function(){self.markers[thiz.map][thaz.marker].setIcon(marker_map_icon_hover);});self.api.event.addListener(self.markers[thiz.map][thaz.marker],'mouseout',function(){self.markers[thiz.map][thaz.marker].setIcon(marker_map_icon);});$(document).on('mouseover','.js-toolset-maps-hover-map-'+thiz.map+'-marker-'+thaz.marker,function(){self.markers[thiz.map][thaz.marker].setIcon(marker_map_icon_hover);});$(document).on('mouseout','.js-toolset-maps-hover-map-'+thiz.map+'-marker-'+thaz.marker,function(){self.markers[thiz.map][thaz.marker].setIcon(marker_map_icon);});}}
if(thaz.markerinfowindow!=''){self.infowindows[thiz.map]=self.infowindows[thiz.map]||new self.api.InfoWindow({content:''});self.api.event.addListener(self.markers[thiz.map][thaz.marker],'click',function(){self.infowindows[thiz.map].setContent(thaz.markerinfowindow);self.infowindows[thiz.map].open(self.maps[thiz.map],self.markers[thiz.map][thaz.marker]);});$(document).on('click','.js-toolset-maps-open-infowindow-map-'+thiz.map+'-marker-'+thaz.marker,function(){self.infowindows[thiz.map].setContent(thaz.markerinfowindow);self.infowindows[thiz.map].open(self.maps[thiz.map],self.markers[thiz.map][thaz.marker]);});}});if(thiz.options['fitbounds']=='on'){self.maps[thiz.map].fitBounds(self.bounds[thiz.map]);}
if(_.size(thiz.markers)==1){if(thiz.options['single_zoom']!=''){self.maps[thiz.map].setZoom(thiz.options['single_zoom']);if(thiz.options['fitbounds']=='on'){self.api.event.addListenerOnce(self.maps[thiz.map],'bounds_changed',function(event){self.maps[thiz.map].setZoom(thiz.options['single_zoom']);});}}
if(thiz.options['single_center']=='on'){for(var mark in self.markers[thiz.map]){self.maps[thiz.map].setCenter(self.markers[thiz.map][mark].getPosition());break;}}}
if(_.contains(self.resize_queue,thiz.map)){self.keep_map_center_and_resize(self.maps[thiz.map]);_.reject(self.resize_queue,function(item){return item==thiz.map;});}
$(document).trigger('js_event_wpv_addon_maps_init_map_completed',[event_settings]);};self.clean_map_data=function(map_id){self.maps_data=_.filter(self.maps_data,function(map_data_unique){return map_data_unique.map!=map_id;});self.maps=_.omit(self.maps,map_id);self.markers=_.omit(self.markers,map_id);self.infowindows=_.omit(self.infowindows,map_id);self.bounds=_.omit(self.bounds,map_id);self.cluster_options=_.omit(self.cluster_options,map_id);var settings={map_id:map_id};$(document).trigger('js_event_wpv_addon_maps_clean_map_completed',[settings]);};self.keep_map_center_and_resize=function(map){var map_iter_center=map.getCenter();self.api.event.trigger(map,"resize");map.setCenter(map_iter_center);};self.reload_map=function(map_id){var settings={map_id:map_id};$(document).trigger('js_event_wpv_addon_maps_reload_map_started',[settings]);$(document).trigger('js_event_wpv_addon_maps_reload_map_triggered',[settings]);$(document).trigger('js_event_wpv_addon_maps_reload_map_completed',[settings]);};$(document).on('js_event_wpv_addon_maps_reload_map_triggered',function(event,data){var defaults={map_id:false},settings=$.extend({},defaults,data);if(settings.map_id==false||$('#js-wpv-addon-maps-render-'+settings.map_id).length!=1){return;}
self.clean_map_data(settings.map_id);var mpdata=self.collect_map_data($('#js-wpv-addon-maps-render-'+settings.map_id));self.init_map(mpdata);});self.get_map=function(map_id){if(map_id in self.maps){return self.maps[map_id];}else{return false;}};self.get_map_marker=function(marker_id,map_id){if(map_id in self.markers&&marker_id in self.markers[map_id]){return self.markers[map_id][marker_id];}else{return false;}};$(document).on('click','.js-wpv-addon-maps-reload-map',function(e){e.preventDefault();var thiz=$(this);if(thiz.attr('data-map')){self.reload_map(thiz.data('map'));}});$(document).on('click','.js-wpv-addon-maps-focus-map',function(e){e.preventDefault();var thiz=$(this),thiz_map,thiz_marker,thiz_zoom;if(thiz.attr('data-map')&&thiz.attr('data-marker')){thiz_map=thiz.data('map');thiz_marker=thiz.data('marker');if(thiz_map in self.maps&&thiz_map in self.markers&&thiz_marker in self.markers[thiz_map]){thiz_zoom=($('#js-wpv-addon-maps-render-'+thiz_map).data('singlezoom')!='')?$('#js-wpv-addon-maps-render-'+thiz_map).data('singlezoom'):14;self.maps[thiz_map].setCenter(self.markers[thiz_map][thiz_marker].getPosition());self.maps[thiz_map].setZoom(thiz_zoom);}}});$(document).on('click','.js-wpv-addon-maps-restore-map',function(e){e.preventDefault();var thiz=$(this),thiz_map,current_map_data_array,current_map_data;if(thiz.attr('data-map')){thiz_map=thiz.data('map');if(thiz_map in self.maps&&thiz_map in self.bounds){self.maps[thiz_map].fitBounds(self.bounds[thiz_map]);}
if(_.size(self.markers[thiz_map])==1){current_map_data_array=_.filter(self.maps_data,function(map_data_unique){return map_data_unique.map==thiz_map;});current_map_data=_.first(current_map_data_array);if(current_map_data.options['single_zoom']!=''){self.maps[thiz_map].setZoom(current_map_data.options['single_zoom']);if(current_map_data.options['fitbounds']=='on'){self.api.event.addListenerOnce(self.maps[thiz_map],'bounds_changed',function(event){self.maps[thiz_map].setZoom(current_map_data.options['single_zoom']);});}}
if(current_map_data.options['single_center']=='on'){for(var mark in self.markers[thiz_map]){self.maps[thiz_map].setCenter(self.markers[thiz_map][mark].getPosition());break;}}}}});$(document).on('js_event_wpv_parametric_search_results_updated',function(event,data){var affected_maps=self.get_affected_maps(data.layout);_.each(affected_maps,self.reload_map);});$(document).on('js_event_wpv_pagination_completed',function(event,data){var affected_maps=self.get_affected_maps(data.layout);_.each(affected_maps,self.reload_map);});self.get_affected_maps=function(container){var affected_maps=[];container.find('.js-wpv-addon-maps-render').each(function(){affected_maps.push($(this).data('map'));});container.find('.js-wpv-addon-maps-marker').each(function(){affected_maps.push($(this).data('markerfor'));});affected_maps=_.uniq(affected_maps);return affected_maps;};self.set_cluster_options=function(options,map_id){if(typeof map_id==='undefined'){if(_.has(options,"styles")){self.default_cluster_options['styles']=options['styles'];}
if(_.has(options,"calculator")){self.default_cluster_options['calculator']=options['calculator'];}}else{self.cluster_options[map_id]=self.get_cluster_options(map_id);if(_.has(options,"styles")){self.cluster_options[map_id]['styles']=options['styles'];}
if(_.has(options,"calculator")){self.cluster_options[map_id]['calculator']=options['calculator'];}
self.has_cluster_options[map_id]=options;}};self.get_cluster_options=function(map_id){var options=self.default_cluster_options;if(typeof map_id!=='undefined'&&_.has(self.cluster_options,map_id)){options=self.cluster_options[map_id];}
return options;};self.init=function(){self.collect_maps_data();self.api.event.addDomListener(window,'load',self.init_maps);self.api.event.addDomListener(window,"resize",function(){_.each(self.maps,function(map_iter,map_id){self.keep_map_center_and_resize(map_iter);});});$(document).on('js_event_wpv_layout_responsive_resize_completed',function(event){$('.js-wpv-layout-responsive .js-wpv-addon-maps-render').each(function(){var thiz=$(this),thiz_map=thiz.data('map');if(thiz_map in self.maps){self.keep_map_center_and_resize(self.maps[thiz_map]);}else{self.resize_queue.push(thiz_map);_.uniq(self.resize_queue);}});});}
self.init();};jQuery(document).ready(function($){WPViews.view_addon_maps=new WPViews.ViewAddonMaps($);});