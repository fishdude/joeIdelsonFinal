if (Meteor.isClient) {

  Router.map(function () {
    this.route('reel', {path: '/'})
    this.route('animationGallery', {path: '/animation-gallery'})
    this.route('stillGallery', {path: '/still-gallery'})
    this.route('contact', {path: '/contact'})
  });



  Template.header.rendered = function () {
    $(document).foundation();
  };

  Template.animationGallery.rendered = function () {
    $(document).foundation();
  };
  Template.stillGallery.rendered = function () {
    $(document).foundation();
  };
}

if (Meteor.isServer) {
  
}
