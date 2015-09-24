if(!sudomakeModule) {
    var sudomakeModule = angular.module('Sudomake', []);
}

sudomakeModule.service('SudomakeServicebinderService', [function () {
    var _self = this;

    _self.bindService = function(ctrl, service, properties) {
        for(var i in properties) {
            (function(ctrl, service, property) {
                Object.defineProperty(ctrl, property, {
                    set : function(value) {
                        service.callByString('set' + property.ucfirst(), value);
                    },
                    get : function() {
                        return service.callByString('get' + property.ucfirst());
                    }

                })
            })(ctrl, service, properties[i])
        }
    };
}]);