import { MemberCard } from 'src/app/main/main.model';

class Member {
    imageUrl: { [resolutionBreakpoint: string]: string };
    name: string;
    position: string;
    email: string;
    phone: string;

    constructor(memberCard: MemberCard) {
        const { imageUrl, block: { title, description, link, text } } = memberCard;
        this.imageUrl = imageUrl;
        this.name = title;
        this.position = description;
        this.email = link;
        this.phone = text;
    }

    get defaultImg() {
        return this.imageUrl && this.imageUrl['w1080'];
    }
}

export {
    Member
};
