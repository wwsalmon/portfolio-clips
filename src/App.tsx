import "./index.css";
import {ReactNode} from "react";

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
                For the last year, I've covered AAPI politics and activism for <Anchor href="https://theyappie.com/"><i>The Yappie</i></Anchor>.
                I’m also the News Associate Editor of my college weekly, <Anchor href="https://tsl.news/"><i>The Student Life</i></Anchor>,
                where my reporting, editing and data work has been awarded <Anchor href="/">Best Interactive Graphic of 2021</Anchor> and Best COVID Coverage of 2021 by the California College Media Association.
            </Paragraph>
            <Paragraph>
                Outside of journalism I'm an <b>experienced software engineer</b>. I maintain my own <Anchor href="https://updately.us/">social media platform</Anchor> and writing app and <Anchor href="https://postulate.us/">a startup I founded</Anchor> was selected to interview for Y Combinator.
            </Paragraph>
        </div>
    );
}