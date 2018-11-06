import React, { Component } from 'react';
import axios from 'axios';
import NewsContainerItem from './NewsContainerItem/NewsContainerItem';
import MediaQuery from 'react-responsive';


class NewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            news: []
        }
    }

    componentWillMount(){
        this.getNewsFeed();
    }

    getNewsFeed = () => {
        axios.get('https://cryptocontrol.io/api/v1/public/news/category?key=' + process.env.REACT_APP_CRYPTO_CONTROL_KEY)
            .then(res => {
                console.log('this is news!', res.data);
                this.setState({news: res.data.general})
            })
    }


    render(){

        let newsData = this.state.news.map((ele) =>
            <NewsContainerItem key={ele._id} article={ele} />
        );

        return(
            <div>
            <MediaQuery minDeviceWidth={1024}>
                <span className="NewsContainer-main-container--desktop">{newsData}</span>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1024}>
                <span className="NewsContainer-main-container">{newsData}</span>
            </MediaQuery>
            </div>
        )
    }
}

export default NewsContainer;