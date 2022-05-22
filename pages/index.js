import Head from "next/head";
import { useState } from "react";
import Filter from "../function/function";

export default function Home() {
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");
    const [good, setGood] = useState("");
    const [bad, setBad] = useState("");
    const [filteredArr, setFilteredArr] = useState(null);
    const dataObj = {
        one: one,
        two: two,
        three: three,
        four: four,
        five: five,
        good: good,
        bad: bad,
    };
    const filterWords = () => {
        setFilteredArr(Filter(dataObj));
    };
    const validate = (value, key) => {
        const lastLetter = value[value.length - 1];
        if (key === "good") {
            if (!bad.includes(lastLetter)) {
                setGood(value);
            }
        }
        if (key === "bad") {
            if (!good.includes(lastLetter) && one !== lastLetter && two !== lastLetter && three !== lastLetter && four !== lastLetter && five !== lastLetter) {
                setBad(value);
            }
        }
        if (key === "one") {
            if (!bad.includes(lastLetter)) {
                setOne(value);
            }
        }
        if (key === "two") {
            if (!bad.includes(lastLetter)) {
                setTwo(value);
            }
        }
        if (key === "three") {
            if (!bad.includes(lastLetter)) {
                setThree(value);
            }
        }
        if (key === "four") {
            if (!bad.includes(lastLetter)) {
                setFour(value);
            }
        }
        if (key === "five") {
            if (!bad.includes(lastLetter)) {
                setFive(value);
            }
        }
    };
    return (
        <div className="flex flex-col items-center justify-center w-screen my-8">
            <Head>
                <title>Wordle Finder</title>
            </Head>
            <h1 className="text-4xl mb-6 font-bold">Wordle Finder</h1>
            <div className="bg-lime-400 w-11/12 max-w-[500px] p-8 flex flex-col h-full">
                <div className="flex flex-col gap-4">
                    <input placeholder="Good Letters" value={good} onChange={(e) => validate(e.target.value.toUpperCase(), "good")} className="h-10 pl-4 text-xl" />
                    <input placeholder="Bad Letters" value={bad} onChange={(e) => validate(e.target.value.toUpperCase(), "bad")} className="h-10 pl-4 text-xl" />
                </div>
                <div className="bg-gray-500 p-4 grid grid-cols-5 place-items-center mt-4">
                    <input value={one} onChange={(e) => validate(e.target.value.toUpperCase(), "one")} maxLength="1" className="w-12 h-12 text-center text-3xl" />
                    <input value={two} onChange={(e) => validate(e.target.value.toUpperCase(), "two")} maxLength="1" className="w-12 h-12 text-center text-3xl" />
                    <input value={three} onChange={(e) => validate(e.target.value.toUpperCase(), "three")} maxLength="1" className="w-12 h-12 text-center text-3xl" />
                    <input value={four} onChange={(e) => validate(e.target.value.toUpperCase(), "four")} maxLength="1" className="w-12 h-12 text-center text-3xl" />
                    <input value={five} onChange={(e) => validate(e.target.value.toUpperCase(), "five")} maxLength="1" className="w-12 h-12 text-center text-3xl" />
                </div>
                <button
                    onClick={filterWords}
                    className="mt-8 p-2 px-4 bg-gray-800 text-white border-2 border-transparent hover:border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 transition-all"
                >
                    Find Words
                </button>
                {filteredArr && (
                    <div className="flex gap-2 flex-wrap mt-6">
                        {filteredArr.map((item, pos) => {
                            return (
                                <span key={pos} className="bg-gray-200 p-2 font-medium">
                                    {item.toUpperCase()}
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
