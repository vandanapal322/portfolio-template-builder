export type Education = {
    school: string;
    degree: string;
}
export type Experience = {
    company: string;
    position: string;   
    description: string;
}
export type Project = {
    title: string;
    description: string;
    techstack: string[];
    url?: string;
}
export type Profile = {
    name: string;
    title: string;
    about: string;
    education: Education[];
    experience: Experience[];
    projects: Project[];
}