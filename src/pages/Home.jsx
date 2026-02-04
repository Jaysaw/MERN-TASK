import Card from "../components/Card";
import "./Pages.css";

export default function Home() {
    const tools = [
        ["Portfolio", "/portfolio"],
        ["Form", "/form"],
        ["BMI Calculator", "/bmi"],
        ["Todo", "/todo"],
        ["StopWatch", "/stopwatch"],
        ["Bank System", "/bank"],
        ["Vote Machine", "/vote"],
        ["Calculator", "/calculator"],
        ["Color Box", "/color"],
        ["Task Manager", "/tasks"],
        ["Weather", "/weather"],
    ];

    return (
        <div className="grid">
            {tools.map(([t , p]) => <Card key={p} title={t} path={p} />)}
        </div>
    );
}