import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CryptoListPagination = (props) => {
    // let s = {...this.state};
    let s = props;
        /*adjust page number so allows for previous numbers before pagenumber
            if left as is, there is no way to traverse backwards
        */
        let pageNum = s.paginationMarker - 2;
        let buttons = [];
        let i = 0;
        //outer bounds of index, to stop paginating nonexistant pages
        pageNum < 0 ? pageNum = 0 : null;
        pageNum >= 15 ? pageNum = 15 : null;
        while(i < 5){
            i++
            pageNum++
            let boundButton = props.setActivePage.bind(this, pageNum);
            buttons.push(
                <div className="crypto-container__pagination-button" key={pageNum} onClick={boundButton}>{pageNum}</div>
            )
        }
        let firstPage = 1;
        let prevPage;
        let nextPage;
        let first = 1, last = 20;
        if (pageNum <= 5 || pageNum >= 18){
            

        } 
        nextPage = s.paginationMarker + 1;
        prevPage = s.paginationMarker - 1;
        const boundPrev = props.setActivePage.bind(this, prevPage)
        buttons.unshift(<div className="crypto-container__pagination-button" onClick={boundPrev} key={prevPage}>
                            <FontAwesomeIcon
                                        icon="angle-left"
                                        size="lg"
                                        color="grey"
                                    />
                        </div>)
        const boundFirstPage = props.setActivePage.bind(this, firstPage)
        buttons.unshift(<div className="crypto-container__pagination-button" onClick={boundFirstPage} key={firstPage}>
                            <FontAwesomeIcon
                                        icon="angle-double-left"
                                        size="lg"
                                        color="grey"
                                    />
                        </div>);
        const boundNextPage = props.setActivePage.bind(this, nextPage)
        buttons.push(<div className="crypto-container__pagination-button" onClick={boundNextPage} key={nextPage}>
                        <FontAwesomeIcon
                                    icon="angle-right"
                                    size="lg"
                                    color="grey"
                                />
                    </div>)

        return(
            buttons
        )
                    
}

export default CryptoListPagination;