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

if (!String.prototype.ucfirst) {
    Object.defineProperty(String.prototype, 'ucfirst', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
    });
}

if (!Object.prototype.callByString) {
    Object.defineProperty(Object.prototype, 'callByString', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(str) {
            var arr = str.split(".");
            var fn = this;
            for (var i = 0, len = arr.length; i < len; i++) {
                fn = fn[arr[i]];
            }
            if (typeof fn !== "function") {
                throw new Error("function not found");
            }
            var args = Array.prototype.slice.call(arguments, 1);
            return fn.apply(this, args);
        }
    });
}