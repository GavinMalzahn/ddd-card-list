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
    this.href = "";
    this.description = "";
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      href: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      .wrapper {
        border-radius: var(--ddd-radius-md);
        background-color: white;
        flex-wrap: nowrap;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        
      }
      .image {
        max-width: 100%;
        display: block;
        border-top-left-radius: var(--ddd-radius-md);
        border-top-right-radius: var(--ddd-radius-md);
        border-bottom: 12px solid var(--ddd-theme-primary);  
        box-sizing: border-box;
        object-fit: cover;
        aspect-ratio: 3/2;
        
      }
      .card-content {
        padding: 16px 20px 24px 20px;  
        background-color: var(--ddd-theme-accent);
        display: flex;
        flex-direction: column;
        background-color: white;
        color: var(--ddd-theme-default-nittanyNavy);
        border-bottom-left-radius: var(--ddd-radius-md);
        border-bottom-right-radius: var(--ddd-radius-md); 
        justify-content: space-between;
        flex-grow: 1;
        

      }
      .title-description {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        font-family: var(--ddd-font-family-roboto); 
        
      }
      .card-title {
        margin: 0px;
        border: none;
        padding: 0px;
        
      }
      .description-content {
        color: var(--ddd-theme-default-nittanyNavy);
        margin-top: 8px;
        margin-bottom: 16px;
        white-space: pre-line;
        font-size: var(--ddd-card-description-font-size, var(--ddd-font-size-s));
        color: var(--ddd-theme-default-nittanyNavy);
      }

      .card-button {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: white;
        border-radius: var(--ddd-radius-sm);
        padding: 12px 24px 12px 16px;
        width: 100%;
        height: fit-content;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        justify-content: space-between;
        
        
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
              <p class="description-content">${this.description}</p>
            </div>
            <a href="${this.href}" target="_blank" class="card-link">
              <button class="card-button">
                Explore >
              </button>
            </a>
          </div>
        </div>`;
  }
  
}

globalThis.customElements.define(DddCard.tag, DddCard);