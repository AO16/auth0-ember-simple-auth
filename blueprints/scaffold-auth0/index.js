var EmberRouterGenerator = require('ember-router-generator');
var path        = require('path');
var fs          = require('fs-extra');

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
   addRouteToRouter({
      root: options.project.root,
      path: options.path
    });
  }

};

function addRouteToRouter(options) {
  var routerPath = path.join(options.root, 'app', 'router.js');
  var source = fs.readFileSync(routerPath, 'utf-8');

  var routes = new EmberRouterGenerator(source);
  var protectedRoute = routes.add('protected', options);
  var loginRoute = routes.add('protected', options);

  fs.writeFileSync(protectedRoute, newRoutes.code());
  fs.writeFileSync(loginRoute, newRoutes.code());
}
