// ucfirst start
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
// ucfirst end

// callByString start
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
// callByString end