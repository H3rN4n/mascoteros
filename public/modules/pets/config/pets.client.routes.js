'use strict';

//Setting up route
angular.module('pets').config(['$stateProvider',
	function($stateProvider) {
		// Pets state routing
		$stateProvider.
		state('qr', {
			url: '/qr',
			templateUrl: 'modules/pets/views/qr.client.view.html'
		}).
		state('app.listPets', {
			url: '/pets',
			templateUrl: 'modules/pets/views/list-pets.client.view.html'
		}).
		state('app.createPet', {
			url: '/pets/create',
			templateUrl: 'modules/pets/views/create-pet.client.view.html'
		}).
		state('app.viewPet', {
			url: '/pets/:petId',
			templateUrl: 'modules/pets/views/view-pet.client.view.html',
			controller: 'PetsController'
		}).
		state('app.editPet', {
			url: '/pets/:petId/edit',
			templateUrl: 'modules/pets/views/edit-pet.client.view.html'
		});
	}
]);
