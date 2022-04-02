import "./index.css";
import {ReactNode} from "react";

const clips = [
    {
        title: "Invasion of Ukraine weighs heavily on 5C community members with connections to the conflict",
        subtitle: "When Maria Lyven PO '22 asked her family how they were doing last week, her mother told her that she woke up to the sound of explosions.",
        image: "/clips/ukraine.jpg",
        pubLogo: "/tsl.jpg",
        publication: "The Student Life",
        date: "March 4, 2022",
        url: "https://tsl.news/ukraine-russia-war-5c-student-impact/",
    },
    {
        title: "Data visualization: first-generation, Black student percentages drop in Pomona’s class of 2025",
        subtitle: "Pomona's most selective class to date is also its least diverse in several years.",
        image: "/clips/co2025.gif",
        pubLogo: "/tsl.jpg",
        publication: "The Student Life",
        date: "Nov. 5, 2021",
        url: "https://tsl.news/pomona-class-of-2025-diversity/",
    },
    {
        title: "Voters oust San Francisco school board members in historic race that galvanized AAPIs",
        subtitle: "The city’s first Pacific Islander elected leader was one of three officials recalled in Tuesday’s high-stakes special election, which featured a surge in AAPI activism.",
        image: "/clips/lowell.jpg",
        pubLogo: "/yappie.png",
        publication: "The Yappie",
        date: "Feb. 16, 2022",
        url: "https://theyappie.com/san-francisco-recall-asian-american-pacific-islander/",
    },
    {
        title: "Amazin LeThi is unapologetic about fighting for Asian and LGBTQ inclusion in sports",
        subtitle: "From competitive bodybuilding to homelessness, LeThi’s experiences serve as the foundation for her work as an advocate today.",
        image: "/clips/amazin.jpg",
        pubLogo: "/yappie.png",
        publication: "The Yappie",
        date: "Oct. 31, 2021",
        url: "https://theyappie.com/asian-lgbtq-sports-advocacy-amazin-lethi/",
    },
    {
        title: "‘The only way to survive is by taking care of one another’: Meet the AAPI activists rising above the hate",
        subtitle: "Community organizers are serving as bridges, from New York City to San Francisco and beyond.",
        image: "/clips/soaroverhate.jpg",
        pubLogo: "/yappie.png",
        publication: "The Yappie",
        date: "Aug. 11, 2021",
        url: "https://theyappie.com/aapi-activists-rising-above-hate/",
    },
    {
        title: "Data visualization: Pomona, Harvey Mudd admit 2026 classes with record diversity",
        subtitle: "With 61.4% domestic students of color accepted at Pomona and 70% at Harvey Mudd, the pools of admitted first years are on track to form the most diverse class profiles in both colleges’ histories.",
        image: "/clips/co2026.gif",
        pubLogo: "/tsl.jpg",
        publication: "The Student Life",
        date: "March 26, 2022",
        url: "https://tsl.news/pomona-hmc-co2026-diversity/",
    },
]

function Paragraph({children, className} : {children: ReactNode, className?: string}) {
  return (
    <p className={"text-2xl my-4 leading-normal font-light text-justify " + (className || "")}>
        {children}
    </p>
  );
}

function Anchor({children, className, href} : {children: ReactNode, className?: string, href: string}) {
  return (
    <a className={"text-[#0026ff] " + (className || "")} href={href}>
        {children}
    </a>
  );
}

export default function App() {
    return (
        <div className="max-w-2xl mx-auto px-4 my-12">
            <div className="text-center">
                <img src="./headshot.jpg" alt="Headshot of Samson Zhang" className="w-32 h-32 rounded-full mx-auto block"/>
                <p className="text-4xl my-8">Hi, nice to meet you! I’m Samson.</p>
            </div>
            <Paragraph>I’m a Media Studies and Physics major at Pomona College interested in Asian American and data journalism.</Paragraph>
            <Paragraph>
                For the last year, I've covered AAPI politics and activism for <Anchor href="https://theyappie.com/">
                    <img
                    src="/yappie.png"
                    alt="Logo of The Yappie"
                    className="w-7 h-7 mx-2 inline"
                /><i>The Yappie</i></Anchor>.
                I’m also the News Associate Editor of my college weekly, <Anchor href="https://tsl.news/">
                <img
                    src="/tsl.jpg"
                    alt="Logo of The Student Life"
                    className="w-7 h-7 mx-2 inline"
                /><i>The Student Life</i></Anchor>,
                where my reporting, editing and data work has been awarded <Anchor href="/">Best Interactive Graphic of 2021</Anchor> and Best COVID Coverage of 2021 by the California College Media Association.
            </Paragraph>
            <Paragraph>
                Outside of journalism I'm an <b>experienced software engineer</b>. I maintain my own <Anchor href="https://updately.us/">social media platform</Anchor> and writing app and <Anchor href="https://postulate.us/">a startup I founded</Anchor> was selected to interview for Y Combinator.
            </Paragraph>
            <hr className="my-8"/>
            <Paragraph>Check out my <Anchor href="/szhang-resume.pdf">resume</Anchor> / <Anchor href="https://twitter.com/wwsalmon">Twitter</Anchor> / clips ↓</Paragraph>
            <hr className="my-8"/>
            {clips.map((clip, i) => (
                <a href={clip.url} className="sm:flex block my-16" key={i}>
                    <div className="w-full mb-4 sm:w-52 flex-shrink-0 sm:mr-8 sm:mb-0">
                        <div className="w-full pb-[80%] relative">
                            <img src={clip.image} alt={clip.title} className="w-full h-full absolute top-0 left-0 object-cover"/>
                        </div>
                        <div className="w-full h-8 flex items-center bg-gray-100 text-gray-500">
                            <img src={clip.pubLogo} alt={`Logo of ${clip.publication}`} className="h-full mr-2"/>
                            <span>{clip.date}</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl">{clip.title}</h1>
                        <p className="text-lg text-gray-500 mt-2">{clip.subtitle}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}