import { helper } from '@ember/component/helper';
import Ember from 'ember';

export default helper(function ifStatements(params/*, hash*/) {
  Ember.Handlebars.registerHelper('debug', function (the_string) {
    Ember.Logger.log(the_string);
    // or simply
    console.log(the_string);
  });
});


