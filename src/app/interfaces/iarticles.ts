export interface IArticles {
    id: number,
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
