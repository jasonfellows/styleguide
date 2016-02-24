import AccordionsPage from './pages/accordions';
import AnimationsPage from './pages/animations';
import BasePage from './pages/base';
import ButtonsPage from './pages/buttons';
import CardsPage from './pages/cards';
import FormsPage from './pages/forms';
import HomePage from './pages/home';
import IconsPage from './pages/icons';
import LayoutPage from './pages/layout';
import ModalsPage from './pages/modals';
import NavPage from './pages/nav';
import PopoversPage from './pages/popovers';
import React from 'react';
import Router from 'ampersand-router';
import SidenavContainer from './sidenav-container';
import TablesPage from './pages/tables';
import ViewActions from './components/view/actions/view-actions';
import ViewPage from './pages/view';

let appContainer = document.getElementById('app');

export default Router.extend({
  renderPage(Page) {
    ViewActions.flush();
    const main = React.createElement(SidenavContainer, {}, React.createElement(Page));

    React.render(main, appContainer);
  },

  routes: {
    '': 'home',
    'layout': 'layout',
    'base': 'base',
    'nav': 'nav',
    'tables': 'tables',
    'forms': 'forms',
    'buttons': 'buttons',
    'popovers': 'popovers',
    'modals': 'modals',
    'view': 'view',
    'cards': 'cards',
    'icons': 'icons',
    'animations': 'animations',
    'accordions': 'accordions'
  },

  home() {
    this.renderPage(HomePage);
  },

  layout() {
    this.renderPage(LayoutPage);
  },

  base() {
    this.renderPage(BasePage);
  },

  nav() {
    this.renderPage(NavPage);
  },

  tables() {
    this.renderPage(TablesPage);
  },

  forms() {
    this.renderPage(FormsPage);
  },

  buttons() {
    this.renderPage(ButtonsPage);
  },

  popovers() {
    this.renderPage(PopoversPage);
  },

  modals() {
    this.renderPage(ModalsPage);
  },

  view() {
    this.renderPage(ViewPage);
  },

  cards() {
    this.renderPage(CardsPage);
  },

  icons() {
    this.renderPage(IconsPage);
  },

  animations() {
    this.renderPage(AnimationsPage);
  },
  accordions() {
    this.renderPage(AccordionsPage);
  }


});
