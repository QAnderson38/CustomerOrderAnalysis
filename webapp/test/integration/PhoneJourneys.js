jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/demo/northwind/coa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/demo/northwind/coa/test/integration/pages/App",
	"com/sap/demo/northwind/coa/test/integration/pages/Browser",
	"com/sap/demo/northwind/coa/test/integration/pages/Master",
	"com/sap/demo/northwind/coa/test/integration/pages/Detail",
	"com/sap/demo/northwind/coa/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.demo.northwind.coa.view."
	});

	sap.ui.require([
		"com/sap/demo/northwind/coa/test/integration/NavigationJourneyPhone",
		"com/sap/demo/northwind/coa/test/integration/NotFoundJourneyPhone",
		"com/sap/demo/northwind/coa/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});