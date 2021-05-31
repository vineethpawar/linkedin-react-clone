
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


import React from 'react'
import "./JobDefault.css"


function JobDefault() {
    return (
        <div className="job__default">
            <div className="job__myjobs">
                <div className="job__myjobs__btn">
                <BookmarkIcon className="bookmarkIcon"/> 
                <h3>My Jobs</h3>
                </div>

                <div className="post__job">
                    <CreateIcon className="write__btn"/> 
                    <h2>Post  a free job</h2>

                </div>
                
            </div>

            <div className="job__search">
                <h2>Search for your next job</h2>
                 <div className="job__search__strip">
                     <div className="job__search__left">
                        <SearchIcon/>
                        <input type="text" placeholder="Search by title, skill, or company" />
                     </div>

                     <div className="job__search__right">
                        <LocationOnIcon/>
                        <input type="text" placeholder="City, state, or zip code" />
                     </div>
                      <button className="job__search__btn">Search</button>   

                 </div>
            </div>



            <div className="recommended__jobs">
                <h3>Recommended for you</h3>
                <h4>Based on your profile</h4>

                <div className="recommend__jobs__grid">

                    
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  
                    <div className="rj__grid__item">
                        <div className="rj__grid__item__header">
                            <img className="rj__comp__img" src="data:image/png;base64,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" alt="" />
                            <BookmarkIcon className="rj__bookmark__icon"/>
                        </div>

                        <div className="rj__grid__item__content">
                            <h3 className="rj__post__name">Senioesffe sefsef sr frontent developer</h3>
                            <h4 className="rj__comp__name">Flipkkart</h4>
                            <h4 className="rj__comp__name">Bengaluru, Karnataka</h4>
                        </div>
                        <div className="rj__grid__item__footer">
                            <div className="rj__grid__item__footer__applicants">
                              <p>0 applications</p>
                              <p>2 days ago</p>
                            </div>
                            <div className="rj__grid__item__footer__rest">
                                <button className="rj__apply">Apply</button>
                            </div>
                          
                          
                        </div>
                    </div>


                  


                </div>
            </div>
        </div>
    )
}

export default JobDefault
