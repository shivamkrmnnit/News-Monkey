import React , {useEffect , useState} from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
    

  

    const [articles , setArticles] = useState([])
    const [loading , setLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [totalResults , setTotalResults] = useState(0)


News.defaultProps = {
    country: 'in',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=20`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);

        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(()=> {
document.title = `${capital(props.category)} - NewsMonkey`

        updateNews();
    },[])

    const fetchData = async () => {

        

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=20`;
        setPage(page +1)
            // this.setState({ loading: true })
            let data = await fetch(url);

            let parsedData = await data.json()

            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)


    }

    

   
        return (
            <>
                <div className='text-center' >    <h2>NewsMonkey - Top {capital(props.category)} Headlines</h2></div>
                {loading && <Spiner/>}


                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spiner/>}

                >
                    <div className='container'>
                    <div className="row">
                        {articles.map((Element) => {
                            if (!Element.description) Element.description = "This is description";
                            return <div className='col-md-4' key={Element.url}>
                                <NewsItem title={Element.title.slice(0, 35)} description={Element.description.slice(0, 60)} imageUrl={Element.urlToImage} newUrl={Element.url} author={Element.author} date={Element.publishedAt} />
                            </div>
                        })}



                    </div>
                    </div>

                </InfiniteScroll>




               
            </>
        );
    
}

export default News;
