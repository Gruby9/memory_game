import React, {useState, useEffect} from "react";

function GenerateCards() {

    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])
    const [result, setResult] = useState()
    for (let n = arr.length; n > 0; n-- ) {
        const x = Math.round(Math.random() * arr.length)
        const y = arr[x]
        arr.splice(x, 1)
        setResult() {
            result +=             <div className="card">
            <p>{y}</p>
        </div>

        }
    }
}

export default GenerateCards