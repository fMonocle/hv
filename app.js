define(['angularAMD',
		'angular-route',
		'jquery'], 
		function (angularAMD, angularRoute, $) {  
		    var app = angular.module("webapp", ['ngRoute']);
		    
		    /*Esto sirve para configurar los ambientes de desarrollo y test
		      Se configuran estas constantes y se usan a traves de toda la app*/
		    app.constant("url", {
		    	//'environment': 'http://localhost:53740/'
		    	//'environment': 'http://ec2-52-11-118-155.us-west-2.compute.amazonaws.com/'
		    });
		    app.constant("frontEndHost", {
		    	//'env': 'http://localhost:8080/'
		    	//'env': 'http://monocle-bowtie.github.io/bowtie-ui/'
		    });
		    app.config(function ($routeProvider, $provide) {

		    	//Configuracion para que levanten los servicios
		    	app.factory    = $provide.factory;

		        $routeProvider.when("/", angularAMD.route({
		            templateUrl: 'js/views/home.html', controller: 'HomeCtrl',
		            controllerUrl: '../js/controllers/home.controller'
		        }));

		    });
		      
		    return angularAMD.bootstrap(app);
		});