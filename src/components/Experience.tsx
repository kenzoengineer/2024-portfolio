import { useContext, useState } from "react";
import Card, { CardProps } from "./Card";
import { WindowContext } from "../App";

import {
    BsSuitSpadeFill,
    BsSuitDiamondFill,
    BsSuitClubFill,
    BsSuitHeartFill,
} from "react-icons/bs";
import { colors, selectRandom } from "../consts";

const CARD_STYLES = [
    {
        color: "text-b-black",
        hex: colors[4],
        suit: <BsSuitSpadeFill className="text-b-black" />,
    },
    {
        color: "text-b-yellow",
        hex: colors[2],
        suit: <BsSuitDiamondFill className="text-b-yellow" />,
    },
    {
        color: "text-b-blue",
        hex: colors[1],
        suit: <BsSuitClubFill className="text-b-blue" />,
    },
    {
        color: "text-b-red",
        hex: colors[0],
        suit: <BsSuitHeartFill className="text-b-red" />,
    },
];

const experiences: CardProps[] = [
    {
        company: "Vontive",
        title: "Software Engineer",
        dates: "Jan '24 - Apr '24",
        location: "San Francisco",
        stack: "Vue, Vuetify, Typescript, Express, Postgres",
        cardStyle: selectRandom(CARD_STYLES),
        content: (
            <div>
                <p>blah blah blah</p>
                {/* <p className="mb-4">
                    Vontive is the company I currently work at, right in the
                    heart of San Francisco's Financial District. Vontive creates
                    a whitelabelled mortgage trading platform, connecting
                    commercial loan seekers with big capital debt buyers.
                </p>
                <p className="mb-4">
                    I worked with another intern to integrate with a third party
                    electronic signing provider. This allowed our underwriters
                    to sign and track e-sign requests much faster and simpler.
                    We owned development of this from beginning to end,
                    designing the routes, database entity, talking and
                    negotiating with the provider and pushing it to production.
                </p>
                <p className="mb-4">
                    This was done in <b>Typescript</b> using{" "}
                    <b>Vue, Vuetify, Express</b> and <b>Postgres</b> with{" "}
                    <b>TypeORM</b>.
                </p> */}
            </div>
        ),
    },
    {
        company: "Senstar",
        title: "Software Developer",
        dates: "Jan '23 - Apr '23",
        location: "Waterloo",
        stack: ".NET Core, C#, Typescript, SQL Server",
        cardStyle: selectRandom(CARD_STYLES),
        content: (
            <div>
                <p>blah blah blah</p>
                {/* <p className="mb-4">
                    Senstar's video management system product was a WinForms
                    desktop application, built using <b>.NET Core</b>
                </p>
                <p className="mb-4">
                    I got to apply a lot of the lower level software concepts I
                    learned in school, including the usage of <b>sockets</b> and
                    <b> concurrency</b>. All of these came together when I
                    worked on integrating many security hardware devices into
                    our client.
                </p>
                <p className="mb-4">
                    I owned integration of these devices, creating a reusable
                    interface, able to support access control devices (keycards,
                    doors), digital I/O (lights, audio) and more. I also created
                    an upgrade pipeline that ran on startup, to upgrade existing
                    clients old integrations to our new integration standard
                    through a series of <b>Postgres</b> queries using{" "}
                    <b>Entity Framework</b>.
                </p> */}
            </div>
        ),
    },
    {
        company: "Shoplogix",
        title: "Software Developer",
        dates: "May '22 - Aug '22",
        location: "Oakville",
        stack: "React, .NET Core, C#, Typescript, Postgres",
        cardStyle: selectRandom(CARD_STYLES),
        content: (
            <div>
                {/* <p className="mb-4">
                    Shoplogix brought me out of the ASP.NET world and into the
                    (relatively) modern world of React. I was on the Whiteboard
                    team, which provided software to view factory metrics on
                    multiple dashboards.
                </p>
                <p className="mb-4">
                    Each operator can customize the layout, units, time
                    intervals, and charts for each dashboard, but sometimes
                    management wants to set configurations for certain lines,
                    factory areas or even whole plants. To simplify this, I
                    created a settings management system which allowed for
                    <b> inheritance</b> and <b>overriding</b> of settings. One
                    can imagine a factory as a tree. The root is the company
                    itself. A company can have multiple physical plants. Each
                    plant can have multiple areas. Each area can have multiple
                    production lines. And finally each line can have multiple
                    machines.
                </p>
                <p className="mb-4">
                    Higher level nodes propogate their settings to all lower
                    nodes. Lower level nodes can also override by setting their
                    own configuration.
                </p> */}
                <p>blah blah blah</p>
            </div>
        ),
    },
    {
        company: "QBuild",
        title: "Application Developer",
        dates: "Sept '21 - Dec '21",
        location: "Markham",
        stack: "Telerik UI, ASP.NET, C#, SQL Server",
        cardStyle: selectRandom(CARD_STYLES),
        content: (
            <div>
                <p>blah blah blah</p>
                {/* <p className="mb-4">
                    Returning to QBuild was great, because I was already
                    familiar the process, my coworkers and the culture. I got to
                    work on a different team this time. The product was ECx
                    Manager, a simple way to administrate engineering change
                    notices.
                </p>
                <p className="mb-4">
                    The overarching project I took on regarded adding a comments
                    section to each engineering change document. Using{" "}
                    <b>Telerik UI</b>, I built a resuable textfield component
                    that supported (sanitized!) text formatting. I also added a
                    tagging feature which emails any user tagged in a comment.
                </p>
                <p className="mb-4">
                    I also added a drag and drop image embedding feature. An
                    uploaded image was asynchronously saved in a{" "}
                    <b>SQL Server</b> table, then an ObjectURL is generated and
                    placed in the HTML (so we don't need to see nasty blob
                    base64 strings).
                </p> */}
            </div>
        ),
    },
    {
        company: "QBuild",
        title: "Application Developer",
        dates: "Jan '21 - Apr '21",
        location: "Markham",
        stack: "Kendo UI, ASP.NET, C#, SQL Server",
        cardStyle: selectRandom(CARD_STYLES),
        content: (
            <div>
                <p>blah blah blah</p>
                {/* <p className="mb-4">
                    My first ever internship taught me a lot about working with
                    other developers and writing code in a production
                    environment. I worked on QBuild's in-house CRM, which
                    enabled a completely bespoke solution to their sales and
                    customer needs.
                </p>
                <p className="mb-4">
                    A large project I took on was overhauling many stored
                    procedures and views in <b>SQL Server</b>. Many views had
                    unnecessary joins and nested selects, same with our stored
                    procedures. Optimizing the logic lead to <b>30 times </b>
                    improvements in some cases. Saving lots of time for our
                    internal staff.
                </p>
                <p className="mb-4">
                    We also had a legacy Google App Script program which
                    generated quotes for clients by filling in a pdf template.
                    While it was working, the UX wasn't great and took up to a
                    minute to work in some scenarios. I rewrote everything in{" "}
                    <b>C#</b>, allowing users to access it directly from the
                    CRM, allowing some fields to be pre-populated from our
                    database, and reducing pdf generation time to as little as
                    500ms.
                </p> */}
            </div>
        ),
    },
];

const Experience = () => {
    const { windowWidth } = useContext(WindowContext);
    const [selectedIdx, setSelectedIdx] = useState(-1);
    return (
        <div className="bg-b-black min-h-[120vh] sm:p-12 md:px-36 md:py-16">
            <div className="text-b-white text-5xl max-sm:p-12 md:text-8xl lg:text-bigger md:mb-10">
                WORK <span className="font-black">EXPERIENCE</span>
            </div>
            <div className="flex flex-wrap justify-center mt-48">
                {experiences.map((x, idx) => (
                    <div
                        key={idx}
                        className="-ml-20 transition-transform duration-500"
                        style={{
                            transform:
                                selectedIdx >= 0
                                    ? "translateY(18rem)"
                                    : `rotate(${-10 + idx * 5}deg) translateY(${(2 - Math.abs((experiences.length - 1) / 2 - idx)) * -30}px)`,
                        }}
                    >
                        <Card
                            {...x}
                            idx={idx}
                            selectedIdx={selectedIdx}
                            setSelectedIdx={setSelectedIdx}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
