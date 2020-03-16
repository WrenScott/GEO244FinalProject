'use strict';

// Adding in different ESRI modules for functionality & styling
var require = require([
		"esri/Map",
		"esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend",
		"esri/geometry/Extent"],
	function (Map, MapView, FeatureLayer, Legend, Extent) {

		// Insert feature layer for 2019 OGC delivery accounts
		var url = "https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/OGCDeliveryAccounts/FeatureServer";

		// Creating content for popups on map 
		var popupDeliveryAccount = {
			// autocasts as new PopupTemplate()
			title: "{DeliveryAccounts}",
			content: "In 2019 B-Line delivered <b>{TotalLbsDelivered}</b> pounds of organcially grown produce to {DeliveryAccounts} over <b>{Frequency}</b> delivereies. <br><b>{TruckMilesAvoided}</b> truck miles and <b>{LbsCO2Avoided}</b> lbs CO2 were avoided.</br>",
			fieldInfos: [
				{
					fieldName: "DeliveryAccounts",
					format: {
						places: 0,
						digitSeparator: true
					}
            },
				{
					fieldName: "TotalLbsDelivered",
					format: {
						places: 0,
						digitSeparator: true
					}
            },
				{
					fieldName: "Frequency",
					format: {
						places: 0,
						digitSeparator: true
					}
            },
				{
					fieldName: "TruckMilesAvoided",
					format: {
						places: 0,
						digitSeparator: true
					}
            },
				{
					fieldName: "LbsCO2Avoided",
					format: {
						places: 0,
						digitSeparator: true
					}
            },
          ]
		};

		// Defining the styling of points based on the first variable, the TotalLbSDelivered attribute of each point
		var colorVisVar = {
			type: "color",
			field: "TotalLbsDelivered",
			stops: [{
					value: 600,
					color: "#333CFF"
		},
				{
					value: 3000,
					color: "#633CD3"
		},
				{
					value: 15000,
					color: "#793CBC"
		},
				{
					value: 40000,
					color: "#A63C8F"
		},
				{
					value: 75000,
					color: "3FF3C4C"
		}]
		};

		// Defining the styling of points based on the second varaible, the LbsCO2Avoided attribute of each point
		var sizeVisVar = {
			type: "size",
			field: "LbsCO2Avoided",
			valueUnit: "unknown",
			stops: [{
					value: 32,
					size: 8
						},
				{
					value: 1500,
					size: 15
						},
				{
					value: 3000,
					size: 20
						},
				{
					value: 4500,
					size: 25
						},
				{
					value: 5884,
					size: 30
						}]
		};

		// Needed to render markers for the points
		var renderer = {
			type: "simple",
			symbol: {
				type: "simple-marker",
				outline: {
					color: [128, 128, 128],
					width: 0.5
				}
			},
			label: "delivery account point",
			visualVariables: [colorVisVar, sizeVisVar]
		};

		// Set the renderer on the layer
		var OGCLayer = new FeatureLayer({
			url: url,
			Title: "2019 OGC Impact Reporting",
			//outFields makes all attributes for feature layer available 
			outFields: ["*"],
			popupTemplate: popupDeliveryAccount,
			renderer: renderer,
			elevationInfo: {
				mode: 'on-the-ground'
			}
		});

		// Create the map
		var map = new Map({
			basemap: "dark-gray",
			layers: [OGCLayer],
		});

		// Create the map view
		var view = new MapView({
			container: "OGCImpactMap",
			map: map,
			zoom: 12
		});

	//Set the extent of the map to central Portland, OR
	view.extent = new Extent({
			xmin: -122.703996,
			ymin: 45.495104,
			xmax: -122.609838,
			ymax: 45.535761 });
	
		// Create the lengend
		var legend = new Legend({
			view: view,
			layerInfos: [
				{
					layer: OGCLayer,
					title: "2019 Organcially Grown Company Delivereies"
              }
            ]
		});

		// Add the legend to the map
		view.ui.add(legend, "bottom-right");

	});
