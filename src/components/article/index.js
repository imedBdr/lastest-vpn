import './article.scss';

const Article = ({title, description, other, picture, direction=''})=>{
    
    return(
        <div className={`Article ${direction}`}>
            <div className={'info'}>
                {direction==='' ? <h1>{title}</h1> : <h2>{title}</h2> }
                <p>{description}</p>
                {other}
            </div>
            <div className={'picture'}>
                <img src={picture} alt={'Article figure'}/>
            </div>
        </div>
    )
}


export default Article;