import React, {useState, useEffect} from "react";

class GenerateCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [1,2,3,4,5,6,7,8,9],
            res: '',
        }

        // this.genCards = this.genCards.bind(this)
    }

    componentDidMount() {
        if (this.state.arr.length !== 0) {
            for (let n = 0; n < 10; n++) {
                const x = Math.round(Math.random() * this.state.arr.length)
                const y = this.state.arr[x]
                this.setState({res: this.state.res + n}) 
                console.log(n)
                console.log(this.state.arr)
                this.state.arr.splice(x, 1)
            }
        }
    }

    componentWillUnmount() {
        console.log('will umount')
    }

    // <div className="card"> <p>{y}</p> </div>
    // const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])
    // const [result, setResult] = useState()
    
    render() {
        return (
            <div>
                {this.state.res}
            </div>
        )
    }
        
}


export default GenerateCards