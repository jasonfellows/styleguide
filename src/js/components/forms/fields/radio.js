import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Radio",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    readOnly: Type.bool,
    checked: Type.bool,
    name: Type.string
  },

  getDefaultProps() {
    return {
      disabled: false,
      readonly: false,
      checked: false
    }
  },

  getInitialState() {
    return { isChecked: this.props.checked };
  },

  onChange() {
    if(!this.props.readOnly) {
      this.setState({isChecked: !this.state.isChecked})
    }
  },

  classes() {
    var classes = ['radio-field'];
    if(this.props.inactive) {
      classes.push('inactive');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return <div className={this.classes()}>
        <label>
          <input
            disabled={this.props.disabled}
            type="radio"
            name={this.props.name}>
          </input>
          <span className="right-label">{this.props.label}</span>
        </label>
      </div>
  }
});
