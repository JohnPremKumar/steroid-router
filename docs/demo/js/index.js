function innerHTML (id, string) {
  document.getElementById(id).innerHTML = string;
}

function courseRoute (data) {
  let params = data.params;
  if (params.courseName) {
    innerHTML('root', '<h1>This is a ' + params.courseName + ' course page</h1><a class="steroid-route" href="/course">Back</a>');
  } else {
    innerHTML('root', '<h1>This is a main course page</h1><a class="steroid-route" href="/course/javascript" data-withstack="true">Javascript</a>');
  }
}

function merchandiseRoute (data) {
  let params = data.params;
  if (params.category) {
    innerHTML('root', '<h1>This is a ' + params.category + ' merchandise page</h1><a class="steroid-route" href="/merchandise">Back</a>');
  } else {
    innerHTML('root', '<h1>This is a main merchandise page</h1><a class="steroid-route" href="/merchandise/cards" data-withstack="true">Cards</a>');
  }
}

function dashboardRoute (data) {
  innerHTML('root', '<h1>This is a dashboard page</h1>');
}

function routeNotFound (data) {
  innerHTML('root', '<h1>Oops! This page does not exist</h1>');
}

function indexRoute (data) {
  innerHTML('root', '<h1>This is index page</h1>');
}

(function () {
  let routeHander = router([{
    match: '/course/:courseName?',
    action: courseRoute
  }, {
    match: '/merchandise/:category?',
    action: merchandiseRoute
  }, {
    match: '/dashboard',
    action: dashboardRoute
  }, {
    match: '/',
    action: indexRoute
  }, {
    match: '(.*)',
    action: routeNotFound
  }]);


})();
