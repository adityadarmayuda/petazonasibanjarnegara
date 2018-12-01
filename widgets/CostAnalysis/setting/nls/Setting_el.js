// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b4\u03b9\u03b1\u03bc.:",generalSettings:{tabTitle:"\u0393\u03b5\u03bd\u03b9\u03ba\u03ad\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2",measurementUnitLabel:"\u039c\u03bf\u03bd\u03ac\u03b4\u03b1 \u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7\u03c2",currencyLabel:"\u03a3\u03cd\u03bc\u03b2\u03bf\u03bb\u03bf \u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7\u03c2",
roundCostLabel:"\u039a\u03cc\u03c3\u03c4\u03bf\u03c2 \u03c3\u03c4\u03c1\u03bf\u03b3\u03b3\u03c5\u03bb\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2",projectOutputSettings:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03b5\u03be\u03cc\u03b4\u03bf\u03c5 \u03ad\u03c1\u03b3\u03bf\u03c5",typeOfProjectAreaLabel:"\u03a4\u03cd\u03c0\u03bf\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae\u03c2 \u03ad\u03c1\u03b3\u03bf\u03c5",bufferDistanceLabel:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b6\u03ce\u03bd\u03b7\u03c2",
roundCostValues:{twoDecimalPoint:"\u0394\u03cd\u03bf \u03c5\u03c0\u03bf\u03b4\u03b9\u03b1\u03c3\u03c4\u03bf\u03bb\u03ad\u03c2",nearestWholeNumber:"\u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf\u03c2 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",nearestTen:"\u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b4\u03b5\u03ba\u03ac\u03b4\u03b5\u03c2",nearestHundred:"\u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b5\u03ba\u03b1\u03c4\u03bf\u03bd\u03c4\u03ac\u03b4\u03b5\u03c2",
nearestThousand:"\u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c7\u03b9\u03bb\u03b9\u03ac\u03b4\u03b5\u03c2",nearestTenThousands:"\u03a0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b4\u03b5\u03ba\u03ac\u03b4\u03b5\u03c2 \u03c7\u03b9\u03bb\u03b9\u03ac\u03b4\u03b5\u03c2"},projectAreaType:{outline:"\u03a0\u03b5\u03c1\u03af\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1",buffer:"\u03a0\u03c1\u03bf\u03c3\u03c9\u03c1\u03b9\u03bd\u03ae \u03bc\u03bd\u03ae\u03bc\u03b7"},
errorMessages:{currency:"\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03bd\u03bf\u03bc\u03b9\u03c3\u03bc\u03b1\u03c4\u03b9\u03ba\u03ae \u03bc\u03bf\u03bd\u03ac\u03b4\u03b1",bufferDistance:"\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b6\u03ce\u03bd\u03b7\u03c2",outOfRangebufferDistance:"\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc 0 \u03ba\u03b1\u03b9 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03b7 \u03ae \u03af\u03c3\u03b7 \u03bc\u03b5 100"}},
projectSettings:{tabTitle:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03ad\u03c1\u03b3\u03bf\u03c5",costingGeometrySectionTitle:"\u039a\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b3\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03af\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03ba\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",costingGeometrySectionNote:"\u03a3\u03b7\u03bc\u03b5\u03af\u03c9\u03c3\u03b7: \u0397 \u03b4\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03b1\u03c5\u03c4\u03bf\u03cd \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03bd\u03b1 \u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03b5\u03be\u03b9\u03c3\u03ce\u03c3\u03b5\u03b9\u03c2 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 \u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03c9\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03bc\u03b5 \u03b2\u03ac\u03c3\u03b7 \u03b3\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ad\u03c2 \u03b8\u03ad\u03c3\u03b5\u03b9\u03c2.",
projectTableSectionTitle:"\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7\u03c2/\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03c9\u03bd \u03ad\u03c1\u03b3\u03bf\u03c5 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",projectTableSectionNote:"\u03a3\u03b7\u03bc\u03b5\u03af\u03c9\u03c3\u03b7: \u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03ba\u03b1\u03b9 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03c9\u03bd \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03b5\u03b9/\u03c6\u03bf\u03c1\u03c4\u03ce\u03c3\u03b5\u03b9 \u03c4\u03bf \u03ad\u03c1\u03b3\u03bf \u03b3\u03b9\u03b1 \u03bc\u03b5\u03c4\u03ad\u03c0\u03b5\u03b9\u03c4\u03b1 \u03c7\u03c1\u03ae\u03c3\u03b7.",
costingGeometryLayerLabel:"Geometry Layer \u039a\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",fieldLabelGeography:"\u03a0\u03b5\u03b4\u03af\u03bf \u03b3\u03b9\u03b1 \u03b3\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1\u03c2",projectAssetsTableLabel:"\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03ad\u03c1\u03b3\u03bf\u03c5",projectMultiplierTableLabel:"\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03b5\u03c0\u03b9\u03c0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c4\u03bf\u03c5 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03b1\u03c3\u03b9\u03b1\u03c3\u03c4\u03ae \u03ad\u03c1\u03b3\u03bf\u03c5",
projectLayerLabel:"Project Layer",configureFieldsLabel:"\u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",fieldDescriptionHeaderTitle:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c0\u03b5\u03b4\u03af\u03bf\u03c5",layerFieldsHeaderTitle:"\u03a0\u03b5\u03b4\u03af\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",selectLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",errorMessages:{duplicateLayerSelection:"${layerName} \u03ad\u03c7\u03b5\u03b9 \u03ae\u03b4\u03b7 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03b5\u03af",
invalidConfiguration:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 ${fieldsString}"},costingGeometryHelp:"\x3cp\x3e\u0398\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 (\u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9) \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc(\u03ac) \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf(\u03b1) \u03c0\u03bf\u03bb\u03cd\u03b3\u03c9\u03bd\u03bf\u03c5 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b5\u03be\u03ae\u03c2 \u03c3\u03c5\u03bd\u03b8\u03ae\u03ba\u03b5\u03c2: \x3cbr/\x3e \x3cli\x3e\t\u03a4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u00e2\u20ac\u0153Query\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e\t\u03a4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1 \u03c0\u03b5\u03b4\u03af\u03bf GlobalID\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3e\u03a4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03b1 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b7\u03c4\u03b9\u03ba\u03ac \u03c0\u03b5\u03b4\u03af\u03b1 \u03c4\u03bf\u03c5 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf\u03c5 \u00e2\u20ac\u0153Geometry layer \u03ba\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2\u00e2\u20ac\u009d \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf \u03c0\u03c4\u03c5\u03c3\u03c3\u03cc\u03bc\u03b5\u03bd\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf \u00e2\u20ac\u0153\u0393\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03af\u03b1 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03c3\u03b5 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1\u00e2\u20ac\u009d.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3e\u039f (\u039f\u03b9) \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2(\u03b5\u03c2) \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b5\u03be\u03ae\u03c2 \u03c3\u03c5\u03bd\u03b8\u03ae\u03ba\u03b5\u03c2 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9: \x3cbr/\x3e \x3cli\x3e\u039f \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b1 \u00e2\u20ac\u0153\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1\u00e2\u20ac\u009d, \u00e2\u20ac\u0153\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u00e2\u20ac\u009d \u03ba\u03b1\u03b9 \u00e2\u20ac\u0153\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3e\u039f \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03ad\u03be\u03b9 \u03c0\u03b5\u03b4\u03af\u03b1 \u03bc\u03b5 \u03b1\u03ba\u03c1\u03b9\u03b2\u03ad\u03c2 \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e\t\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e\tTemplateName (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e    GeographyGUID (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3e\u039f (\u039f\u03b9) \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2(\u03b5\u03c2) \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b5\u03be\u03ae\u03c2 \u03c3\u03c5\u03bd\u03b8\u03ae\u03ba\u03b5\u03c2 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9: \x3cbr/\x3e \x3cli\x3e\u039f \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b1 \u00e2\u20ac\u0153\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1\u00e2\u20ac\u009d, \u00e2\u20ac\u0153\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u00e2\u20ac\u009d \u03ba\u03b1\u03b9 \u00e2\u20ac\u0153\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7\u00e2\u20ac\x3c/li\x3e    \x3cli\x3e\u039f \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03c0\u03ad\u03bd\u03c4\u03b5 \u03c0\u03b5\u03b4\u03af\u03b1 \u03bc\u03b5 \u03b1\u03ba\u03c1\u03b9\u03b2\u03ad\u03c2 \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\t\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e\t\u03a4\u03cd\u03c0\u03bf\u03c2 (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e\t\u03a4\u03b9\u03bc\u03ae (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03ba\u03b9\u03bd\u03b7\u03c4\u03ae\u03c2 \u03b8\u03ad\u03c3\u03b7\u03c2/\u03b4\u03b9\u03c0\u03bb\u03bf\u03cd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5)\x3c/li\x3e\x3cli\x3e\tCostindex (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c5)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 GUID))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3e\u03a4\u03bf (\u03a4\u03b1) \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc(\u03ac) \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf(\u03b1) \u03c0\u03bf\u03bb\u03c5\u03b3\u03ce\u03bd\u03bf\u03c5 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b5\u03be\u03ae\u03c2 \u03c3\u03c5\u03bd\u03b8\u03ae\u03ba\u03b5\u03c2 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9(\u03bf\u03bd\u03c4\u03b1\u03b9): \x3cbr/\x3e \x3cli\x3e\u03a4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b1 \u00e2\u20ac\u0153\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1\u00e2\u20ac\u009d, \u00e2\u20ac\u0153\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u00e2\u20ac\u009d \u03ba\u03b1\u03b9 \u00e2\u20ac\u0153\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3e\u03a4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03c0\u03ad\u03bd\u03c4\u03b5 \u03c0\u03b5\u03b4\u03af\u03b1 \u03bc\u03b5 \u03b1\u03ba\u03c1\u03b9\u03b2\u03ad\u03c2 \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3e\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2)\x3c/li\x3e\x3cli\x3eTotalassetcost (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03ba\u03b9\u03bd\u03b7\u03c4\u03ae\u03c2 \u03b8\u03ad\u03c3\u03b7\u03c2/\u03b4\u03b9\u03c0\u03bb\u03bf\u03cd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5)\x3c/li\x3e\x3cli\x3eGrossprojectcost (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 \u03ba\u03b9\u03bd\u03b7\u03c4\u03ae\u03c2 \u03b8\u03ad\u03c3\u03b7\u03c2/\u03b4\u03b9\u03c0\u03bb\u03bf\u03cd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5)\x3c/li\x3e\x3cli\x3eGlobalID (\u03c0\u03b5\u03b4\u03af\u03bf \u03c4\u03cd\u03c0\u03bf\u03c5 GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",layerNameHeaderTitle:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",layerNameHeaderTooltip:"\u039b\u03af\u03c3\u03c4\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03c9\u03bd \u03c3\u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7",
EditableLayerHeaderTitle:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03ac\u03c3\u03b9\u03bc\u03bf",EditableLayerHeaderTooltip:"\u03a3\u03c5\u03bc\u03c0\u03b5\u03c1\u03af\u03bb\u03b7\u03c8\u03b7 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c4\u03c9\u03bd \u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03c9\u03bd \u03c4\u03bf\u03c5 \u03c3\u03c4\u03bf widget \u03ba\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",
SelectableLayerHeaderTitle:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03b9\u03bc\u03bf",SelectableLayerHeaderTooltip:"\u0397 \u03b3\u03b5\u03c9\u03bc\u03b5\u03c4\u03c1\u03af\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b5\u03bd\u03cc\u03c2 \u03bd\u03ad\u03bf\u03c5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2",
fieldPickerHeaderTitle:"ID \u03ad\u03c1\u03b3\u03bf\u03c5 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",fieldPickerHeaderTooltip:"\u03a0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc \u03c0\u03b5\u03b4\u03af\u03bf (\u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2 \u03c4\u03cd\u03c0\u03bf\u03c5) \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03c4\u03bf\u03c5 ID \u03ad\u03c1\u03b3\u03bf\u03c5 \u03c3\u03b5",
selectLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",noAssetLayersAvailable:"\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03c3\u03c4\u03bf\u03bd \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf webmap.",disableEditableCheckboxTooltip:"\u03a3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b4\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2",
missingCapabilitiesMsg:"\u0391\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b1\u03c5\u03c4\u03cc \u03bb\u03b5\u03af\u03c0\u03bf\u03c5\u03bd \u03bf\u03b9 \u03b5\u03be\u03ae\u03c2 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2:",missingGlobalIdMsg:"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b4\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03c0\u03b5\u03b4\u03af\u03bf GlobalId.",
create:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1",update:"\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7","delete":"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae"},costingInfo:{tabTitle:"\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03ba\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",proposedMainsLabel:"\u03a0\u03c1\u03bf\u03c4\u03b5\u03b9\u03bd\u03cc\u03bc\u03b5\u03bd\u03b1 \u03b2\u03b1\u03c3\u03b9\u03ba\u03ac",addCostingTemplateLabel:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03bf\u03c5 \u03ba\u03bf\u03c3\u03c4\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",
manageScenariosTitle:"\u0394\u03b9\u03b1\u03c7\u03b5\u03af\u03c1\u03b9\u03c3\u03b7 \u03c3\u03b5\u03bd\u03b1\u03c1\u03af\u03c9\u03bd",featureTemplateTitle:"\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5",costEquationTitle:"\u0395\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2",geographyTitle:"\u0393\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ae \u03b8\u03ad\u03c3\u03b7",scenarioTitle:"\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf",
actionTitle:"\u0395\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b5\u03c2",scenarioNameLabel:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03c3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5",addBtnLabel:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7",srNoLabel:"\u0391\u03c1.",deleteLabel:"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",duplicateScenarioName:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5 \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5",
hintText:"\x3cdiv\x3e\u03a5\u03c0\u03cc\u03b4\u03b5\u03b9\u03be\u03b7: \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b5\u03c2 \u03bb\u03ad\u03be\u03b5\u03b9\u03c2-\u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03c4\u03bf\u03bd \u03c3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03cc \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03af\u03b4\u03b9\u03bf\u03c5 \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03b3\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ae \u03b8\u03ad\u03c3\u03b7\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03bc\u03ad\u03b1 \u03b3\u03b9\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03bb\u03c5\u03b3\u03ce\u03bd\u03bf\u03c5\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03c4\u03bf \u03c3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03cc \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b3\u03b9\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03ae \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae \u03b3\u03b9\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03bb\u03c5\u03b3\u03ce\u03bd\u03bf\u03c5 \u03c4\u03bf\u03c5 \u03af\u03b4\u03b9\u03bf\u03c5 \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03b3\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ae \u03b8\u03ad\u03c3\u03b7\x3c/li\x3e\x3c/ul\x3e\u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03c4\u03b5 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b5\u03c2 \u03cc\u03c0\u03c9\u03c2:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3e\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b1\u03bd\u03ac\u03b3\u03ba\u03b7 \u03c4\u03bf\u03c5 \u03ad\u03c1\u03b3\u03bf\u03c5 \u03c3\u03b1\u03c2.",
noneValue:"\u039a\u03b1\u03bd\u03ad\u03bd\u03b1",requiredCostEquation:"\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 \u03b3\u03b9\u03b1 ${layerName} : ${templateName}",duplicateTemplateMessage:"\u03a5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03b4\u03b9\u03c0\u03bb\u03ae \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03bf\u03c5 \u03b3\u03b9\u03b1 ${layerName} : ${templateName}",
defaultEquationRequired:"\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b7 \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 ${layerName} : ${templateName}",validCostEquationMessage:"\u0395\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2",costEquationHelpText:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b1\u03bd\u03ac\u03b3\u03ba\u03b7 \u03c4\u03bf\u03c5 \u03ad\u03c1\u03b3\u03bf\u03c5 \u03c3\u03b1\u03c2",
scenarioHelpText:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf \u03c3\u03cd\u03bc\u03c6\u03c9\u03bd\u03b1 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b1\u03bd\u03ac\u03b3\u03ba\u03b7 \u03c4\u03bf\u03c5 \u03ad\u03c1\u03b3\u03bf\u03c5 \u03c3\u03b1\u03c2",copyRowTitle:"\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",noTemplateAvailable:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03c0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf \u03b3\u03b9\u03b1 ${layerName}",
manageScenarioLabel:"\u0394\u03b9\u03b1\u03c7\u03b5\u03af\u03c1\u03b9\u03c3\u03b7 \u03c3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5",noLayerMessage:"\u0395\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03c4\u03bf ${tabName}",noEditableLayersAvailable:"\u03a4\u03bf (\u03a4\u03b1) \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc(\u03ac) \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf(\u03b1) \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03b5\u03af \u03c9\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03ac\u03c3\u03b9\u03bc\u03bf \u03c3\u03c4\u03b7\u03bd \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b1 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03c9\u03bd \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5"},
statisticsSettings:{tabTitle:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2",addStatisticsLabel:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd",fieldNameTitle:"\u03a0\u03b5\u03b4\u03af\u03bf",statisticsTitle:"\u0395\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1",addNewStatisticsText:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bd\u03ad\u03c9\u03bd \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd",
deleteStatisticsText:"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd",moveStatisticsUpText:"\u039c\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u03b5\u03c0\u03ac\u03bd\u03c9",moveStatisticsDownText:"\u039c\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u03ba\u03ac\u03c4\u03c9",selectDeselectAllTitle:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd"},
statisticsType:{countLabel:"\u03a0\u03bb\u03ae\u03b8\u03bf\u03c2",averageLabel:"\u039c\u03ad\u03c3\u03bf\u03c2 \u03cc\u03c1\u03bf\u03c2",maxLabel:"\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf",minLabel:"\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf",summationLabel:"\u0386\u03b8\u03c1\u03bf\u03b9\u03c3\u03b7",areaLabel:"\u0395\u03bc\u03b2\u03b1\u03b4\u03cc\u03bd",lengthLabel:"\u039c\u03ae\u03ba\u03bf\u03c2"},_localized:{}}});