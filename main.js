require.config({
    
    baseUrl: "node_modules",
    
    paths: {
        'app':'../app',
        'angular': 'angular/angular',
        'angularAMD': 'angular-amd/angularAMD',
        'angular-route': 'angular-route/angular-route'
    },

    shim: { 

            angular: {
                exports: "angular"
            },
            
            'angularAMD': ['angular'], 
            'angular-route': ['angular'],
            
         },
    deps: ['app']
});


