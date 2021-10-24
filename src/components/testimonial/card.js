const Card = ({ avatar, fullName, location, rating, text }) =>(
    <div className={'Card'}>
        <div className={'row'}>
            <div className={'person'}>
                <img src={avatar} alt={'avatar'}/>
                <div className={'detail'}>
                    <div className={'fullName'}>{fullName}</div>
                    <div className={'location'}>{location}</div>
                </div>
            </div>
            <div className={'rating'}>
                {rating}
                <i className={'material-icons'}>star</i>
            </div>
            <p>{text}</p>
        </div>
    </div>
)

export default Card;