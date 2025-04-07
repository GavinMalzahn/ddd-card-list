/**
 * Copyright 2025 GavinMalzahn
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 16px;
        box-sizing: border-box;
      }
      div ::slotted(*){
        display: inline-block;
        
      }
      .ddd-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 10px;
        border: 1px solid var(--ddd-theme-primary);
        border-radius: 10px;
        background-color: var(--ddd-theme-accent);
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