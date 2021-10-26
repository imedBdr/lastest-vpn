import './plan.scss'

const Plan = ({ title, features, price = 'Free', unit=' / mo'}) =>(
    <div className={'Plan'}>
        <img src={'./pictures/plan.png'} alt={''} />
        <div className={'title'}>
            {title}
        </div>
        <ul>
            {features?.map((e,i)=>(
                <li key={i}>
                    <i className={'material-icons'}>done</i>
                    <p>{e}</p>
                </li>
            ))}
        </ul>
        <div className={'price'}>
            <span>{ price }</span>
            { unit }
        </div>
        <div className={'btn btn-outlined btn-md'}>Select</div>
    </div>
)

export default Plan;