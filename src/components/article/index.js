const Article = ({title, description, other, picture, direction=''})=>{
    
    return(
        <div className={`Article ${direction}`}>
            <div className={'info'}>
                {title}
                {description}
                {other}
            </div>
            <div className={'picture'}>
                <img src={picture} alt={'Article figure'}/>
            </div>
        </div>
    )
}


export default Article;