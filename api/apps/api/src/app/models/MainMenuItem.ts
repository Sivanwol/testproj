export class MainMenuItem {
    public title: string;
    public link: string;
    public icon: string;
    public externalLink: boolean = false;
    constructor( title:string = '',  icon:string = '',  link:string = '', externalLink:boolean = false) {
        this.title = title;
        this.link =  link;
        this.icon = icon;
        this.externalLink = externalLink;
    }
}
