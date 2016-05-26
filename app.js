define(['angularAMD',
		'angular-route',
		'jquery',
		'easing',
		'jquery-inview',
		'jquery-swipebox',
		'mousescroll',
		'move-top',
		'numscroller',
		'bootstrap',
		'cbpFWTabs',
		'owl-carousel',
		'wow'], 
		function (angularAMD, angularRoute, $) {
		    var app = angular.module("webapp", ['ngRoute']);
		    
		    app.constant("url", {
		    	//'environment': 'http://localhost:53740/'
		    	//'environment': 'http://ec2-52-11-118-155.us-west-2.compute.amazonaws.com/'
		    });

		    app.config(function ($routeProvider, $provide) {
		    	app.factory    = $provide.factory;

		        $routeProvider.when("/", angularAMD.route({
		            templateUrl: 'js/views/home.html', controller: 'HomeCtrl',
		            controllerUrl: '../js/controllers/home.controller'
		        }));

		    });
		      
		    return angularAMD.bootstrap(app);
		});