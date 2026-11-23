/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zfile/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
