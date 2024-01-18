import { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core'
// import InfiniteScroll from 'react-infinite-scroll-component';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Article from './Article';
import { data } from '../Data/data.js';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  loadMore: {
    cursor: 'pointer',
    boxShadow: '0 3px 8px 0 rgb(0 0 0 / 17%), 0 3px 11px 0 rgb(0 0 0 / 18%)',
    border: 'none',
    backgroundColor: 'white',
    fontSize: '15px',
    width: '130px',
    marginLeft: '380px',
    borderRadius: '3px',
    marginTop: '17px',
    marginBottom: '41px',
    padding: '6px 10px!important',
    textAlign: 'center',
    fontWeight: '400',
    position: 'relative',
    [theme.breakpoints.down('sm')] : {
      marginLeft : "90px",
    }
  }
}))




const Articles = ({ category }) => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  let resultNews = [];
  const [page, setPage] = useState(0);

  useEffect(() => {
    newres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  useEffect(() => {
    newres()
    loadNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const newres = () => {
    // console.log(category)
    // console.log('1', resultNews);
    if (category === 'General') {
      resultNews = data;
      setNews(data.slice(0, 5));
    } else {
      resultNews = data.filter(x => x.category === category)
      // console.log('2', resultNews)
      setNews(resultNews);
      // console.log(news)
    }
  }

  const loadNext = () => {
    // console.log("load");
    // console.log('page', page)
    // console.log(resultNews, "result")
    if (news.length !== resultNews.length) {
      setNews([...news, ...[...resultNews].slice(page, page + 5)]);
    }
  }

  return (


    // <InfiniteScroll
    //   dataLength={news.length}
    //   next={() => setPage(page => page + 1 )}
    //   hasMore={true}
    // > </InfiniteScroll>

    <>

      {
        news.length > 0 && news.map((article, index) => (
          <Article article={article} key={1 + index} />
        ))
      }

      <ButtonGroup disableElevation variant="contained" >
        {category === 'General' ?
          <Button disabled={news.length === data.length} className={classes.loadMore} onClick={() => setPage(page + 5)} >Load More</Button>
          :
          <Button disabled className={classes.loadMore} >Load More</Button>
        }
      </ButtonGroup>

    </>

  )
}

export default Articles;