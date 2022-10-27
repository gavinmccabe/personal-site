export interface Post {
	title: string;
	date: string;
	tags: string;
	text: string;
}

export interface Experience {
	title: string;
	company: string;
	dates: string;
	description: string;
}

export interface Education {
	school: string;
	degree: string;
	class: number;
	description: string;
}

export enum Page {
	Home,
	Experience,
	Education,
	Contact
}
