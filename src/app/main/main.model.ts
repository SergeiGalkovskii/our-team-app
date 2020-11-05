
export interface OurTeamBlock {
    title: string;
    memberCards: {
        [memberNumber: string]: MemberCard
    };
}

export interface MemberCard {
    imageUrl: { [resolutionBreakpoint: string]: string };
    block: {
        title: string;
        description: string;
        link: string;
        text: string
    };
}

