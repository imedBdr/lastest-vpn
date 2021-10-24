import './statistics.scss'

const Statistics = ({ users=90, locations=30, servers=50 })=>{

    return(
        <div className={'Statistics'}>
            <div className={'container'}>
                <div className={'item'}>
                    <div className={'icon'}>
                        <i className={'material-icons'}>person</i>
                    </div>
                    <div className={'text'}>
                        <div className={'bold'}>{`${users}+`}</div>
                        Users
                    </div>
                </div>
                <div className={'item'}>
                    <div className={'icon'}>
                        <i className={'material-icons'}>place</i>
                    </div>
                    <div className={'text'}>
                        <div className={'bold'}>{`${locations}+`}</div>
                        Locations
                    </div>
                </div>
                <div className={'item'}>
                    <div className={'icon'}>
                        <i className={'material-icons'}>dns</i>
                    </div>
                    <div className={'text'}>
                        <div className={'bold'}>{`${servers}+`}</div>
                        Servers
                    </div>
                </div>
            </div>
            <div className={'shadow'}>
                4
            </div>
        </div>
    )
}

export default Statistics;