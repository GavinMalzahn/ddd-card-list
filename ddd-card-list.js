/**
 * Copyright 2025 GavinMalzahn
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDD {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.backgroundColor = "";
    };

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      backgroundColor: { type: String, reflect: true, DDDDataAttributes: "data-accent"},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display:flex;
        background-color: none;
        border: none;
        color: none; 
        
      }
      slot {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
     
      .wrapper {
        background-color: var(--ddd-theme-accent);
        display: flex;
        padding: 60px 26px 60px 26px;
        
      }



    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <slot></slot>
    </div>
  `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);