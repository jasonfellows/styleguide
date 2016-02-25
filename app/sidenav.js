import React from 'react';
import localLinks from 'local-links';

export default React.createClass({

  displayName: 'Sidenav',

  componentDidMount() {
    this.makeActiveLink();
  },

  componentDidUpdate() {
    this.makeActiveLink();
  },

  makeActiveLink() {
    let self = this;
    let pathname = window.location.pathname;
    let navItems = self.refs.navList.getDOMNode().querySelectorAll('a');

    for (let i = 0; i < navItems.length; i++) {
      let link = navItems.item(i).children.item(0);

      if (localLinks.active(link, pathname)) {
        navItems.item(i).classList.add('on');
      } else {
        navItems.item(i).classList.remove('on');
      }
    }
  },

  handleClick(e) {
    let pathname = localLinks.getLocalPathname(e);

    if (pathname) {
      e.preventDefault();
      window.router.history.navigate(pathname, {trigger: true});
    } else {
      return false;
    }
  },

  render() {
    return (
      <div className="main flex tall overflow-hidden" style={{width: '984px', margin: '0 auto'}}>
        <nav className="col-2 tall" role="navigation" onClick={this.handleClick}>
          <ul className="sidenav" ref="navList">
            <li><a href="/">Home</a></li>
            <li><a href="/layout">Layout</a></li>
            <li><a href="/base">Base Styles</a></li>
            <li><a href="/nav">Navigation</a></li>
            <li><a href="/tables">Tables + Lists</a></li>
            <li><a href="/forms">Forms</a></li>
            <li><a href="/buttons">Buttons</a></li>
            <li><a href="/icons">Icons</a></li>
            <li><a href="/popovers">Popovers</a></li>
            <li><a href="/modals">Modals</a></li>
            <li><a href="/view">View</a></li>
            <li><a href="/cards">Cards</a></li>
            <li><a href="/animations">Animations</a></li>
            <li><a href="/accordions">Accordions</a></li>
          </ul>
        </nav>
        <section className="content-container col-10 flex-auto tall">{this.props.children}</section>
      </div>
    );
  }
});
