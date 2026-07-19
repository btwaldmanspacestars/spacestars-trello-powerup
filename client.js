var FORM_URL = 'form.html';

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
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
