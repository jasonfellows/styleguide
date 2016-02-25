import React from 'react';
import Styleguide from '../styleguide';
import Icon from '../../src/js/components/misc/icon';
import IconData from '../../src/lib/_icons';

export default React.createClass({
  displayName: "IconsPage",

  render() {
    return <Styleguide title="Icons">
      <div title="Names">
        {IconData.map(function(object, i){
          return <div key={i}>
            <Icon name={object.name} />
            <code>.icon-{object.name}</code>
          </div>;
        })}
      </div>
    </Styleguide>
  }
});
