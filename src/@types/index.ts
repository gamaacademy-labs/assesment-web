export interface Assessment {
	id: string;
	isActive: boolean;
	title: string;
	finishedAt: string;
	qtdQuestions: number;
	maxScore: number;
}

export interface Alternatives {
	id: string;
	title: string;
}

export interface Question {
	id: string;
	createdAt: string;
	updatedAt: string;
	isActive: boolean;
	title: string;
	alternatives: Alternatives[];
}
