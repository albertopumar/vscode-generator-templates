import { LitElement, html } from 'lit-element';
import { connect } from 'lit-element-redux';
import { operations } from './duck';
import styles from './{{component-name}}.scss';

const mapStateToProps = (store) => ({
  // TODO: 
});

const mapDispatchToProps = { ...operations };

class {{ ComponentName }} extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    // TODO: 
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <h1>{{ComponentName}}</h1>
    `;
  }
}
const Connected{{ ComponentName }} = connect(mapStateToProps, mapDispatchToProps)({{ ComponentName }});
customElements.define('{{component-name}}', Connected{{ ComponentName }});
