var FORM_URL = 'https://script.google.com/macros/s/AKfycbyWeyLXyFaMuzhrj9cPHd6Ayx7WYhYwuIk5N1nt_eIO_c1ekPDhOq3NzwmC06BMMGo1/exec?action=trelloform';

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: '',
      text: 'Assign Task',
      condition: 'always',
      callback: function(t) {
        return t.popup({
          title: 'Assign Task',
          url: FORM_URL,
          height: 430
        });
      }
    }];
  }
});
