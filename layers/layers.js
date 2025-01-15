var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dwg_cagar_budayaAnnotation_1 = new ol.format.GeoJSON();
var features_dwg_cagar_budayaAnnotation_1 = format_dwg_cagar_budayaAnnotation_1.readFeatures(json_dwg_cagar_budayaAnnotation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dwg_cagar_budayaAnnotation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dwg_cagar_budayaAnnotation_1.addFeatures(features_dwg_cagar_budayaAnnotation_1);
var lyr_dwg_cagar_budayaAnnotation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dwg_cagar_budayaAnnotation_1, 
                style: style_dwg_cagar_budayaAnnotation_1,
                popuplayertitle: 'dwg_cagar_budaya-Annotation',
                interactive: true,
                title: '<img src="styles/legend/dwg_cagar_budayaAnnotation_1.png" /> dwg_cagar_budaya-Annotation'
            });

lyr_OSMStandard_0.setVisible(true);lyr_dwg_cagar_budayaAnnotation_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_dwg_cagar_budayaAnnotation_1];
lyr_dwg_cagar_budayaAnnotation_1.set('fieldAliases', {'TxtMemo': 'TxtMemo', });
lyr_dwg_cagar_budayaAnnotation_1.set('fieldImages', {'TxtMemo': 'TextEdit', });
lyr_dwg_cagar_budayaAnnotation_1.set('fieldLabels', {'TxtMemo': 'inline label - always visible', });
lyr_dwg_cagar_budayaAnnotation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});