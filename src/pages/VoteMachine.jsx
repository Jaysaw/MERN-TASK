import React, { useState } from "react";
import "./VoteMachine.css";

export default function Vote() {
    const [votes, setVotes] = useState({
        CandidateA: 0,
        CandidateB: 0,
        CandidateC: 0
    });

    const [message, setMessage] = useState("");

    const vote = (candidate) => {
        setVotes({ ...votes, [candidate]: votes[candidate] + 1 });
        setMessage(`Vote registered for ${candidate}`);
    };

    const resetVotes = () => {
        setVotes({
            CandidateA: 0,
            CandidateB: 0,
            CandidateC: 0
        });
        setMessage("Voting reset successfully");
    };

    const winner = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const winners = Object.keys(votes).filter(
            c => votes[c] === maxVotes && maxVotes !== 0
        );
        return winners.length ? winners.join(", ") : "No votes yet";
    };

    return (
        <div className="vote-container">
            <h2>🗳️ Electronic Voting Machine</h2>

            <div className="candidates">
                <button onClick={() => vote("CandidateA")}>Vote Candidate A</button>
                <button onClick={() => vote("CandidateB")}>Vote Candidate B</button>
                <button onClick={() => vote("CandidateC")}>Vote Candidate C</button>
            </div>

            {message && <p className="message">{message}</p>}

            <div className="results">
                <h3>Live Results</h3>
                <p>Candidate A: {votes.CandidateA}</p>
                <p>Candidate B: {votes.CandidateB}</p>
                <p>Candidate C: {votes.CandidateC}</p>
            </div>

            <h3>🏆 Winner: {winner()}</h3>

            <button className="reset" onClick={resetVotes}>Reset Voting</button>
        </div>
    );
}
