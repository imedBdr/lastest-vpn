import { useState } from "react"
import Card from "./card"
import './testimental.scss'

const Testimonial = ({ reviews = [] }) =>{
    const [currentPage, setCurrentPage] = useState(1)
    const pages = parseInt( reviews?.length / 3 ) + (( reviews?.length % 3 ) === 0 ? 0 : 1)
    console.log(pages);

    const printDots = () =>(
        Array(pages).fill().map((e,i)=>
            <li 
                key={i}
                onClick={()=>setCurrentPage(i+1)}
                className={`${currentPage===(i+1)?'selected' : ''}`}
            ></li>
        )
    )
    const printCards = () =>{
        console.log(reviews?.slice((pages-1)*3,pages*3))
        return(
        reviews?.slice((currentPage-1)*3,currentPage*3).map((e,i)=>{
            return<Card {...e} key={i}/>
        }))}
    console.log(currentPage)
    return (
    <div className={'Testimonial'}>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className={'tape'}>
            {printCards()}
        </div>
        <div className={'pagination'}>
            <div className={'dots'}>
                <ul>
                    {printDots()}
                </ul>
            </div>
            <div className={'navigation'}>
                <button
                    className={`btn btn-round btn-${currentPage===1 ? 'outlined-no-effect':'full'}`}
                    onClick={()=>setCurrentPage(currentPage-1)}
                    disabled={currentPage===1}
                    >
                        <i className={'material-icons'}>arrow_back</i>
                </button>
                <button
                    className={`btn btn-round btn-${currentPage===pages ? 'outlined-no-effect':'full'}`}
                    onClick={()=>setCurrentPage(currentPage+1)}
                    disabled={currentPage===pages}
                    >
                        <i className={'material-icons'}>arrow_forward</i>
                </button>
            </div>
        </div>
    </div>
)}

export default Testimonial;