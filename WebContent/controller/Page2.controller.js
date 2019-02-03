sap.ui.controller("smax.batch38.Product.controller.Page2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Page2
*/
	onInit: function() {
		
	 var oRouter = 	this.getOwnerComponent().getRouter();
 
	 	oRouter.getRoute("secondPage").attachPatternMatched(function(oEvent){
		 
		 var prodId = oEvent.getParameters().arguments.pid;
		
		 var sPath = "/ProductSet('"+prodId+"')"; //ProductSet('HT-1000')
		 debugger;
		 this.getView().bindElement(sPath);
		 
	 }, this)
	 
		//this - controller
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Page2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Page2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Page2
*/
//	onExit: function() {
//
//	}
	gotoPage1 : function(){
		this.getOwnerComponent().getRouter().navTo("home");
	}

});