import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
          <SearchIcon className="widgets_searchIcon"/>
          <input placeholder="Search Twitter" type="text"/>
        </div>
        <div className="widgets_widgetsContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed
        tweetId={'1636689334358224897'}
                                    />
 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="nitish"
  options={{height: 400}}
/>
<TwitterShareButton
    url={'https://www.facebook.com/profile.'}
    options={{ text: '#reactjs is awesome', via: 'nitish' }}
  />


        </div>
    </div>
  );
}

export default Widgets;