export interface Ebook {
    type: string;
    isbn?: string;
    title: string;
    subtitle?: string;
    author: string;
    date: Date;
    publisher: string;
    pages: number;
    description: string;
    website: string;
    images: string[];
}
