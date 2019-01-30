
sap.ui.core.UIComponent.extend("smax.batch38.Product.Component",{
		metadata : {
			"rootView" : "smax.batch38.Product.view.AppView", // name of the view which gives App
			"routing" : {
				"config" : {
					"routerClass" : "sap.m.routing.Router"					
				},
				"routes" : [
					{
					  "pattern" : "",	
					  "name" : "home",
					  "viewName" : "smax.batch38.Product.view.Page1",
					  "viewType" : "XML",
					  "controlId" : "idApp",
					  "controlAggregation" : "pages"
					  
					},
					{
					  "pattern" : "toPage2",
					  "name" : "secondPage",
					  "viewName" : "smax.batch38.Product.view.Page2",
					  "viewType" : "XML",
					  "controlId" : "idApp",
					  "controlAggregation" : "pages"
					  
					}
					]
			}
		},
	init : function(){
		// providing Router to smax.batch38.Product
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}	
});





