export interface Assessment {
	id: string;
	isActive: boolean;
	title: string;
	finishedAt: string;
	qtdQuestions: number;
	maxScore: number;
}

export interface Alternative {
	id: string;
	title: string;
}

export interface Question {
	id: string;
	createdAt: string;
	updatedAt: string;
	isActive: boolean;
	title: string;
	alternatives: Alternative[];
}

export interface User{
	username: string;
	token: string;
}
