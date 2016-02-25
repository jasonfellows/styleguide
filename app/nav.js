import React from 'react';
import localLinks from 'local-links';

export default React.createClass({

  displayName: 'NavContainer',

  componentDidMount() {
    this.makeActiveLink();
  },

  componentDidUpdate() {
    this.makeActiveLink();
  },

  makeActiveLink() {
    let self = this;
    let pathname = window.location.pathname;
    let navItems = self.refs.sidenavList.getDOMNode().querySelectorAll('a');

    for (let i = 0; i < navItems.length; i++) {
      let link = navItems.item(i).children.item(0);

      if (localLinks.active(link, pathname)) {
        navItems.item(i).classList.add('bg-white');
        navItems.item(i).classList.add('blue-70');
      } else {
        navItems.item(i).classList.remove('bg-white');
        navItems.item(i).classList.remove('blue-70');
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
        <View />
        <nav className="col-2 tall" role="navigation" onClick={this.handleClick}>
          <ul className="nav" ref="sidenavList">
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
