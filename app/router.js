import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main');
  this.route('listing');
  this.route('description');
  this.route('cart');
  this.route('about');
  this.route('contact');
});

export default Router;
