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
        
      }
      slot {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 32px; //ddd spacing doesn't work here
      }
     
      .wrapper {
        background-color: var(--ddd-theme-accent);
        display: flex;
        padding: 40px 26px 40px 26px;
        
      }
      @media screen and (min-width: 768px) {
        .wrapper{
          padding: 40px 26px 40px 26px;
        }
        slot {
          grid-template-columns: repeat(2, 1fr);
          gap: 8px; //ddd spacing doesn't work here
        }
      }
      @media screen and (min-width: 1080px) {
        .wrapper{
          padding: 60px 26px 60px 26px;
        }
        slot {
          grid-template-columns: repeat(3, 1fr);
          gap: 32px; //ddd spacing doesn't work here it just has a small gap that doesn't change in size
        }
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