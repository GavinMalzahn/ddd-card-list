/**
 * Copyright 2025 GavinMalzahn
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDD{

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      .wrapper {
        border-radius: var(--ddd-radius-md);
        max-width: 500px;
        background-color: white;
        
      }
      .image {
        max-width: 100%;
        display: block;
        border-top-left-radius: var(--ddd-radius-md);
        border-top-right-radius: var(--ddd-radius-md);
        border-bottom: 12px solid var(--ddd-theme-default-nittanyNavy);  
        box-sizing: border-box;
        
      }
      .card-content {
        padding: var(--ddd-spacing-4);  
        background-color: white;
        color: var(--ddd-theme-default-nittanyNavy);
        border-bottom-left-radius: var(--ddd-radius-md);
        border-bottom-right-radius: var(--ddd-radius-md); 

      }
      .description {
        font-size: var(--ddd-card-description-font-size, var(--ddd-font-size-s));
        color: var(--ddd-card-description-color, var(--ddd-theme-primary));
        margin-bottom: var(--ddd-spacing-12);
      }
      .card-button {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: white;
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-2);
        border: solid var(--ddd-theme-default-nittanyNavy);
        width: 100%;
        align-items: center;
        font-size: 16px;
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper">
          <img class="image" src="${this.image}" alt=""/>
          <div class="card-content">
            <div class="title-description">
              <h2 class="card-title">${this.title}</h2>
              <div class="description"> 
                <slot name="description-content">hello</slot>
              </div>
            </div>
            <a href="${this.href}" target="_blank" class="card-link">
              <button class="card-button">
                Explore >
              </button>
            </a>
          </div>
          <slot></slot>
        </div>`;
  }
  
}

globalThis.customElements.define(DddCard.tag, DddCard);