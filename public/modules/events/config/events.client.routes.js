'use strict';

//Setting up route
angular.module('events').config(['$stateProvider',
	function($stateProvider) {
		// Events state routing
		$stateProvider.
		state('app.listEvents', {
			url: '/eventos',
			templateUrl: 'modules/events/views/list-events.client.view.html'
		}).
		state('app.createEvent', {
			url: '/events/create',
			templateUrl: 'modules/events/views/create-event.client.view.html'
		}).
		state('app.viewEvent', {
			url: '/eventos/:eventId',
			templateUrl: 'modules/events/views/view-event.client.view.html'
		}).
		state('app.viewEventBySlug', {
			url: '/evento/:slug',
			templateUrl: 'modules/events/views/view-event.client.view.html'
		}).
		state('app.editEvent', {
			url: '/events/:eventId/edit',
			templateUrl: 'modules/events/views/edit-event.client.view.html'
		});
	}
]);
