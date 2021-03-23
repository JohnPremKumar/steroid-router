import { pathToRegexp } from 'path-to-regexp';

const router = (routes, options = {}) => {
  const handleRoute = () => {
    const pathName = window.location.pathname;
    for (let itr = 0; itr < routes.length; itr += 1) {
      const { match } = routes[itr];
      const routeVars = [];
      const matcher = pathToRegexp(match, routeVars, options);
      const matched = matcher.exec(pathName);
      if (matched) {
        const routeData = {
          matched,
          params: {},
          state: window.history.state || {},
        };
        routeVars.forEach((value, index) => {
          routeData.params[value.name] = matched[index + 1];
        });
        routes[itr].action(routeData);
        break;
      }
    }
  };

  const navigateTo = (url, withStack = false, state = {}, title = '', action = true) => {
    if (!withStack) {
      window.history.replaceState(state, title, url);
    } else {
      window.history.pushState(state, title, url);
    }
    if (action) {
      handleRoute();
    }
  };

  const listener = () => {
    window.addEventListener('popstate', () => {
      handleRoute(routes);
    });

    window.addEventListener('click', (event) => {
      const { target } = event;
      if (target && target.className.includes('steroid-route')) {
        event.preventDefault();
        const currentPath = window.location.pathname;
        const path = target.getAttribute('href');
        const withStack = Boolean(target.getAttribute('data-withstack'));
        const withState = target.getAttribute('data-withstate');
        const withTitle = target.getAttribute('data-withtitle');
        let withAction = target.getAttribute('data-withaction');
        withAction = withAction ? Boolean(withAction) : true;
        navigateTo(path, (currentPath !== path && withStack), JSON.parse(withState), withTitle || '', withAction);
      }
    });
  };

  handleRoute();
  listener();

  return {
    navigateTo,
  };
};

export default router;
