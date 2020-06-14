# GEO244FinalProject
Here you can find the files that make up my Interactive Map Design Final Project (GEO244). Project completed 3/16/20.

## Purpose
###Project Title: 
2019 B-Line Urban Delivery Impact Reporting – Organically Grown Company

###Audience: B-Line Urban Delivery staff, B-Line client Organically Grown Company (OGC)
	
###Intended Purpose: To spatially represent delivery and impact statistics for each OGC delivery account serviced during 2019. 


##User Instructions: 
To use this web app, download files from my final project GitHub repository found at: https://github.com/WrenScott/GEO244FinalProject

Open or copy & paste the files in a development environment, such as CodePen or Brackets. Note, the BLineLogo.png and 2016B-LINEBenefitREPORT.pdf will need to be stored in an accessible location to be linked into code for them to be rendered on the page. 

Click on each of the links at the top of the page (e.g. “Certified B Corperation”) to see where they open to and to explore resources that inform the purpose of the project. Notice how the styling changes when the mouse hovers over the link, but the styling does not change once the link has been visited. 

Zoom and pan around the map to check out the data represented on the map and see where each delivery account is located. 

Click on each point marker that represents each delivery account to view a popup containing summary 2019 delivery statistics. From within the popup, you can zoom to the selected feature and you can dock the popup to the upper right corner of the map. 

##Data & Sources: 
The primary dataset that map was built off of is an internal B-Line Google Sheet “Rider Daily Data.” 2019 data was captured upon each instance of delivery by B-Line staff and entered into the sheet using a Google Form. I downloaded the sheet and worked with it in Microsoft Excel. 
The data was queried for delivery information specific to OGC and 2019. A sheet containing delivery addresses and coordinates was joined so the accounts could be mapped. 
It was then, summarized by delivery account for frequency of delivery, pounds of produce delivered. 
Using B-Line impact reporting methodology, an average delivery week was pulled for each quarter of 2019. Truck miles were calculated for each day of each week as if an OGC truck was used to complete the deliveries. Truck miles were divided by the number of stops per day to create a coefficient of truck miles/stop. This coefficient was averaged per quarter. Then the quarterly coefficients were averaged for the year. Finally, each delivery account had truck miles avoided calculated by multiplying the 2019 truck mi/stop coefficient by the frequency of delivery. As a result, gallons of gas and pounds of CO2 avoided could be calculated for each delivery account.
Once the impact data was calculated in Excel, a simple map was created in ArcGIS Pro to visualize each delivery account as a point on a dark gray basemap. The map published to ArcGIS online so a feature layer could be called into the web map with a URL. 

B-Line logo image and 2016 Impact Reporting were sourced from internal B-Line Google Drive. 


##Metadata: 
####Name: 2019 OGC Delivery Accounts

####Display Field:

####Type: Feature Layer

####Geometry Type: esriGeometryPoint

####Min. Scale: 577791

####Max. Scale: 0

####Default Visibility: true

####Max Record Count: 2000

####Supported query Formats: JSON

####Use Standardized Queries: True

Extent:

XMin: -13657651.9145227
YMin: 5700218.11733932
XMax: -13650683.2810032
YMax: 5704800.78858664
Spatial Reference: 102100

Drawing Info:

{"renderer":{"type":"simple","symbol":{"type":"esriPMS","url":"RedSphere.png","imageData":"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","contentType":"image/png","width":15,"height":15}}}

HasZ: false

HasM: false

Has Attachments: false

Has Geometry Properties: false

HTML Popup Type: esriServerHTMLPopupTypeNone

Object ID Field: OBJECTID

Unique ID Field:

Name : OBJECTID
IsSystemMaintained : True

Global ID Field:

Type ID Field:

Fields:
•	OBJECTID (type: esriFieldTypeOID, alias: OBJECTID, SQL Type: sqlTypeInteger, length: 0, nullable: false, editable: false)
•	DeliveryAccounts (type: esriFieldTypeString, alias: DeliveryAccounts, SQL Type: sqlTypeNVarchar, length: 256, nullable: true, editable: true)
•	Address (type: esriFieldTypeString, alias: Address, SQL Type: sqlTypeNVarchar, length: 256, nullable: true, editable: true)
•	Latitude (type: esriFieldTypeSingle, alias: Latitude, SQL Type: sqlTypeReal, nullable: true, editable: true)
•	Longitude (type: esriFieldTypeSingle, alias: Longitude, SQL Type: sqlTypeReal, nullable: true, editable: true)
•	Frequency (type: esriFieldTypeInteger, alias: Frequency, SQL Type: sqlTypeInteger, nullable: true, editable: true)
•	TruckMilesAvoided (type: esriFieldTypeSingle, alias: TruckMilesAvoided, SQL Type: sqlTypeReal, nullable: true, editable: true)
•	GalGasAvoided (type: esriFieldTypeSingle, alias: GalGasAvoided, SQL Type: sqlTypeReal, nullable: true, editable: true)
•	LbsCO2Avoided (type: esriFieldTypeSingle, alias: LbsCO2Avoided, SQL Type: sqlTypeReal, nullable: true, editable: true)
•	TotalLbsDelivered (type: esriFieldTypeSingle, alias: TotalLbsDelivered, SQL Type: sqlTypeReal, nullable: true, editable: true)

Templates:

Name: New Feature
Description:
Drawing Tool: esriFeatureEditToolPoint
Prototype:
Attributes:

Is Data Versioned: false

Supports Rollback On Failure Parameter: true

Last Edit Date: 3/16/2020 5:28:47 PM

Supported Operations:   Query   Query Top Features   Generate Renderer   Validate SQL


Explanation of Mapping Tools Used: 
The main tools used in my project are as follows: 

•	ArcGIS Pro to represent data spatially
•	ArcGIS Online to host a feature layer containing data 
•	ArcGIS JavaScript API to render interactive map on the web app
o	Used ESRI dark-gray basemap with references 
o	Followed along with the Thematic Multivariate visualization for a 2D map view example to represent the delivery accounts on a color ramp associated with the total pounds of produce delivered per account and a graduated symbol associated with the total pounds of CO2 avoided per account.
o	Popup Template property of the FeatureLayer module to create popups based on delivery accounts 
o	Used the Extent module to set the extent of map. Errors were encountered when a center property was set to the mapVew object, so a newExtent object was created. 
o	Used the Legend module to create a static legend on the map. Would have liked to make this collapsible had I more time. 
