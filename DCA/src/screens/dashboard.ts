import dashboardStyles from "./dashboard.css"
import { getData, getData2 } from "../services/getData";
import { AttributeCard } from "../components/card/card";
import { ApiType } from "../types/type";
import "../components/export"

export default class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: `open`})
    }

    async connectedCallback (){
        const data = await getData();
        const data2 = await getData2();
        this.render(data, data2) 
        
    }
    render(data: any, data2: any ){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <div>
        ${dashboardStyles}
        </div>
        `

        const h1 = this.ownerDocument.createElement(`h1`)
        h1.innerHTML = `Cats Facts`
        this.shadowRoot?.appendChild(h1)

        const btn = this.ownerDocument.createElement(`button`)
        btn.innerHTML = `get new fact`
        this.shadowRoot?.appendChild(btn)

        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement(`app-card`)
            card.setAttribute(AttributeCard.fact, e.fact)
            this.shadowRoot?.appendChild(card)
        });

        
        data2.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement(`app-card`)
            card.setAttribute(AttributeCard.url, e.url)
            this.shadowRoot?.appendChild(card)
        });

    }
}

customElements.define(`app-dashboard`, Dashboard)