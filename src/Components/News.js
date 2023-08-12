import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps ={
       country:'in',
       pageSize: 8,
       category: 'bussiness'
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitilizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props); 
    this.state={
    articles:[],
    loading:false,
    page:1,
    totalResults:0
     }
    document.title=`${this.capitilizefirstletter(this.props.category)} - NewsMonkey`;
}
async UpdateNews(){
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72e145633db4401ea1db78e74297708d&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data=await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles,
     totalResults:parsedData.totalResults,
    loading:false
    })
}
async componentDidMount(){
    this.UpdateNews();
}

fetchMoreData = async() => {
 this.setState({page:this.state.page +1})
 const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72e145633db4401ea1db78e74297708d&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data=await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData);
  this.setState({articles:this.state.articles.concat(parsedData.articles),
     totalResults:parsedData.totalResults,
    loading:false
    })
};
// handleNextClick= async()=>{
// this.setState({page:this.state.page + 1});
// this.UpdateNews();
// }
// handlePreClick= async()=>{
//   this.setState({page:this.state.page - 1});
//   this.UpdateNews();
// }
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>WorldNews - Top {this.capitilizefirstletter(this.props.category)} Headlines</h1> 
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container my-3'>   
        <div className='row '>
        {this.state.articles.map((element)=>{
         return  <div className='col-md-4' key={element.url}>
         <Newsitem title={element.title} description={element.description}
          imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}
          source={element.source.name}/>
         </div>
        })}  
        </div>
        </div>
        </InfiniteScroll>
        
      </>
      
    )
  }
}

export default News
