if (Meteor.isClient) {

  Router.map(function () {
    this.route('reel', {path: '/'})
    this.route('animationGallery', {path: '/animation-gallery'})
    this.route('stillGallery', {path: '/still-gallery'})
    this.route('otherWork', {path: '/other-work'})
    this.route('contact', {path: '/contact'})
  });


/*
  Template.header.rendered = function () {
    $(document).foundation();
  };

  Template.animationGallery.rendered = function () {
    $(document).foundation();
  };
  Template.stillGallery.rendered = function () {
    $(document).foundation();
  };*/
}

if (Meteor.isServer) {
 
}

Meteor.startup(function () {
  if (typeof(Router) !== 'undefined' && Router.onAfterAction) {
    Router.onAfterAction(function () {
      Deps.afterFlush(function () {
        $(document).foundation();
      });
    });
  } else {
    UI.body.rendered = function () {
      $(document).foundation();
    };
  }
});
