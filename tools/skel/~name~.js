if (Meteor.isClient) {
  Template.hello({
    greeting: function () {
      return "Welcome to ~name~.";
    },

    rendered: function () {
      var self = this;
      // There will be event maps that do delegation
      // on the DOM range of the component for you.
      //
      // If there's some unconditional node to hang
      // event handlers on, it's perfectly fine to use
      // jQuery event handlers manually.
      self.$("input").on('click', function () {
        // No way to get the current event data at the
        // moment except:
        // `var data = self.findByElement(evt.currentTarget).data();`
        //
        // You have full access to `self`, so it's only sucky
        // if you want data that's down inside the body of
        // an `#each` or `#if` or another component.
        //
        // Event maps will dig out the current data for you.

        if (typeof console !== 'undefined')
          console.log("You pressed the button");
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
