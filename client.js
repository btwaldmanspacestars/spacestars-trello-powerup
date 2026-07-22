var FORM_URL = 'form.html';

function openAssignPopup(t) {
  return t.popup({
    title: 'Assign Task — SpaceStars',
    url: FORM_URL,
    height: 460
  });
}

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'icon.svg',
      text: 'Assign Task',
      condition: 'always',
      callback: openAssignPopup
    }];
  },
  'card-detail-badges': function (t, options) {
    return [{
      title: 'SpaceStars',
      text: '+ Task',
      icon: './plus-task-icon.svg',
      color: 'blue',
      callback: openAssignPopup
    }];
  }
});
