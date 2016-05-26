require.config({
    
    baseUrl: "node_modules",
    
    paths: {
        'app':'../app',
        'angular': 'angular/angular.min',
        'angularAMD': 'angular-amd/angularAMD',
        'angular-route': 'angular-route/angular-route',
        'angular-resource': 'angular-resource/angular-resource.min',
        'jquery': 'jquery/dist/jquery.min',
        'owl-carousel': 'owl-carousel/dist/owl-carousel.min',
        'wow': '../hv_components/wow.min',
        
        'bootstrap': 'jsTemplate/bootstrap.min',
        'cbpFWTabs': 'jsTemplate/cbpFWTabs',
        'easing': 'jsTemplate/easing',
        'jquery-inview': 'jsTemplate/jquery-inview.min',
        'jquery-swipebox': 'jsTemplate/jquery-swipebox.min',
        'mousescroll': 'jsTemplate/mousescroll',
        'move-top': 'jsTemplate/move-top',
        'numscroller': 'jsTemplate/numscroller',




    },

    shim: { 

            angular: {
                exports: "angular"
            },
            
            'angularAMD': ['angular'], 
            'angular-route': ['angular'],
            'angular-resource': ['angular'],
            'owl-carousel': ['jquery'],
            'easing': ['jquery'],
            'move-top': ['jquery'],
            'numscroller': ['jquery'],
            'bootstrap': ['jquery'],
            'jquery-inview': ['jquery'],
            'jquery-swipebox': ['jquery']
         },
    deps: ['app']
});


