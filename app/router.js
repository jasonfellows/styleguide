import AccordionsPage from './pages/accordions';
import AnimationsPage from './pages/animations';
import BasePage from './pages/base';
import ButtonsPage from './pages/buttons';
import FormsPage from './pages/forms';
import HomePage from './pages/home';
import IconsPage from './pages/icons';
import LayoutPage from './pages/layout';
import ModalsPage from './pages/modals';
import Nav from './nav';
import PopoversPage from './pages/popovers';
import React from 'react';
import Router from 'ampersand-router';
import Sidenav from './sidenav';
import TablesPage from './pages/tables';
import ViewActions from '../src/js/components/view/actions/view-actions';
import ViewPage from './pages/view';

let appContainer = document.getElementById('app');

export default Router.extend({
  renderPage(Page) {
    ViewActions.flush();
    const main = React.createElement(Sidenav, {}, React.createElement(Page));

    React.render(main, appContainer);
  },

  routes: {
    '': 'home',
    'accordions': 'accordions',
    'animations': 'animations',
    'base': 'base',
    'buttons': 'buttons',
    'forms': 'forms',
    'icons': 'icons',
    'layout': 'layout',
    'modals': 'modals',
    'popovers': 'popovers',
    'tables': 'tables',
    'view': 'view'
  },

  accordions() {
    this.renderPage(AccordionsPage);
  },

  animations() {
    this.renderPage(AnimationsPage);
  },

  base() {
    this.renderPage(BasePage);
  },

  buttons() {
    this.renderPage(ButtonsPage);
  },

  forms() {
    this.renderPage(FormsPage);
  },

  home() {
    this.renderPage(HomePage);
  },

  icons() {
    this.renderPage(IconsPage);
  },

  layout() {
    this.renderPage(LayoutPage);
  },

  modals() {
    this.renderPage(ModalsPage);
  },

  popovers() {
    this.renderPage(PopoversPage);
  },

  tables() {
    this.renderPage(TablesPage);
  },

  view() {
    this.renderPage(ViewPage);
  }
});
