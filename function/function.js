import word5Arr from "../resources/word5Arr";
export default function Filter(props) {
    const one = props.one.toLowerCase(),
        two = props.two.toLowerCase(),
        three = props.three.toLowerCase(),
        four = props.four.toLowerCase(),
        five = props.five.toLowerCase(),
        good = props.good.toLowerCase(),
        bad = props.bad.toLowerCase();
    let filteredWords = [];
    let finalFilteredWords = [];
    for (let i = 0; i < word5Arr.length; i++) {
        let flag1 = true;
        for (let j = 0; j < 5; j++) {
            if (!flag1) {
                break;
            }
            for (let k = 0; k < bad.length; k++) {
                if (word5Arr[i][j] === bad[k]) {
                    flag1 = false;
                    break;
                }
            }
            if (!flag1) {
                break;
            }
            if (one && j === 0) {
                if (one !== word5Arr[i][j]) {
                    flag1 = false;
                }
            } else if (two && j === 1) {
                if (two !== word5Arr[i][j]) {
                    flag1 = false;
                }
            } else if (three && j === 2) {
                if (three !== word5Arr[i][j]) {
                    flag1 = false;
                }
            } else if (four && j === 3) {
                if (four !== word5Arr[i][j]) {
                    flag1 = false;
                }
            } else if (five && j === 4) {
                if (five !== word5Arr[i][j]) {
                    flag1 = false;
                }
            }
            if (!flag1) {
                break;
            }
        }
        if (flag1) {
            filteredWords.push(word5Arr[i]);
        }
    }
    for (let i = 0; i < filteredWords.length; i++) {
        let flagArr = new Array(good.length).fill(false);
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < good.length; k++) {
                if (filteredWords[i][j] === good[k]) {
                    flagArr[k] = true;
                }
            }
        }
        let flag = true;
        for (let l = 0; l < flagArr.length; l++) {
            if (!flagArr[l]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            finalFilteredWords.push(filteredWords[i]);
        }
    }
    return finalFilteredWords;
}
