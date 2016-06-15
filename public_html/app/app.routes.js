/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('tratoApp')
        .config(function($routeProvider){
            // remove o # da url
            
            $routeProvider
                .when('/', {
                    templateUrl : 'app/components/home/homeView.html',
                    controller : 'homeCtrl',
                })
                .when('/cadastro', {
                    templateUrl : 'app/components/cadastro/cadastroView.html',
                    controller : 'cadastroCtrl',
                })
                .when('/buscaimovel', {
                    templateUrl : 'app/components/buscaimovel/buscaView.html',
                    controller : 'buscaImovelCtrl',
                })
                .when('/corretor/:id', {
                    templateUrl : 'app/components/corretor/corretorView.html',
                    controller : 'corretorCtrl',
                })
                .when('/imovel/:id', {
                    templateUrl : 'app/components/imovel/imovelView.html',
                    controller : 'imovelCtrl',
                })
                .when('/locatario/:id', {
                    templateUrl : 'app/components/locatario/locatarioView.html',
                    controller : 'locatarioCtrl',
                })
                .when('/perfil', {
                    templateUrl : 'app/components/perfil/perfilView.html',
                    controller : 'perfilCtrl',
                })
                .when('/agenda/:id', {
                    templateUrl : 'app/components/agenda/agendaView.html',
                    controller : 'corretorCtrl',
                })
                .when('/contato', {
                    templateUrl : 'app/components/contato/contatoView.html',
                    controller : 'contatoCtrl',
                })
                        .otherwise({redirectTo:'/'});
        });
