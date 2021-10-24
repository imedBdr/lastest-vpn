import Card from "./card"


const Testimonial = ({ reviews = [] }) =>{
    const [currentPage, setCurrentPage] = useState(1)
    const pages = reviews.length
    
    return (
    <div className={'Testimonial'}>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className={'tape'}>
            {reviews?.map((e,i)=>{
                <Card {...e} key={i}/>
            })}
        </div>
        <div className={'pagination'}>
            <div className={'dots'}>
                {}
            </div>
        </div>
    </div>
)}