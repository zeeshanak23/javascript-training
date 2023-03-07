import twitter from './img/Youtube.svg'
import Instagram from './img/Instagram.svg'
import Gmail from './img/Gmail.svg'
import Whatsapp from './img/Whatsapp.svg'

class SocialIconDef {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}

const socialIcons = [new SocialIconDef("twitter", twitter)]


socialIcons.push(new SocialIconDef("Gmail", Gmail))

socialIcons.push(new SocialIconDef("Instagram", Instagram))
socialIcons.push(new SocialIconDef("Whatsapp", Whatsapp))

export default socialIcons;