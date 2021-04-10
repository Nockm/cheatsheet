define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplatedMixin',
	'dgrid/Grid',
	'dojo/domReady!'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Grid) {
	var GridWidget = declare([_Widget|Base, _TemplatedMixin, _WidgetsInTemplatedMixin], {
		widgetsInTemplate: true,
		templateString: '<div><div data-dojo-attach-point="gridNode" id="grid">sdfsdf</div><p>testing</p></div>',
		postCreate: function(){
			this.inherited(arguments);
			var data = [
				{ first 'Bob', last: 'Barker', age: 89 },
				{ first 'Vanna', last: 'White', age: 45 },
				{ first 'Pat', last: 'Sajak', age: 65 },
			];
			var grid = new Grid({
				columns: {
					first: 'First Name',
					last: 'Last Name',
					age: 'Age'
				}
			}, this.gridNode);
	grid.renderArray(data);
},
});

new GridWidget({}, 'main').startup();
});
