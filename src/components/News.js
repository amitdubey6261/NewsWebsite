import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "Bobby Caina Calvan",
        "title": "Man sought in homeless killings in New York, Washington D.C. - The Associated Press - en Español",
        "description": "NEW YORK (AP) — A search was underway Monday for a gunman who has been stalking homeless men sleeping on the streets of Washington, D.C., and New York City, fatally shooting two people and wounding three more in less than two weeks.",
      "url": "https://apnews.com/article/new-york-washington-homeless-killings-9f535dca333a8ea7ca59ee0a876e14cc",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/7b2b02cf48b94f8db0afe153bd553d47/2496.jpeg",
      "publishedAt": "2022-03-14T22:07:30Z",
      "content": "NEW YORK (AP) A search was underway Monday for a gunman who has been stalking homeless men sleeping on the streets of Washington, D.C., and New York City, fatally shooting two people and wounding thr… [+5523 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
    },
    "author": "Sarah Min",
    "title": "Stock futures rise slightly as Wall Street awaits Fed rate hike, Ukraine developments - CNBC",
    "description": "Investors continue to monitor developments in the Russia-Ukraine conflict and get ready for a key Federal Reserve policy decision.",
    "url": "https://www.cnbc.com/2022/03/14/stock-futures-rise-slightly-as-wall-street-awaits-fed-rate-hike-ukraine-developments.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107030150-Traders-TF-Photo-20220314-ACJ-019-PRESS-2.jpg?v=1647284400",
      "publishedAt": "2022-03-14T22:05:33Z",
      "content": "U.S. stock futures rose slightly on Monday night as investors continue to monitor developments in the Russia-Ukraine conflict and get ready for a key Federal Reserve policy decision.\r\nDow Jones Indus… [+1766 chars]"
    },
    {
        "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Madeline Holcombe, CNN",
      "title": "Alternative sweeteners in your drinks can help with weight and diabetes risk, study says - CNN",
      "description": "Most health care experts want us to cut down on sugary drinks, but between tea, coffee and soda. Water is most recommended by health care experts, but a new study says people looking to manage cardiometabolic risk and weight may be able to add low- or no-calo…",
      "url": "https://www.cnn.com/2022/03/14/health/sweetened-beverages-no-sugar-study-wellness/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220314142106-soda-in-glass-stock-super-tease.jpg",
      "publishedAt": "2022-03-14T21:39:00Z",
      "content": "Sign up for CNN's Eat, But Better: Mediterranean Style. Our eight-part guide shows you a delicious expert-backed eating lifestyle that will boost your health for life.\r\n (CNN)In our soda, tea, coffee… [+3196 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
      },
      "author": "Danny Hakim, Jo Becker",
      "title": "Ginni Thomas Says She Attended Jan. 6 Rally - The New York Times",
      "description": "The disclosure by the wife of Justice Clarence Thomas is likely to raise new questions about her support of efforts to overturn the 2020 election results.",
      "url": "https://www.nytimes.com/2022/03/14/us/politics/ginni-thomas-jan-6-rally.html",
      "urlToImage": "https://static01.nyt.com/images/2022/03/14/multimedia/14ginni-1/merlin_179163540_cbc5b618-6a9c-4c54-a00c-47dc624072a0-facebookJumbo.jpg",
      "publishedAt": "2022-03-14T21:27:40Z",
      "content": "Ms. Thomas sits on the nine-member board of CNP Action, a conservative group that helped advance the Stop the Steal movement that tried to keep Mr. Trump in office. The group instructed members to pr… [+1585 chars]"
    },
    {
        "source": {
        "id": null,
        "name": "CBS Sports"
    },
    "author": null,
      "title": "NCAA Tournament 2022 bracket: Simulation predicts surprising upsets, March Madness picks, top sleepers - CBS Sports",
      "description": "SportsLine's model has nailed 17 first-round upsets by double-digit seeds and revealed its NCAA bracket 2022",
      "url": "https://www.cbssports.com/college-basketball/news/ncaa-tournament-2022-bracket-simulation-predicts-surprising-upsets-march-madness-picks-top-sleepers/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/03/11/367dc564-0dff-4b35-8ab3-200afab2dc83/thumbnail/1200x675/d7cac7f47409ff0ed160a8077e3ac76f/notae-arkansas-usatsi.jpg",
      "publishedAt": "2022-03-14T21:25:11Z",
      "content": "Gone are the days in which the First Four games of March Madness are solely mid-majors fighting for a chance to be among the field of 64. The 2022 NCAA Tournament bracket will see a pair of major con… [+4623 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Katie Hunt, CNN",
        "title": "Holes the size of city blocks are forming in the Arctic seafloor - CNN",
        "description": "Marine scientists have discovered deep sinkholes -- including one larger than a city block of six-story buildings -- and ice-filled hills that have formed \"extraordinarily\" rapidly on a remote part of the Arctic seafloor.",
        "url": "https://www.cnn.com/2022/03/14/world/arctic-seafloor-holes-permafrost-scn/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220314141204-01-arctic-seafloor-holes-permafrost-scn-super-tease.jpg",
        "publishedAt": "2022-03-14T21:22:00Z",
        "content": "(CNN)Marine scientists have discovered deep sinkholes -- one larger than a city block of six-story buildings -- and ice-filled hills that have formed \"extraordinarily\" rapidly on a remote part of the… [+6374 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Mail"
        },
      "author": "Erica Tempesta",
      "title": "Country music legend Dolly Parton BOWS OUT of Rock & Roll Hall of Fame nomination - Daily Mail",
      "description": "Parton, 76, was announced as one of this year's 17 nominees in February.",
      "url": "https://www.dailymail.co.uk/femail/article-10612233/Country-music-legend-Dolly-Parton-BOWS-Rock-Roll-Hall-Fame-nomination.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/14/20/55350579-0-image-a-46_1647289884192.jpg",
      "publishedAt": "2022-03-14T21:17:37Z",
      "content": "Dolly Parton has withdrawn her nomination for induction into the Rock &amp; Roll Hall of Fame, saying she doesn't feel she has 'earned that right.' \r\nThe 76-year-old country legend was announced as o… [+3726 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Videocardz.com"
        },
        "author": null,
        "title": "Microsoft DirectStorage API is now available on PC - VideoCardz.com",
        "description": "DirectStorage API Now Available on PC Starting today, Windows games can ship with DirectStorage. This public SDK release begins a new era of fast load times and detailed worlds in PC games by allowing developers to more fully utilize the speed of the latest s…",
      "url": "https://videocardz.com/press-release/microsoft-directstorage-api-is-now-available-on-pc",
      "urlToImage": "https://cdn.videocardz.com/1/2022/03/directstorage.jpg",
      "publishedAt": "2022-03-14T21:00:00Z",
      "content": "« press release »\r\nStarting today, Windows games can ship with DirectStorage. This public SDK release begins a new era of fast load times and detailed worlds in PC games by allowing developers to mor… [+2087 chars]"
    },
    {
        "source": {
            "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Wisconsin flock of 2.75 mln chickens to be culled as bird flu spreads in U.S. - Reuters.com",
      "description": "A commercial flock of 2.75 million egg-laying chickens in Wisconsin will be culled to prevent the spread of a highly lethal form of avian flu after birds on the farm tested positive for the disease, state officials said on Monday.",
      "url": "https://www.reuters.com/world/us/us-detects-highly-lethal-bird-flu-wisconsin-egg-laying-chickens-2022-03-14/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=79",
      "publishedAt": "2022-03-14T20:58:00Z",
      "content": "CHICAGO, March 14 (Reuters) - A commercial flock of 2.75 million egg-laying chickens in Wisconsin will be culled to prevent the spread of a highly lethal form of avian flu after birds on the farm tes… [+957 chars]"
    },
    {
      "source": {
          "id": "cbs-news",
          "name": "CBS News"
      },
      "author": "Eleanor Watson, David Martin, Weijia Jiang, Olivia Gazis",
      "title": "Russia asks China for military help in war with Ukraine, U.S. officials say - CBS News",
      "description": "The request included military aid and equipment, according to the officials.",
      "url": "https://www.cbsnews.com/news/russia-asks-china-for-military-help-in-war-with-ukraine-u-s-officials-say/",
      "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2022/02/04/f6461ba8-a1b5-4e5e-b34a-035f3a759f8f/thumbnail/1200x630/f233ac8b1672274bf3efcc59bcbff268/putin-xi-ap22035309764994.jpg",
      "publishedAt": "2022-03-14T20:57:00Z",
      "content": "Russia has asked China for support in its war against Ukraine, according to two U.S. officials. The request included military aid and equipment, but it's not clear what specifically Moscow has reques… [+4149 chars]"
    },
    {
      "source": {
          "id": "cnn",
        "name": "CNN"
    },
    "author": "Oliver Darcy, CNN Business",
      "title": "Fox News correspondent hospitalized after being injured in Ukraine - CNN",
      "description": "Fox News correspondent Benjamin Hall, who had been deployed in recent weeks to cover the war in Ukraine, has been hospitalized after being injured while reporting near Kyiv, the network said on Monday.",
      "url": "https://www.cnn.com/2022/03/14/media/fox-correspondent-ben-hall-ukraine/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220314160217-ben-hall-fox-news-correspondent-super-tease.jpg",
      "publishedAt": "2022-03-14T20:40:05Z",
      "content": "New York (CNN Business)Fox News correspondent Benjamin Hall, who had been deployed in recent weeks to cover the war in Ukraine, has been hospitalized after being injured while reporting near Kyiv, th… [+2772 chars]"
    },
    {
        "source": {
        "id": null,
        "name": "Benzinga"
    },
    "author": null,
    "title": "Dogecoin Bulls And Bears Enter Fierce Battle After Elon Musk Hodls - Benzinga",
    "description": "Dogecoin (CRYPTO: DOGE) spiked almost 10% higher just after m...",
    "url": "https://www.benzinga.com/markets/cryptocurrency/22/03/26129343/dogecoin-bulls-and-bears-enter-fierce-battle-after-elon-musk-hodls",
    "urlToImage": "https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/dogecoin-6363104_1920..image_by_knfind_from_pixabay__3.jpg?width=720",
    "publishedAt": "2022-03-14T20:25:44Z",
    "content": "Dogecoin (CRYPTO: DOGE) spiked almost 10% higher just after midnight on Sunday after Tesla, Inc (NASDAQ:TSLA) CEO Elon Musk said on Twitter Inc (NYSE:TWTR) he had no plans to sell his stake in the Sh… [+3259 chars]"
},
{
    "source": {
        "id": null,
        "name": "New York Post"
    },
      "author": null,
      "title": "NFL free agency 2022 tracker: Mitch Trubisky, Haason Reddick find new homes - New York Post ",
      "description": "Follow the New York Post’s NFL free agency tracker to get the latest updates on deals from around the league as the legal tampering period begins Monday at noon.",
      "url": "https://nypost.com/2022/03/14/nfl-free-agency-2022-tracker-live-updates-of-player-signings/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/mitch-trubisky-nfl-free-agency-steelers.jpg?quality=90&strip=all&w=1024",
      "publishedAt": "2022-03-14T20:25:00Z",
      "content": "Ladies and gentlemen, start your signings: NFL free agency is here.\r\nWith the league’s calendar officially flipping to 2022 beginning on Wednesday, Mar. 16, and there will be a bevy of big-name playe… [+881 chars]"
    },
    {
      "source": {
          "id": null,
          "name": "MLB.com"
        },
        "author": "Mark Bowman",
        "title": "Braves acquire Matt Olson from A's for 4 prospects - MLB.com",
        "description": "NORTH PORT, Fla. -- Matt Olson is returning home to replace Freddie Freeman as the Braves’ first baseman.\nAtlanta acquired Olson from the A’s in exchange for two highly regarded prospects in catcher Shea Langeliers and outfielder Cristian Pache, 2021 first-ro…",
        "url": "https://www.mlb.com/news/matt-olson-traded-to-braves",
        "urlToImage": "https://img.mlbstatic.com/mlb-images/image/private/t_2x1/t_w1536/mlb/inuxzgaenuqdpscbqvpl.jpg",
      "publishedAt": "2022-03-14T20:15:00Z",
      "content": "NORTH PORT, Fla. -- Matt Olson is returning home to replace Freddie Freeman as the Braves first baseman. \r\nAtlanta acquired Olson from the As in exchange for two highly regarded prospects in catcher … [+1609 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "WikiLeaks' Assange denied permission to appeal extradition decision at UK Supreme Court - Reuters.com",
        "description": "WikiLeaks founder Julian Assange has been denied permission to appeal at Britain's Supreme Court against a decision to extradite him to the United States, the court said on Monday.",
        "url": "https://www.reuters.com/world/wikileaks-assange-denied-permission-appeal-extradite-decision-supreme-court-2022-03-14/",
      "urlToImage": "https://www.reuters.com/resizer/QUQLPzTMKk0LzlwjWKorFrwQbro=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DK53ZBGRVJMQJN4R5CX4CUYIZQ.jpg",
      "publishedAt": "2022-03-14T19:59:00Z",
      "content": "LONDON, March 14 (Reuters) - WikiLeaks founder Julian Assange has been denied permission to appeal at Britain's Supreme Court against a decision to extradite him to the United States, the court said … [+2114 chars]"
    },
    {
        "source": {
            "id": "buzzfeed",
            "name": "Buzzfeed"
      },
      "author": "Natalie Oganesyan",
      "title": "Kim Kardashian Asked Kanye West To \"Please Stop With This Narrative\" That He Isn't Allowed To See Their Children - BuzzFeed",
      "description": "\"You were just here this morning.\"",
      "url": "https://www.buzzfeed.com/natalieoganesyan/kim-kardashian-kanye-west-narrative-north-west-seeing-kids",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/14/19/enhanced/935d3f7a6aed/original-7574-1647285230-20.jpg?crop=1581:830;0,0%26downsize=1250:*",
      "publishedAt": "2022-03-14T19:49:49Z",
      "content": "Kim Kardashian / Via instagram.comThis led some to call out the double standard of Ye's \"obsession\" over his daughters' appearances compared to his sons', saying that it's emblematic of his views tow… [+183 chars]"
    },
    {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
    },
    "author": "John Bacon, Tom Vanden Brook, Terry Collins, Christal Hayes and Dylan Wells, USA TODAY",
      "title": "Russia assault stalls, US officials says; Zelenskyy to address Congress on Wednesday: Live Ukraine updates - USA TODAY",
      "description": "Almost all of Russia’s assaults on Ukrainian cities remain stalled, and there was little gain over the weekend, a  senior U.S. official said.",
      "url": "https://www.usatoday.com/story/news/politics/2022/03/14/ukraine-russia-invasion-live-updates/7031496001/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/03/14/USAT/067478c3-e0ce-465c-91cf-b4585fd94e95-AP_APTOPIX_Russia_Ukraine_War.jpg?auto=webp&crop=5999,3374,x0,y626&format=pjpg&width=1200",
      "publishedAt": "2022-03-14T19:42:59Z",
      "content": "Almost all of Russia’s assaults on Ukrainian cities remain stalled, and there have been little or no advances made over the weekend, a senior U.S. Defense Department source said Monday.\r\nUkrainian re… [+13057 chars]"
    },
    {
        "source": {
            "id": "cnn",
        "name": "CNN"
      },
      "author": "Sandee LaMotte, CNN",
      "title": "Sleeping with even a small amount of light may harm your health, study says - CNN",
      "description": "Sleeping with the lights on, even if they were dim, was associated with poor heart health and an increased risk for diabetes, a new study found.",
      "url": "https://www.cnn.com/2022/03/14/health/sleeping-lights-danger-wellness/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210813151854-deep-sleep-stock-super-tease.jpg",
      "publishedAt": "2022-03-14T19:37:51Z",
      "content": "Sleep Awareness Week is March 13-19, and CNN's Life, But Better Sleep section will have daily tips and facts you need to get a better night's slumber. Join us!\r\n (CNN)Sleeping for only one night with… [+4626 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Homes for Ukraine refugee scheme launches in UK - BBC.com",
    "description": "People who have a spare room to offer to someone in need can now register their interest online.",
    "url": "https://www.bbc.com/news/uk-60741942",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1F35/production/_123698970_gettyrefugees.jpg",
    "publishedAt": "2022-03-14T19:32:31Z",
    "content": "By Lauren TurnerBBC News\r\nImage source, Getty Images\r\nThe government has launched its Homes for Ukraine site for those wanting to register to host a refugee, with 25,000 signing up in the first three… [+5423 chars]"
},
{
      "source": {
          "id": null,
        "name": "CNBC"
    },
    "author": "Lorie Konish",
    "title": "Tom Brady cut his retirement short. If other retirees take his cue, it may reduce the labor shortage - CNBC",
    "description": "Tom Brady retired for 40 days before deciding to give it a go for another season playing for the Tampa Bay Buccaneers. Other retirees could take his lead.",
    "url": "https://www.cnbc.com/2022/03/14/other-retirees-could-take-tom-bradys-cue-and-return-to-the-workforce.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107009439-1643727930896-gettyimages-1339388767-ja4_1316_20210910120616859.jpeg?v=1647284711",
    "publishedAt": "2022-03-14T19:18:51Z",
    "content": "Tom Brady of the Tampa Bay Buccaneers waves to fans at Raymond James Stadium in Tampa, Florida, on Sept. 9, 2021.\r\nTom Brady sat on the sidelines for only 40 days before deciding to end his retiremen… [+3076 chars]"
    } 
] 

  constructor(){
  super();
  console.log("hello iam contructor");
  this.state = { articles : this.articles , loading : false }
}
  render() {
    return (
        <>
        <center>  <h1>Welcome To Dubey's News App</h1> </center>
        <div className = "container my-3" >
            <div className="row">
            {this.state.articles.map((element)=>{return <div key={element.url} className="col-md-4 my-3"> <NewsItem  title = {element.title} description = {element.description} imgurl = {element.urlToImage} newsurl = {element.url} /> </div>})} 
            </div>
        </div>
        </>
    )
  }
}

export default News