import imageZL from "@/assets/photosProjectCard/znanylekarz-karta.webp"


export interface Project {
  title: string;    
    description: string;
    urlImage: string;
    id: string;
}

const projectList = [{
    title: "ZnanyLekarz",
    description: "ZnanyLekarz is a leading platform in Poland for finding and booking medical appointments online. It connects patients with healthcare professionals, offering a wide range of services from general practitioners to specialists.",
    urlImage: imageZL,
    id: "znany-lekarz"

},
{
    title: "Abart",
    description: "Abart is a Polish company specializing in the design and production of high-quality furniture. They focus on creating functional and aesthetically pleasing pieces that enhance living spaces.",
    urlImage: "https://abart.pl/favicon.ico",
    id: "abart"
},
{
    title: "APS",
    description: "APS is a Polish company that provides advanced IT solutions and services, focusing on software development, system integration, and IT consulting.",
    urlImage: "https://aps.pl/favicon.ico",
    id: "aps"

},
{
    title: "Cuprum",
    description: "Cuprum is a Polish company that specializes in the production of copper and copper alloys, serving various industries including construction, electronics, and automotive.",
    urlImage: "https://cuprum.pl/favicon.ico",
    id: "cuprum"
},
{
    title: "InstaGlass",
    description: "InstaGlass is a company that specializes in the production and installation of high-quality glass products, including windows, doors, and facades, with a focus on innovation and sustainability.",
    urlImage: "https://instaglass.pl/favicon.ico",
    id: "instaglass"
},
{title: "InstaCode",
    description: "InstaCode is a cutting-edge platform that offers innovative solutions for software development, focusing on efficiency and user experience.",
    urlImage: "https://instacode.pl/favicon.ico",
    id: "instacode" 
}]; 

export default projectList;
