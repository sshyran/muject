module.exports = function (require) {

  return function inject (module, deps, exports) {

    exports = {};

    if (module === '' + module) module = require(module);

    return (deps = deps || module.inject) ?
    module.apply(exports, deps.map(function (dep) {
      return inject[dep];
    })) || exports : module;

  };

};
