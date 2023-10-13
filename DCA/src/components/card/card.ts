import cardStyle from "./card.css"

export enum AttributeCard{
    "url" = "url",
    "fact" = "fact"
}

export default class Card extends HTMLElement {
    url?: string;
    fact?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> = {
            fact: null,
            url: null,
        }
        return Object.keys(attrs)
    }


    attributeChangedCallback(
        propName: AttributeCard,
        oldValue: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }

    }

    constructor(){
        super();
        this.attachShadow({mode: `open`})
    }
    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <section>
        ${cardStyle}
        </section>
        <img src="${this.url}"><img>
        `

        const container = this.ownerDocument.createElement(`section`)
        const text = this.ownerDocument.createElement(`h1`)
        text.innerHTML = `${this.fact}`
        container.appendChild(text)

       
    }


}

customElements.define(`app-card`, Card);
