import { nflTeams } from "./Teams";
import { useState } from "react";

export default function List() {
    const [search, setSearch] = useState("");

    console.log(search);

    const searchLower = search.toLowerCase();

    const teams = nflTeams.filter((team) => team.name.toLowerCase().includes(searchLower));

    return (
        <div className="List">
            <h1>Search List</h1>
            <input type="search"  value={search} onChange={(e) => setSearch(e.target.value)}/>
            <h1>My List</h1>
            <ul>
                {teams.map((team) => (
                    <li key={team.name}>
                        <p>{team.name}</p>
                        <p>{team.city}</p>
                        <p>{team.stadium}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}