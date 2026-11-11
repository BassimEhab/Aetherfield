export interface ICareer {
    id: number,
    title: string,
    roleType: string,
    location: string,
    shortDescription: string,
    jobDescription: Description[],
}

export interface Description {
    title: string,
    body: string,
}
