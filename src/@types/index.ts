export interface Assessment {
	id: string;
	isActive: boolean;
	title: string;
	finishedAt: string;
	qtdQuestions: number;
	maxScore: number;
}

export interface User{
	username: string;
	token: string;
}