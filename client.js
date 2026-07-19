var FORM_URL = 'form.html';

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'icon.svg',
      text: 'Assign Task',
      condition: 'always',
      callback: function (t) {
        return t.popup({
          title: 'Assign Task — SpaceStars',
          url: FORM_URL,
          height: 460
        });
      }
    }];
  }
});
