// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/PocketTheme/panels/PocketPanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-panel-title" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"max-btn jimu-vcenter jimu-float-trailing" data-dojo-attach-point\x3d"maxNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\r\n    \x3cdiv class\x3d"empty-tip"\x3e${nls.emptyPanelTip}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/query dojo/_base/html dojo/topic dijit/_TemplatedMixin dojo/text!./Panel.html jimu/BaseWidgetPanel jimu/utils".split(" "),function(g,h,k,d,c,e,l,m,n,f){return g([n,l],{baseClass:"jimu-panel jimu-pocket-panel",templateString:m,postCreate:function(){this.inherited(arguments);this.own(k(this.maxNode,"click",h.hitch(this,"_onMaxBtnClicked")))},startup:function(){var a;a=this.getAllWidgetConfigs();a=Array.isArray(this.config.widgets)?this.config.widgets:
[this.config];0<a.length&&c.empty(this.containerNode);this._setPosition();this.inherited(arguments)},resize:function(){this._setPosition()},destroy:function(){var a;if(a=document.getElementById(this.baseClass+"positionCSS"))a.disabled=!0;a=d(".esriControlsBR");window.isRTL?c.setStyle(a[0],{left:"0px"}):c.setStyle(a[0],{right:"0px"});this.inherited(arguments)},_isShowingPanelOfMobileMode:function(){return window.appInfo.isRunInMobile&&760>=window.innerWidth?!0:!1},_onMaxBtnClicked:function(a){a.stopPropagation();
this._isShowingPanelOfMobileMode()&&("maximized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.maximizePanel(this),this._setPosition())},_setPosition:function(){var a,b,d;a=f.getPositionStyle(this.position);b=this.panelManager.getPanelById(this.id);this._isShowingPanelOfMobileMode()?(a.width="100%",a.right="0",a.left="0",a.bottom="0","maximized"===this.windowState?(a.height="100%",a.width="100%",a.top="0",e.publish("changeMapPosition",{bottom:"0"})):(a.height="50%",a.width=
"100%",a.top="50%",e.publish("changeMapPosition",{bottom:"50%"})),c.setStyle(b.domNode,a),c.place(b.domNode,jimuConfig.layoutId),c.setStyle(b.titleNode,"display","block"),d=b.titleNode.offsetHeight,c.setStyle(b.containerNode,{height:"calc(100% - "+d+"px)"})):(a.height="auto",b.titleNode&&c.setStyle(b.titleNode,"display","none"),c.setStyle(b.containerNode,{height:"100%"}),e.publish("changeMapPosition",{bottom:"0px"}),c.place(b.domNode,jimuConfig.mapId),c.setStyle(b.domNode,a));this._setAttributionAndLogoPosition(a);
"auto"===a.right&&!window.isRTL||"15px"===a.right&&window.isRTL?this._setPositionStyles(!0):this._setPositionStyles(!1)},_setAttributionAndLogoPosition:function(a){var b;(b=d(".esriControlsBR"))&&0<b.length&&"auto"===a.left?c.setStyle(b[0],{right:"380px"}):b&&0<b.length&&("auto"===a.right&&window.isRTL?c.setStyle(b[0],{left:"380px"}):"auto"!==a.right&&window.isRTL?c.setStyle(b[0],{left:"0px"}):c.setStyle(b[0],{right:"0px"}))},_setPositionStyles:function(a){var b;b=document.getElementById(this.baseClass+
"positionCSS");a?b?b.disabled=!1:(a=f.getUriInfo(this.uri),f.loadStyleLink(this.baseClass+"positionCSS",a.folderUrl+"positions.css",null)):b&&(b.disabled=!0)}})});