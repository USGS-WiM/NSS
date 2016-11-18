/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        baseURL:'/src',
        paths: {
            // paths serve as alias
            'npm:': '../node_modules/'
        },//end path
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
            'angular-2-dropdown-multiselect/src/multiselect-dropdown': '../node_modules/angular-2-dropdown-multiselect/src/multiselect-dropdown.js',
            'angular2-toaster': 'npm:angular2-toaster',
            'angular2-highcharts': 'npm:angular2-highcharts',
            // This mapping is for loading Highcharts static API and Highcharts modules
            'highcharts': 'npm:highcharts',
            'ng2-page-scroll': 'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',
        },//end map
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-toaster': {                
                defaultExtension: 'js'
            },
            'angular2-highcharts': {
                main: './index.js',
                defaultExtension: 'js'
            },
           'highcharts': {
            // NOTE: You should set './highcharts.src.js' here
            // if you are not going to use <chart type="StockChart"
                main: './highstock.src.js',
                defaultExtension: 'js'
           }   

        }//end package
    });
})(this);