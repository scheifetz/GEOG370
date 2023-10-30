var wms_layers = [];

var format_States_shapefile_0 = new ol.format.GeoJSON();
var features_States_shapefile_0 = format_States_shapefile_0.readFeatures(json_States_shapefile_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_States_shapefile_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_States_shapefile_0.addFeatures(features_States_shapefile_0);
var lyr_States_shapefile_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_States_shapefile_0, 
                style: style_States_shapefile_0,
                interactive: true,
                title: 'States_shapefile'
            });

lyr_States_shapefile_0.setVisible(true);
var layersList = [lyr_States_shapefile_0];
lyr_States_shapefile_0.set('fieldAliases', {'FID': 'FID', 'Program': 'Program', 'State_Code': 'State_Code', 'State_Name': 'State_Name', 'Flowing_St': 'Flowing_St', 'FID_1': 'FID_1', 'cleaned_for_HW_State (sum)': 'cleaned_for_HW_State (sum)', });
lyr_States_shapefile_0.set('fieldImages', {'FID': 'Range', 'Program': 'TextEdit', 'State_Code': 'TextEdit', 'State_Name': 'TextEdit', 'Flowing_St': 'TextEdit', 'FID_1': 'Range', 'cleaned_for_HW_State (sum)': 'Range', });
lyr_States_shapefile_0.set('fieldLabels', {'FID': 'no label', 'Program': 'no label', 'State_Code': 'no label', 'State_Name': 'no label', 'Flowing_St': 'no label', 'FID_1': 'no label', 'cleaned_for_HW_State (sum)': 'no label', });
lyr_States_shapefile_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});