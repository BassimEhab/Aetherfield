export interface IArticles {
    id: number,
    author: string,
    createdAt: string,
    imgSrc: string,
    title: string,
    category: string,
    duration: string,
    subTitle: string,
    intro: string,
    body: articleBody[],
}
interface articleBody {
    sectionTitle: string,
    sectionBody: string,
}
