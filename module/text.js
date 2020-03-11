 module.exports = `<!DOCTYPE html>


    <html itemscope itemtype="http://schema.org/QAPage" class="html__responsive">

    <head>

        <title>node.js - How to execute start script with Nodemon? - Stack Overflow</title>
        <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
        <link rel="apple-touch-icon" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">
        <link rel="image_src" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a"> 
        <link rel="search" type="application/opensearchdescription+xml" title="Stack Overflow" href="/opensearch.xml">
        <link rel="canonical" href="https://stackoverflow.com/questions/33879896/how-to-execute-start-script-with-nodemon" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">

        <meta property="og:type" content= "website" />
        <meta property="og:url" content="https://stackoverflow.com/questions/33879896/how-to-execute-start-script-with-nodemon"/>
        <meta property="og:site_name" content="Stack Overflow" />
        <meta property="og:image" itemprop="image primaryImageOfPage" content="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:domain" content="stackoverflow.com"/>
        <meta name="twitter:title" property="og:title" itemprop="name" content="How to execute start script with Nodemon?" />
        <meta name="twitter:description" property="og:description" itemprop="description" content="How can I execute the start script from a package.json file with nodemon?" />
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://cdn.sstatic.net/Js/stub.en.js?v=bd941f66f2cb"></script>
    
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Shared/stacks.css?v=2739be7ed848" >
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=7699f32050c0" >

    
            <link rel="alternate" type="application/atom+xml" title="Feed for question &#39;How to execute start script with Nodemon?&#39;" href="/feeds/question/33879896">
            <meta name="twitter:app:country" content="US" />
            <meta name="twitter:app:name:iphone" content="Stack Exchange iOS" />
            <meta name="twitter:app:id:iphone" content="871299723" />
            <meta name="twitter:app:url:iphone" content="se-zaphod://stackoverflow.com/questions/33879896/how-to-execute-start-script-with-nodemon" />
            <meta name="twitter:app:name:ipad" content="Stack Exchange iOS" />
            <meta name="twitter:app:id:ipad" content="871299723" />
            <meta name="twitter:app:url:ipad" content="se-zaphod://stackoverflow.com/questions/33879896/how-to-execute-start-script-with-nodemon" />
            <meta name="twitter:app:name:googleplay" content="Stack Exchange Android">
            <meta name="twitter:app:url:googleplay" content="http://stackoverflow.com/questions/33879896/how-to-execute-start-script-with-nodemon">
            <meta name="twitter:app:id:googleplay" content="com.stackexchange.marvin">
        <script>
            StackExchange.ready(function () {
                    
                    StackExchange.using("snippets", function () {
                        StackExchange.snippets.initSnippetRenderer();
                    });
                    

                StackExchange.using("postValidation", function () {
                    StackExchange.postValidation.initOnBlurAndSubmit($('#post-form'), 2, 'answer');
                });

                
                StackExchange.question.init({showAnswerHelp:true,totalCommentCount:1,shownCommentCount:1,highlightColor:'#F4A83D',backgroundColor:'#FFF',questionId:33879896});

                styleCode();

                    StackExchange.realtime.subscribeToQuestion('1', '33879896');
                                                    StackExchange.using("gps", function () { StackExchange.gps.trackOutboundClicks('#content', '.post-text'); });

            });
        </script>

        
        
        
        
        
        
        


        <script>
        StackExchange.init({"locale":"en","serverTime":1583943639,"routeName":"Questions/Show","stackAuthUrl":"https://stackauth.com","networkMetaHostname":"meta.stackexchange.com","site":{"name":"Stack Overflow","description":"Q&A for professional and enthusiast programmers","isNoticesTabEnabled":true,"enableNewTagCreationWarning":true,"insertSpaceAfterNameTabCompletion":false,"id":1,"childUrl":"https://meta.stackoverflow.com","negativeVoteScoreFloor":null,"enableSocialMediaInSharePopup":true,"protocol":"https"},"user":{"fkey":"9dcd9a24f8faa1e9833318f41ca8bff5a0cc7fa7a257ff63d0fb22b91bd317ad","tid":"3ce79ce5-6f59-6145-0bb3-eb3d7c27e999","rep":0,"isAnonymous":true,"isAnonymousNetworkWide":true,"ab":{"satisfaction_survey_anon":{"v":"anon","g":1}}},"events":{"postType":{"question":1},"postEditionSection":{"title":1,"body":2,"tags":3}},"story":{"minCompleteBodyLength":75,"likedTagsMaxLength":300,"dislikedTagsMaxLength":300},"jobPreferences":{"maxNumDeveloperRoles":2,"maxNumIndustries":4},"svgIconPath":"https://cdn.sstatic.net/Img/svg-icons","svgIconHash":"2da6c34638eb"}, {"userProfile":{"openGraphAPIKey":"4a307e43-b625-49bb-af15-ffadf2bda017"},"userMessaging":{"showNewFeatureNotice":true},"tags":{},"snippets":{"renderDomain":"stacksnippets.net","snippetsEnabled":true},"slack":{"sidebarAdDismissCookie":"slack-sidebar-ad"},"site":{"allowImageUploads":true,"enableImgurHttps":true,"enableUserHovercards":true,"forceHttpsImages":true,"styleCode":true},"paths":{},"monitoring":{"clientTimingsAbsoluteTimeout":30000,"clientTimingsDebounceTimeout":1000},"mentions":{"maxNumUsersInDropdown":50},"markdown":{"asteriskIntraWordEmphasis":true},"flags":{"allowRetractingCommentFlags":true,"allowRetractingFlags":true},"comments":{},"accounts":{"currentPasswordRequiredForChangingStackIdPassword":true}});
        StackExchange.using.setCacheBreakers({"js/adops.en.js":"22a9bd59b1e9","js/ask.en.js":"e4dd8c66240e","js/begin-edit-event.en.js":"8f05bb4ed432","js/events.en.js":"40c2b095006c","js/explore-qlist.en.js":"222b04ca33bc","js/full-anon.en.js":"78f9d373b74d","js/full.en.js":"1d327412fdaa","js/help.en.js":"fefc3044f2b9","js/inline-tag-editing.en.js":"4e684c7fc0bc","js/keyboard-shortcuts.en.js":"df288b34476c","js/mobile.en.js":"a168d277c579","js/moderator.en.js":"b44a0725d70d","js/post-validation.en.js":"3cfe827af934","js/prettify-full.en.js":"4682cddeff3a","js/question-editor.en.js":"","js/review.en.js":"bd6e40c4c87d","js/revisions.en.js":"88384ac38cf5","js/tageditor.en.js":"0ffdcf3fc9c4","js/tageditornew.en.js":"84ce1da80fae","js/tagsuggestions.en.js":"4d2d70ee1e16","js/wmd.en.js":"1a3e2b031ccc","js/snippet-javascript-codemirror.en.js":"a9422d96bba8"});
        StackExchange.using("gps", function() {
             StackExchange.gps.init(true);
        });
    </script>
    <noscript id="noscript-css"><style>body,.top-bar{margin-top:1.9em}</style></noscript>
    </head>
        <body class="question-page unified-theme">
    <div id="notify-container"></div>
    <div id="custom-header"></div>




<header class="top-bar js-top-bar top-bar__network _fixed">
    <div class="wmx12 mx-auto grid ai-center h100" role="menubar">
        <div class="-main grid--cell">
                <a href="#" class="left-sidebar-toggle p0 ai-center jc-center js-left-sidebar-toggle" role="menuitem" aria-haspopup="true" aria-controls="left-sidebar" aria-expanded="false"><span class="ps-relative"></span></a>
                <div class="topbar-dialog leftnav-dialog js-leftnav-dialog dno">
                    <div class="left-sidebar js-unpinned-left-sidebar" data-can-be="left-sidebar" data-is-here-when="sm"></div>
                </div>
                                <a href="https://stackoverflow.com" class="-logo js-gps-track"
                        data-gps-track="top_nav.click({is_current:false, location:2, destination:8})">
                        <span class="-img _glyph">Stack Overflow</span>
                    </a>



        </div>

            <ol class="list-reset grid gs4" role="presentation">
                <li class="grid--cell">
                    <a href="#"
                        class="-marketing-link js-gps-track js-products-menu"
                        aria-controls="products-popover"
                        data-controller="s-popover"
                        data-action="s-popover#toggle"
                        data-s-popover-placement="bottom"
                        data-gps-track="top_nav.products.click({location:2, destination:1})"
                        data-ga="[&quot;top navigation&quot;,&quot;products menu click&quot;,null,null,null]">
                        Products
                    </a>
                </li>

                    <li class="grid--cell md:d-none">
                        <a href="/teams/customers" class="-marketing-link js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:7})"
                            data-ga="[&quot;top navigation&quot;,&quot;customers menu click&quot;,null,null,null]">Customers</a>
                    </li>
                    <li class="grid--cell md:d-none">
                        <a href="/teams/use-cases" class="-marketing-link js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:8})"
                           data-ga="[&quot;top navigation&quot;,&quot;use cases menu click&quot;,null,null,null]">Use cases</a>
                    </li>
            </ol>
            <div class="s-popover ws2 p6"
                    id="products-popover"
                    role="menu"
                    aria-hidden="true">
                <div class="s-popover--arrow"></div>
                <ol class="list-reset s-anchors s-anchors__inherit">
                    <li>
                        <a href="/questions" class="d-block py6 px6 bar-sm h:bg-orange-500 h:fc-white js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:2})"
                           data-ga="[&quot;top navigation&quot;,&quot;public qa submenu click&quot;,null,null,null]">
                            <span class="fs-body1 d-block">Stack Overflow</span>
                            <span class="fs-caption d-block o70">Public questions and answers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/teams" class="d-block py6 px6 bar-sm h:bg-orange-500 h:fc-white js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:3})"
                           data-ga="[&quot;top navigation&quot;,&quot;teams submenu click&quot;,null,null,null]">
                            <span class="fs-body1 d-block">Teams</span>
                            <span class="fs-caption d-block o70">Private questions and answers for your team</span>
                        </a>
                    </li>
                    <li>
                        <a href="/enterprise" class="d-block py6 px6 bar-sm h:bg-orange-500 h:fc-white js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:4})"
                           data-ga="[&quot;top navigation&quot;,&quot;enterprise submenu click&quot;,null,null,null]">
                            <span class="fs-body1 d-block">Enterprise</span>
                            <span class="fs-caption d-block o70">Private self-hosted questions and answers for your enterprise</span>
                        </a>
                    </li>
                    <li class="bt bc-black-3 mln6 mrn6 mt6 pt6 px6">
                        <a href="https://stackoverflow.com/talent" class="d-block py6 px6 bar-sm h:bg-orange-500 h:fc-white js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:5})"
                           data-ga="[&quot;top navigation&quot;,&quot;talent submenu click&quot;,null,null,null]">
                            <span class="fs-body1 d-block">Talent</span>
                            <span class="fs-caption d-block o70">Hire technical talent</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/advertising" class="d-block py6 px6 bar-sm h:bg-orange-500 h:fc-white js-gps-track"
                           data-gps-track="top_nav.products.click({location:2, destination:6})"
                           data-ga="[&quot;top navigation&quot;,&quot;advertising submenu click&quot;,null,null,null]">
                            <span class="fs-body1 d-block">Advertising</span>
                            <span class="fs-caption d-block o70">Reach developers worldwide</span>
                        </a>
                    </li>

                </ol>
            </div>

            <form id="search" role="search" action=/search method="get" class="grid--cell fl-grow1 searchbar px12 js-searchbar " autocomplete="off">
                    <div class="ps-relative">
                        <input name="q"
                               type="text"
                               placeholder="Search…"
                               value=""
                               autocomplete="off"
                               maxlength="240"
                               class="s-input s-input__search js-search-field "
                               aria-label="Search"
                               aria-controls="top-search" 
                               data-controller="s-popover"
                               data-action="focus->s-popover#show"
                               data-s-popover-placement="bottom-start"/>
                        <svg aria-hidden="true" class="svg-icon s-input-icon s-input-icon__search iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"/></svg>
<div class="s-popover p0 wmx100 wmn4 sm:wmn-initial js-top-search-popover s-popover--arrow__tl" id="top-search" role="menu">
    <div class="js-spinner p24 grid ai-center jc-center d-none">
        <div class="s-spinner s-spinner__sm fc-orange-400">
            <div class="v-visible-sr">Loading…</div>
        </div>
    </div>

    <span class="v-visible-sr js-screen-reader-info"></span>
    <div class="js-ac-results overflow-y-auto hmx3 d-none"></div>

    <div class="js-search-hints" aria-describedby="Tips for searching"></div>
</div>
                    </div>
            </form>

        



<ol class="overflow-x-auto ml-auto -secondary grid ai-center list-reset h100 user-logged-out" role="presentation">
        <li class="-item searchbar-trigger"><a href="#" class="-link js-searchbar-trigger" role="button" aria-label="Search" aria-haspopup="true" aria-controls="search" title="Click to show search"><svg aria-hidden="true" class="svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"/></svg></a></li>
        
            <li class="-ctas">
                        <a href="https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f33879896%2fhow-to-execute-start-script-with-nodemon" class="login-link s-btn s-btn__filled py8 js-gps-track" rel="nofollow"
                           data-gps-track="login.click" data-ga="[&quot;top navigation&quot;,&quot;login button click&quot;,null,null,null]">Log in</a>
                        <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent" class="login-link s-btn s-btn__primary py8" rel="nofollow" data-ga="[&quot;sign up&quot;,&quot;Sign Up Navigation&quot;,&quot;Header&quot;,null,null]">Sign up</a>

            </li>

    <li class="js-topbar-dialog-corral" role="presentation">


    <div class="topbar-dialog siteSwitcher-dialog dno" role="menu">
        <div class="header">
            <h3>
                <a href="https://stackoverflow.com">current community</a>
            </h3>
        </div>
        <div class="modal-content bg-powder-050">
            <ul class="current-site">
                    <li class="grid">
                            <div class="fl1">
            <a href="https://stackoverflow.com"
       class="current-site-link site-link js-gps-track grid gs8 gsx"
       data-id="1"
       data-gps-track="site_switcher.click({ item_type:3 })">
        <div class="favicon favicon-stackoverflow site-icon grid--cell" title="Stack Overflow"></div>
        <span class="grid--cell fl1">
            Stack Overflow
        </span>
    </a>

    </div>
    <div class="related-links">
            <a href="https://stackoverflow.com/help" class="js-gps-track"     data-gps-track="site_switcher.click({ item_type:14 })"
>help</a>
                    <a href="https://chat.stackoverflow.com" class="js-gps-track"     data-gps-track="site_switcher.click({ item_type:6 })"
>chat</a>
            </div>

                    </li>
                    <li class="related-site grid">
                            <div class="L-shaped-icon-container">
        <span class="L-shaped-icon"></span>
    </div>

                            <a href="https://meta.stackoverflow.com"
       class="site-link js-gps-track grid gs8 gsx"
       data-id="552"
       data-gps-track="site.switch({ target_site:552, item_type:3 }),site_switcher.click({ item_type:4 })">
        <div class="favicon favicon-stackoverflowmeta site-icon grid--cell" title="Meta Stack Overflow"></div>
        <span class="grid--cell fl1">
            Meta Stack Overflow
        </span>
    </a>

                    </li>
            </ul>
        </div>

        <div class="header" id="your-communities-header">
            <h3>
your communities            </h3>

        </div>
        <div class="modal-content" id="your-communities-section">

                <div class="call-to-login">
<a href="https://stackoverflow.com/users/signup?ssrc=site_switcher&amp;returnurl=%2fusers%2fstory%2fcurrent" class="login-link js-gps-track"     data-gps-track="site_switcher.click({ item_type:10 })"
>Sign up</a> or <a href="https://stackoverflow.com/users/login?ssrc=site_switcher&amp;returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f33879896%2fhow-to-execute-start-script-with-nodemon" class="login-link js-gps-track"     data-gps-track="site_switcher.click({ item_type:11 })"
>log in</a> to customize your list.
                </div>
        </div>

        <div class="header">
            <h3><a href="https://stackexchange.com/sites">more stack exchange communities</a>
            </h3>
            <a href="https://stackoverflow.blog" class="fr">company blog</a>
        </div>
        <div class="modal-content">
                <div class="child-content"></div>
        </div>        
    </div>
    </li>
</ol>

    </div>
</header>
    <div id="js-gdpr-consent-banner" class="p8 ff-sans ps-fixed b0 l0 r0 z-banner" role="banner" aria-hidden="false" style="background-color: #3b4045; color: white;"> 
        <div class="wmx8 mx-auto grid grid__center" role="alertdialog" aria-describedby="notice-message">
            <div class="grid--cell mr12" aria-label="notice-message">
                <p class="mb0 lh-lg">
                    By using our site, you acknowledge that you have read and understand our <a class="s-link s-link__inherit td-underline fc-white" target="_blank" href="https://stackoverflow.com/legal/cookie-policy">Cookie Policy</a>, <a class="s-link s-link__inherit td-underline fc-white" target="_blank" href="https://stackoverflow.com/legal/privacy-policy">Privacy Policy</a>, and our <a class="s-link s-link__inherit td-underline fc-white" target="_blank" href="https://stackoverflow.com/legal/terms-of-service/public">Terms of Service</a>.
                </p>
            </div>
            <div class="grid--cell">
                <a class="s-btn s-btn__muted s-btn__icon js-notice-close" aria-label="notice-dismiss">
                    <svg aria-hidden="true" class="svg-icon iconClear" width="18" height="18" viewBox="0 0 18 18"><path d="M15 4.41L13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41z"/></svg>
                </a>
            </div>
        </div>
    </div>

    <script>
        StackExchange.ready(function () { StackExchange.topbar.init(); });
        StackExchange.scrollPadding.setPaddingTop(50, 10);     </script>



    <div id="announcement-banner" class="js-announcement-banner bg-blue-500 fc-white ff-sans fs-body2 py2" data-campaign="2019-06-01." data-cookie="notice-ssb" data-expire-date="1592410839336">
        <div class="grid jc-space-between wmx12 mx-auto px16 py8 js-satisfaction-survey">
            <div class="grid--cell mr12">
                How are we doing? Please help us improve Stack Overflow. <a target="_blank"
                   class="s-link js-link js-gps-track fw-bold fc-blue-400 fc-blue-500 bg-white bar-sm py2 px6" href="https://stackoverflow.com/survey/site-satisfaction/redirect" 
                   data-gps-track="">Take our short survey</a>
            </div>
            <a class="grid-cell fc-white js-dismiss js-gps-track" href="#" title="dismiss"
               data-gps-track=""><svg aria-hidden="true" class="svg-icon m0 iconClear" width="18" height="18" viewBox="0 0 18 18"><path d="M15 4.41L13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41z"/></svg></a>
        </div>
    </div>
    <script>
        StackExchange.ready(function () {
            StackExchange.Notice.announcementBannerInit();
        });
    </script>





    <div class="container">






<div id="left-sidebar" data-is-here-when="md lg" class="left-sidebar js-pinned-left-sidebar ps-relative">
    <div class="left-sidebar--sticky-container js-sticky-leftnav">
        <nav role="navigation">
            <ol class="nav-links">
    <li>
        <a
            href="/"
            class="pl8 js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:8})">
Home        </a>
    </li>
                <li>
                    <ol class="nav-links">
                            <li class="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Public</li>
                            <li class=" youarehere">
        <a id="nav-questions"
            href="/questions"
            class="pl8 js-gps-track nav-links--link -link__with-icon"
            
            data-gps-track="top_nav.click({is_current:true, location:2, destination:1})">
<svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM8 15.32a6.4 6.4 0 0 1-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 0 1 2.32 10.24v.01z"/></svg>                <span class="-link--channel-name">Stack Overflow</span>
        </a>
    </li>

    <li>
        <a id="nav-tags"
            href="/tags"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:2})">
Tags        </a>
    </li>
    <li>
        <a id="nav-users"
            href="/users"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:3})">
Users        </a>
    </li>
    <li>
        <a id="nav-jobs"
            href="/jobs?so_medium=StackOverflow&amp;so_source=SiteNav"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:6})">
Jobs        </a>
    </li>
                                                                                            </ol>
                </li>
                    <li>
                        <ol class="nav-links">
                                <li class="grid ai-center jc-space-between ml8 mt24 mb4">
                                    <div class="grid--cell tt-uppercase fs-fine fc-light">Teams</div>
                                    <div class="grid--cell fs-fine fc-light mr4">
                                        <a href="javascript:void(0)" class="s-link s-link__inherit js-gps-track"
                                            role="button"
                                            aria-controls="popover-teams-create-cta"
                                            data-controller="s-popover"
                                            data-action="s-popover#toggle"
                                            data-s-popover-placement="bottom-start"
                                            data-s-popover-toggle-class="is-selected"
                                            data-gps-track="teams.create.left-sidenav.click({ Action: ShowInfo })"
                                            data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav show teams info&quot;,null,null,null]">
                                            What’s this?
                                        </a>

                                    </div>
                                </li>
                                <li class="ps-relative">
                                    <a href="https://stackoverflow.com/teams"
                                        class="pl8 js-gps-track nav-links--link"
                                        title="Stack Overflow for Teams is a private, secure spot for your organization's questions and answers."
                                        data-gps-track="teams.create.left-sidenav.click({ Action: TeamsClick })"
                                        data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav team click&quot;,&quot;stackoverflow.com/teams&quot;,null,null]">
                                        <div class="grid ai-center">
                                            <div class="grid--cell s-avatar va-middle bg-orange-400">
                                                <div class="s-avatar--letter mtn1">
                                                    <svg aria-hidden="true" class="svg-icon iconBriefcaseSm" width="14" height="14" viewBox="0 0 14 14"><path d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3zm5 1V3H5v1h4z"/></svg>
                                                </div>
                                                <svg aria-hidden="true" class="svg-icon native s-avatar--badge iconShieldXSm" width="9" height="10" viewBox="0 0 9 10"><path d="M0 1.84L4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84z" fill="#fff"/><path d="M1 2.5L4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 0 1 .15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38z" fill="#6A7E7C"/></svg>
                                            </div>
                                            <div class="grid--cell pl6">
Free 30 Day Trial                                            </div>
                                        </div>
                                    </a>
                                </li>
                        </ol>
                    </li>
                            </ol>
        </nav>
    </div>


        <div class="s-popover w-auto p16"
             id="popover-teams-create-cta"
             role="menu"
             aria-hidden="true">
            <div class="s-popover--arrow"></div>

            <div class="ps-relative overflow-hidden">
                <p class="mb2"><strong>Teams</strong></p>
                <p class="mb16 fs-caption fc-medium">Q&amp;A for Work</p>
                <p class="mb8 fs-caption fc-medium">
                        
                            Stack Overflow for Teams is a private, secure spot for you and
                            your coworkers to find and share information.
                        
                </p>
                <a href="https://stackoverflow.com/teams"
                   class="js-gps-track ws-nowrap d-block"
                   data-gps-track="teams.create.left-sidenav.click({ Action: CtaClick })"
                   data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav cta&quot;,&quot;stackoverflow.com/teams&quot;,null,null]">
                        Learn more
                </a>
            </div>

            <div class="ps-absolute t8 r8">
                <svg width="53" height="49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49 11l.2 31H18.9L9 49v-7H4V8h31" fill="#CCEAFF" /><path d="M44.5 19v-.3l-.2-.1-18-13-.1-.1H.5v33h4V46l.8-.6 9.9-6.9h29.3V19z" stroke="#1060E1" stroke-miterlimit="10" /><path d="M31 2l6-1.5 7 2V38H14.9L5 45v-7H1V6h25l5-4z" fill="#fff" /><path d="M7 16.5h13m-13 6h14m-14 6h18" stroke="#1060E1" stroke-miterlimit="10" /><path d="M39 30a14 14 0 1 0 0-28 14 14 0 0 0 0 28z" fill="#FFB935" /><path d="M50.5 14a13.5 13.5 0 1 1-27 0 13.5 13.5 0 0 1 27 0z" stroke="#F48024" stroke-miterlimit="10" /><path d="M32.5 21.5v-8h9v8h-9zm2-9.5V9.3A2.5 2.5 0 0 1 37 6.8a2.5 2.5 0 0 1 2.5 2.5V12h-5zm2 3v2m1-2v2" stroke="#fff" stroke-miterlimit="10" /></svg>
            </div>
        </div>

        <a href="https://stackoverflow.com/survey/site-satisfaction/redirect/?source=sidebar" data-ga="[null,&quot;Announcement Banner&quot;,&quot;https://stackoverflow.com/survey/site-satisfaction/redirect&quot;,null,{&quot;dimension4&quot;:null}]" title="Take our short survey" target="_blank"
           class="js-announcement-banner js-gps-track d-none js-link js-announcement-sidebar grid ai-center ps-fixed c-pointer ws2 b32 l8 s-card bar-md bs-sm h:bs-lg sm:d-none fc-medium h:fc-black-900 baw0 bt btw3 bc-orange-2 px2 pl4"
           data-gps-track="announcement_banner.click({campaign: '2019-06-01.', location: 2, action: 2})">
            <div class="grid-cell ml4 mr8">
                <img src="https://cdn.sstatic.net/Img/survey-cta.svg?v=171e02557b0d" width="49" />
            </div>
            <div class="grid-cell fs-body2">
                <div class="fw-bold mb2">How are we doing?</div>
                <div class="s-link">Take our short survey</div>
            </div>
            <div class="ps-absolute tn4 mt4 r2 z-banner js-dismiss fc-black-400">
                <span title="dismiss" class="js-gps-track"
                      data-gps-track="announcement_banner.click({campaign: '2019-06-01.', location: 2, action: 1})">
                    <svg aria-hidden="true" class="svg-icon iconClearSm" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z"/></svg>
                </span>
            </div>
        </a>
</div>


        <div id="content" class="snippet-hidden">


            


<div itemprop="mainEntity" itemscope itemtype="http://schema.org/Question">
    <link itemprop="image" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">

    <div class="inner-content clearfix">

        

                    <div id="question-header" class="grid sm:fd-column">
                        <h1 itemprop="name" class="grid--cell fs-headline1 fl1 ow-break-word mb8"><a href="/questions/33879896/how-to-execute-start-script-with-nodemon" class="question-hyperlink">How to execute start script with Nodemon?</a></h1>

                <div class="ml12 aside-cta grid--cell print:d-none sm:ml0 sm:mb12 sm:order-first sm:as-end">

    <a href="/questions/ask" class="ws-nowrap s-btn s-btn__primary" >
        Ask Question
    </a>

                </div>
            </div>
            <div class="grid fw-wrap pb8 mb16 bb bc-black-2">
                    <div class="grid--cell ws-nowrap mr16 mb8" title="2015-11-23 20:17:46Z">
                        <span class="fc-light mr2">Asked</span>
                        <time itemprop="dateCreated" datetime="2015-11-23T20:17:46">4 years, 3 months ago</time>
                    </div>
                        <div class="grid--cell ws-nowrap mr16 mb8">
                            <span class="fc-light mr2">Active</span>
                            <a href="?lastactivity" class="s-link s-link__inherit" title="2020-03-11 16:12:58Z">today</a>
                        </div>
                    <div class="grid--cell ws-nowrap mb8" title="Viewed 87,610 times">
                        <span class="fc-light mr2">Viewed</span>
                        88k times
                    </div>
            </div>
                    <div id="mainbar" role="main" aria-label="question and answers">

                

<div class="question" data-questionid="33879896"  id="question">

    <style>.everyoneloves__top-leaderboard:empty,.everyoneloves__mid-leaderboard:empty,.everyoneloves__bot-mid-leaderboard:empty{
            margin-bottom:0;
}
</style>
<div id="dfp-tlb" class="everyonelovesstackoverflow everyoneloves__top-leaderboard"></div>
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="33879896">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This question shows research effort; it is useful and clear" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="71">71</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This question does not show any research effort; it is unclear or not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

        <button class="js-favorite-btn s-btn s-btn__unset c-pointer py4 js-gps-track" aria-pressed="false" aria-label="favorite (15)" data-selected-classes="fc-yellow-600"
                data-gps-track="post.click({ item: 1, priv: 0, post_type: 1 })">
            <svg aria-hidden="true" class="svg-icon iconStar" width="18" height="18" viewBox="0 0 18 18"><path d="M9 12.65l-5.29 3.63 1.82-6.15L.44 6.22l6.42-.17L9 0l2.14 6.05 6.42.17-5.1 3.9 1.83 6.16L9 12.65z"/></svg>
            <div class="js-favorite-count mt4" data-value="15">15</div>
        </button>
    

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/33879896/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="postcell post-layout--right">
    
    <div class="post-text" itemprop="text">

<p>How can I execute the start script from a <em>package.json</em> file with nodemon?</p>
    </div>

        <div class="post-taglist grid gs4 gsy fd-column">
            <div class="grid ps-relative d-block">
                <a href="/questions/tagged/node.js" class="post-tag" title="show questions tagged &#39;node.js&#39;" rel="tag">node.js</a> <a href="/questions/tagged/nodemon" class="post-tag" title="show questions tagged &#39;nodemon&#39;" rel="tag">nodemon</a> 
            </div>
        </div>

    <div class="mb0 ">
        <div class="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4">
            <div class="grid--cell mr16" style="flex: 1 1 100px;">
                <div class="post-menu"><a href="/q/33879896"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this question"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 1 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this question"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="question"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="1"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/33879896/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 1 })" title="">improve this question</a></div>
            </div>

            <div class="post-signature owner grid--cell">
<div class="user-info ">
    <div class="user-action-time">
        asked <span title="2015-11-23 20:17:46Z" class="relativetime">Nov 23 '15 at 20:17</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/4463660/citronen"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/a7834b35fe2ac4b9d405e0b9f1b1bf10?s=32&amp;d=identicon&amp;r=PG&amp;f=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/4463660/citronen">Citronen</a><span class="d-none" itemprop="name">Citronen</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">2,135</span><span title="3 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">3</span></span><span class="v-visible-sr">3 gold badges</span><span title="11 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">11</span></span><span class="v-visible-sr">11 silver badges</span><span title="18 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">18</span></span><span class="v-visible-sr">18 bronze badges</span>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-33879896" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="33879896" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-55524090" class="comment js-comment " data-comment-id="55524090">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">You sure you can execute a start script from package.json? Because from what I know package.json is to list all your dependencies and nodemon is to keep your process running. I am not quite sure what you are hinting at here?</span>
                
                    &ndash;&nbsp;<a href="/users/3320962/saras-arya"
                       title="2,026 reputation"
                       class="comment-user">Saras Arya</a>
                <span class="comment-date" dir="ltr"><span title="2015-11-23 20:23:03Z" class="relativetime-clean">Nov 23 '15 at 20:23</span></span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-33879896" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>            </div>
</div>


<div id="dfp-isb" class="everyonelovesstackoverflow everyoneloves__inline-sidebar"></div>
                <div id="answers">

                    <a name="tab-top"></a>
                    <div id="answers-header">
                        <div class="subheader answers-subheader">
                            <h2 data-answercount="11">
                                    11 Answers
                                <span style="display:none;" itemprop="answerCount">11</span>
                            </h2>
                            <div>
                                
<div id="tabs">
        <a href="/questions/33879896/how-to-execute-start-script-with-nodemon?answertab=active#tab-top" data-nav-xhref="" title="Answers with the latest activity first" data-value="active" data-shortcut="A">
            active</a>
        <a href="/questions/33879896/how-to-execute-start-script-with-nodemon?answertab=oldest#tab-top" data-nav-xhref="" title="Answers in the order they were provided" data-value="oldest" data-shortcut="O">
            oldest</a>
        <a class="youarehere is-selected " href="/questions/33879896/how-to-execute-start-script-with-nodemon?answertab=votes#tab-top" data-nav-xhref="" title="Answers with the highest score first" data-value="votes" data-shortcut="V">
            votes</a>
    </div>

                            </div>
                        </div>
                    </div>




  
<a name="46299435"></a>
<div id="answer-46299435" class="answer" data-answerid="46299435"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="46299435">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="115">115</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/46299435/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>This will be simple command for this </p>

<pre><code>nodemon --exec npm start
</code></pre>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2017-09-19T11:37:02"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/46299435"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/46299435/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2017-09-19 11:37:02Z" class="relativetime">Sep 19 '17 at 11:37</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/7129694/ashutosh-jha"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/beMK2.jpg?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/7129694/ashutosh-jha">Ashutosh Jha</a><span class="d-none" itemprop="name">Ashutosh Jha</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">8,374</span><span title="6 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">6</span></span><span class="v-visible-sr">6 gold badges</span><span title="32 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">32</span></span><span class="v-visible-sr">32 silver badges</span><span title="55 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">55</span></span><span class="v-visible-sr">55 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-46299435" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="46299435" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-92221151" class="comment js-comment " data-comment-id="92221151">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">What if I need to run only tests without running the app? You solution runs both.</span>
                
                    &ndash;&nbsp;<a href="/users/1844247/sergey"
                       title="2,821 reputation"
                       class="comment-user">Sergey</a>
                <span class="comment-date" dir="ltr"><span title="2018-10-04 10:32:08Z" class="relativetime-clean">Oct 4 '18 at 10:32</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-98402071" class="comment js-comment " data-comment-id="98402071">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
                    <span title="number of &#39;useful comment&#39; votes received"
                            class="cool">1</span>
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">this does run <code>npm start</code> but does not start the node server for me..  how would it know where server.js is ?</span>
                
                    &ndash;&nbsp;<a href="/users/349100/sonic-soul"
                       title="19,285 reputation"
                       class="comment-user">Sonic Soul</a>
                <span class="comment-date" dir="ltr"><span title="2019-04-26 15:51:02Z" class="relativetime-clean">Apr 26 '19 at 15:51</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-105931582" class="comment js-comment " data-comment-id="105931582">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">someone should accept this answer</span>
                
                    &ndash;&nbsp;<a href="/users/253721/dobler"
                       title="791 reputation"
                       class="comment-user">Dobler</a>
                <span class="comment-date" dir="ltr"><span title="2020-01-24 18:54:58Z" class="relativetime-clean">Jan 24 at 18:54</span></span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-46299435" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>
<div id="dfp-mlb" class="everyonelovesstackoverflow everyoneloves__mid-leaderboard"></div>
  
<a name="33883224"></a>
<div id="answer-33883224" class="answer" data-answerid="33883224"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="33883224">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="31">31</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/33883224/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>In package json:</p>

<pre><code>{
  "name": "abc",
  "version": "0.0.1",
  "description": "my server",
  "scripts": {
    "start": "nodemon my_file.js"
  },
  "devDependencies": {
    "nodemon": "~1.3.8",
  },
  "dependencies": {

  }
}
</code></pre>

<p>Then from the terminal you can use <code>npm start</code></p>

<p>Nodemon installation: <a href="https://www.npmjs.com/package/nodemon" rel="noreferrer">https://www.npmjs.com/package/nodemon</a></p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2015-11-24T00:14:12"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/33883224"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/33883224/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2015-11-24 00:14:12Z" class="relativetime">Nov 24 '15 at 0:14</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/2620998/murat-ozgul"><div class="gravatar-wrapper-32"><img src="https://graph.facebook.com/508112736/picture?type=large" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/2620998/murat-ozgul">Murat Ozgul</a><span class="d-none" itemprop="name">Murat Ozgul</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">8,177</span><span title="5 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">5</span></span><span class="v-visible-sr">5 gold badges</span><span title="22 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">22</span></span><span class="v-visible-sr">22 silver badges</span><span title="28 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">28</span></span><span class="v-visible-sr">28 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-33883224" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="33883224" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="1"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-55556388" class="comment js-comment " data-comment-id="55556388">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">Sorry, looking for a way to execute the start script <i>with</i> nodemon, not execute nodemon in the start script. Sorry if that wasn&#39;t clear.</span>
                
                    &ndash;&nbsp;<a href="/users/4463660/citronen"
                       title="2,135 reputation"
                       class="comment-user owner">Citronen</a>
                <span class="comment-date" dir="ltr"><span title="2015-11-24 15:01:17Z" class="relativetime-clean">Nov 24 '15 at 15:01</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-69876770" class="comment js-comment " data-comment-id="69876770">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
                    <span title="number of &#39;useful comment&#39; votes received"
                            class="warm">6</span>
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">Won&#39;t <code>npm start</code> fail in production for lack of nodemon?</span>
                
                    &ndash;&nbsp;<a href="/users/11236/ripper234"
                       title="185,585 reputation"
                       class="comment-user">ripper234</a>
                <span class="comment-date" dir="ltr"><span title="2016-12-26 22:46:29Z" class="relativetime-clean">Dec 26 '16 at 22:46</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-85979455" class="comment js-comment " data-comment-id="85979455">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
                    <span title="number of &#39;useful comment&#39; votes received"
                            class="cool">2</span>
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy"><code>npm run start</code> not <code>npm start</code></span>
                
                    &ndash;&nbsp;<a href="/users/6928576/m-dhaouadi"
                       title="440 reputation"
                       class="comment-user">M. Dhaouadi</a>
                <span class="comment-date" dir="ltr"><span title="2018-03-26 09:44:23Z" class="relativetime-clean">Mar 26 '18 at 9:44</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-87053365" class="comment js-comment " data-comment-id="87053365">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
                    <span title="number of &#39;useful comment&#39; votes received"
                            class="cool">1</span>
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">I&#39;m a beginner with npm. I don&#39;t understand why do we need to specify the start script while we can use nodemon out of the box? I just install nodemon with npm and use it directly without specifying any script and it works perfectly.</span>
                
                    &ndash;&nbsp;<a href="/users/7149128/hokhy-tann"
                       title="1,208 reputation"
                       class="comment-user">Hokhy Tann</a>
                <span class="comment-date" dir="ltr"><span title="2018-04-25 09:29:33Z" class="relativetime-clean">Apr 25 '18 at 9:29</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-100817097" class="comment js-comment " data-comment-id="100817097">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">@M.Dhaouadi <code>npm start</code> is an alias for <code>npm run start</code></span>
                
                    &ndash;&nbsp;<a href="/users/5674976/george"
                       title="1,777 reputation"
                       class="comment-user">George</a>
                <span class="comment-date" dir="ltr"><span title="2019-07-22 17:25:48Z" class="relativetime-clean">Jul 22 '19 at 17:25</span></span>
                        <span title="this comment was edited 1 time">
                            <svg aria-hidden="true" class="svg-icon va-text-bottom o50 iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>
                        </span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-33883224" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link dno" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button"></a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link " title="expand to show all comments on this post" href=# onclick="" role="button">show <b>1</b> more comment</a>
        </div>         
    </div>    </div>
</div>

  
<a name="51509974"></a>
<div id="answer-51509974" class="answer" data-answerid="51509974"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="51509974">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="13">13</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/51509974/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>I use nodemon: "1.88.3" in my nodejs project.
To install nodemon, see in this link <a href="https://www.npmjs.com/package/nodemon" rel="noreferrer">https://www.npmjs.com/package/nodemon</a></p>

<p>Check your package.json, see if "scripts" has changed like this:</p>

<pre><code>  "scripts": {
    "dev": "nodemon server.js"
  },
</code></pre>

<p><code>server.js</code> is my file name, you can use another name for this file like <code>app.js</code>.
After that run this on your terminal: <code>npm run dev</code></p>

<p>I hope this can help. Happy coding!</p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2018-07-25T02:25:00"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/51509974"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/51509974/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2018-07-25 02:25:00Z" class="relativetime">Jul 25 '18 at 2:25</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/1815856/sukma-saputra"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/Ac11v.jpg?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/1815856/sukma-saputra">Sukma Saputra</a><span class="d-none" itemprop="name">Sukma Saputra</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">1,046</span><span title="11 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">11</span></span><span class="v-visible-sr">11 silver badges</span><span title="24 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">24</span></span><span class="v-visible-sr">24 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-51509974" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="51509974" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-51509974" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="38818068"></a>
<div id="answer-38818068" class="answer" data-answerid="38818068"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="38818068">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="12">12</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/38818068/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>I have a typescript file called "server.ts", The following npm scripts configures nodemon and npm to start my app and monitor for any changes on typescript files:</p>

<pre><code>"start": "nodemon -e ts  --exec \"npm run myapp\"", 
"myapp": "tsc -p . &amp;&amp; node server.js",
</code></pre>

<p>I already have nodemon on dependencies, when I run <code>npm start</code> it will ask nodemon to monitor ts files using the <code>-e</code> switch and then it calls myapp npm script which is a simple combination of transpiling the typescript files and then starting the resulting server.js. When I change the typescript file, because of <code>-e</code> switch the same cycle happens and new js files will be generated and executed.</p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2016-08-07T20:06:43"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/38818068"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/38818068/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info ">
    <div class="user-action-time">
        answered <span title="2016-08-07 20:06:43Z" class="relativetime">Aug 7 '16 at 20:06</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/872438/mehrantm"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/25a07ab878a3f2f8cf2b989edc0a94b4?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/872438/mehrantm">MehranTM</a><span class="d-none" itemprop="name">MehranTM</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">390</span><span title="4 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">4</span></span><span class="v-visible-sr">4 silver badges</span><span title="9 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">9</span></span><span class="v-visible-sr">9 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-38818068" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="38818068" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-38818068" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="33879982"></a>
<div id="answer-33879982" class="answer" data-answerid="33879982"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="33879982">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="6">6</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/33879982/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>Use <code>-exec</code> :</p>

<pre><code>"your-script-name": "nodemon [options] --exec 'npm start -s'"
</code></pre>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2015-11-23T20:23:32"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/33879982"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/33879982/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2015-11-23 20:23:32Z" class="relativetime">Nov 23 '15 at 20:23</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/191367/keatspeeks"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/u8CLU.png?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/191367/keatspeeks">KeatsPeeks</a><span class="d-none" itemprop="name">KeatsPeeks</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score 17,434" dir="ltr">17.4k</span><span title="5 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">5</span></span><span class="v-visible-sr">5 gold badges</span><span title="46 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">46</span></span><span class="v-visible-sr">46 silver badges</span><span title="79 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">79</span></span><span class="v-visible-sr">79 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-33879982" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="33879982" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-55524137" class="comment js-comment " data-comment-id="55524137">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">Is there any way other than exec to do this?</span>
                
                    &ndash;&nbsp;<a href="/users/4463660/citronen"
                       title="2,135 reputation"
                       class="comment-user owner">Citronen</a>
                <span class="comment-date" dir="ltr"><span title="2015-11-23 20:24:03Z" class="relativetime-clean">Nov 23 '15 at 20:24</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-55525592" class="comment js-comment " data-comment-id="55525592">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">Just <code>nodemon [options] --exec &#39;npm start -s&#39;</code> if you want to do it from the command line.</span>
                
                    &ndash;&nbsp;<a href="/users/5209829/nathanhleung"
                       title="483 reputation"
                       class="comment-user">nathanhleung</a>
                <span class="comment-date" dir="ltr"><span title="2015-11-23 21:03:23Z" class="relativetime-clean">Nov 23 '15 at 21:03</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-101300343" class="comment js-comment " data-comment-id="101300343">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">@ArnoldRoa Install it.</span>
                
                    &ndash;&nbsp;<a href="/users/4510033/%d0%9a%d0%be%d0%bd%d1%81%d1%82%d0%b0%d0%bd%d1%82%d0%b8%d0%bd-%d0%92%d0%b0%d0%bd"
                       title="5,459 reputation"
                       class="comment-user">Константин Ван</a>
                <span class="comment-date" dir="ltr"><span title="2019-08-08 10:03:28Z" class="relativetime-clean">Aug 8 '19 at 10:03</span></span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-33879982" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="49234866"></a>
<div id="answer-49234866" class="answer" data-answerid="49234866"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="49234866">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="4">4</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/49234866/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>first change your package.json file.</p>

<pre><code>"scripts":
 { "start": "node ./bin/www", 
"start-dev": "nodemon ./app.js"
 },
</code></pre>

<p>after that execute command <strong>npm run start-dev</strong></p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2018-03-12T12:07:01"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/49234866"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/49234866/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info ">
    <div class="user-action-time">
        answered <span title="2018-03-12 12:07:01Z" class="relativetime">Mar 12 '18 at 12:07</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/8376283/rkeshri"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/bGl6b.jpg?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/8376283/rkeshri">rkeshri</a><span class="d-none" itemprop="name">rkeshri</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">67</span><span title="8 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">8</span></span><span class="v-visible-sr">8 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-49234866" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="49234866" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-85920003" class="comment js-comment " data-comment-id="85920003">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">But when you run off of <code>app.js</code> you are bypassing everything that <code>.&#47;bin&#47;www</code> does...</span>
                
                    &ndash;&nbsp;<a href="/users/172350/jake-wilson"
                       title="70,590 reputation"
                       class="comment-user">Jake Wilson</a>
                <span class="comment-date" dir="ltr"><span title="2018-03-23 21:30:13Z" class="relativetime-clean">Mar 23 '18 at 21:30</span></span>
                                                            </div>
        </div>
    </li>
    <li id="comment-103480073" class="comment js-comment " data-comment-id="103480073">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">this open new tab each time</span>
                
                    &ndash;&nbsp;<a href="/users/7890537/qui-gon-jinn"
                       title="373 reputation"
                       class="comment-user">Qui-Gon Jinn</a>
                <span class="comment-date" dir="ltr"><span title="2019-10-27 19:55:42Z" class="relativetime-clean">Oct 27 '19 at 19:55</span></span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-49234866" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="55475822"></a>
<div id="answer-55475822" class="answer" data-answerid="55475822"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="55475822">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="4">4</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/55475822/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>In package.json file. change file like this</p>

<pre><code>"scripts":{ 
   "start": "node ./bin/www", 
   "start-dev": "nodemon ./app.js"
 },
</code></pre>

<p>and then execute <strong>npm run start-dev</strong></p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2019-04-02T13:18:32"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/55475822"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/55475822/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2019-04-02 13:18:32Z" class="relativetime">Apr 2 '19 at 13:18</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/8333984/sohail-ahmad"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/trpwJ.jpg?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/8333984/sohail-ahmad">Sohail Ahmad</a><span class="d-none" itemprop="name">Sohail Ahmad</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">581</span><span title="6 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">6</span></span><span class="v-visible-sr">6 silver badges</span><span title="18 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">18</span></span><span class="v-visible-sr">18 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-55475822" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="55475822" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-55475822" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="48939210"></a>
<div id="answer-48939210" class="answer" data-answerid="48939210"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="48939210">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="2">2</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/48939210/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>Nodemon emits events upon every change in state; start, restart crash etc. You can add a nodemon configuration file (nodemon.json) like so:</p>

<pre><code>{
   "events": {
       "start": "npm run *your_file*"
   }
}
</code></pre>

<p>Read more here: <a href="https://medium.com/netscape/nodemon-events-run-tasks-at-server-start-restart-crash-exit-93a34c54dfd8" rel="nofollow noreferrer">https://medium.com/netscape/nodemon-events-run-tasks-at-server-start-restart-crash-exit-93a34c54dfd8</a></p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2018-02-23T00:05:02"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/48939210"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/48939210/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info ">
    <div class="user-action-time">
        answered <span title="2018-02-23 00:05:02Z" class="relativetime">Feb 23 '18 at 0:05</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/7805906/king-james-enejo"><div class="gravatar-wrapper-32"><img src="https://graph.facebook.com/894849150658321/picture?type=large" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/7805906/king-james-enejo">King James Enejo</a><span class="d-none" itemprop="name">King James Enejo</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">389</span><span title="3 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">3</span></span><span class="v-visible-sr">3 silver badges</span><span title="12 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">12</span></span><span class="v-visible-sr">12 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-48939210" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="48939210" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-48939210" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="59839716"></a>
<div id="answer-59839716" class="answer" data-answerid="59839716"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="59839716">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="0">0</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/59839716/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>in package json:</p>

<pre><code>"scripts": {
  "start": "node index",
  "dev": "nodemon index",
},

"devDependencies": {
  "nodemon": "^2.0.2"
}
</code></pre>

<p>and in the terminal for developing :</p>

<p><code>npm run dev</code></p>

<p>and for start the server regiuler :</p>

<p><code>npm start</code></p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2020-01-21T11:02:59"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/59839716"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/59839716/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info ">
    <div class="user-action-time">
        answered <span title="2020-01-21 11:02:59Z" class="relativetime">Jan 21 at 11:02</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/11654451/amixov"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/4efddcd986eb3be53eb1482b436ca4b2?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/11654451/amixov">amixOV</a><span class="d-none" itemprop="name">amixOV</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">1</span><span title="2 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">2</span></span><span class="v-visible-sr">2 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-59839716" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="59839716" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-59839716" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="60640286"></a>
<div id="answer-60640286" class="answer" data-answerid="60640286"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="60640286">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="0">0</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/60640286/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>You can also install nodemon globally for frequent use: </p>

<p><code>npm i nodemon -g</code> or <code>sudo npm i nodemon -g</code></p>

<p>then edit your package.json:</p>

<pre><code>  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
</code></pre>

<p>Generally, 'dev' specifies developmental use (<strong>npm run dev</strong>).</p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2020-03-11T16:12:58"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/60640286"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a></div>
        </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info ">
    <div class="user-action-time">
        answered <span title="2020-03-11 16:12:58Z" class="relativetime">7 mins ago</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/10589308/dhahn"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/W6QOX.jpg?s=32&amp;g=1" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/10589308/dhahn">dhahn</a><span class="d-none" itemprop="name">dhahn</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">99</span><span title="1 silver badge" aria-hidden="true"><span class="badge2"></span><span class="badgecount">1</span></span><span class="v-visible-sr">1 silver badge</span><span title="5 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">5</span></span><span class="v-visible-sr">5 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-60640286" class="comments js-comments-container bt bc-black-2 mt12  dno" data-post-id="60640286" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">

            </ul>
	    </div>

        <div id="comments-link-60640286" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

  
<a name="52910793"></a>
<div id="answer-52910793" class="answer" data-answerid="52910793"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
    <div class="post-layout">
        <div class="votecell post-layout--left">
            

<div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="52910793">
        <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is useful" aria-pressed="false" aria-label="up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
        <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="-1">-1</div>
        <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" title="This answer is not useful" aria-pressed="false" aria-label="down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    
            <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" title="loading when this answer was accepted..." tabindex="0" role="note" aria-label="accepted">
                <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
            </div>

    
        <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py8 mx-auto" href="/posts/52910793/timeline" data-shortcut="T" title="Timeline"><svg aria-hidden="true" class="svg-icon mln2 mr0 iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

        </div>

        


<div class="answercell post-layout--right">
    
    <div class="post-text" itemprop="text">
        <p>Am I the only person who hates using global installs?  Add nodemon as a dependency, then...</p>

<p>package.json</p>

<pre class="lang-json prettyprint-override"><code>"scripts": {
    "start": "node ./bin/www",
    "start-dev": "./node_modules/nodemon/bin/nodemon.js ./bin/www"
  },
</code></pre>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2018-10-20T23:02:33"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            <div class="post-menu"><a href="/a/52910793"
       rel="nofollow"
       itemprop="url"
       class="js-share-link js-gps-track"
       title="short permalink to this answer"
       data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
       data-controller="se-share-sheet"
       data-se-share-sheet-title="Share a link to this answer"
       data-se-share-sheet-subtitle=""
       data-se-share-sheet-post-type="answer"
       data-se-share-sheet-social="facebook twitter devto"
       data-se-share-sheet-location="2"
       data-s-popover-placement="bottom-start">share</a><span class="lsep">|</span><a href="/posts/52910793/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a></div>
        </div>
    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        <a href="/posts/52910793/revisions" title="show all edits to this post"
                         class="js-gps-track"
                         data-gps-track="post.click({ item: 4, priv: 0, post_type: 2 })">edited <span title="2019-02-06 09:57:18Z" class="relativetime">Feb 6 '19 at 9:57</span></a>
    </div>
    <div class="user-gravatar32">
        <a href="/users/8866606/stefan-becker"><div class="gravatar-wrapper-32"><img src="https://lh6.googleusercontent.com/-Ao_wuU1YCUE/AAAAAAAAAAI/AAAAAAAAAtc/Nc6ExTtKE_A/photo.jpg?sz=32" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details">
        <a href="/users/8866606/stefan-becker">Stefan Becker</a>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">4,830</span><span title="9 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">9</span></span><span class="v-visible-sr">9 gold badges</span><span title="12 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">12</span></span><span class="v-visible-sr">12 silver badges</span><span title="26 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">26</span></span><span class="v-visible-sr">26 bronze badges</span>
        </div>
    </div>
</div>    </div>



    <div class="post-signature grid--cell fl0">
<div class="user-info user-hover">
    <div class="user-action-time">
        answered <span title="2018-10-20 23:02:33Z" class="relativetime">Oct 20 '18 at 23:02</span>
    </div>
    <div class="user-gravatar32">
        <a href="/users/2487730/zipzit"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/738346725144dd27b32670cc7316ee80?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
    </div>
    <div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="/users/2487730/zipzit">zipzit</a><span class="d-none" itemprop="name">zipzit</span>
        <div class="-flair">
            <span class="reputation-score" title="reputation score " dir="ltr">2,387</span><span title="3 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">3</span></span><span class="v-visible-sr">3 gold badges</span><span title="17 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">17</span></span><span class="v-visible-sr">17 silver badges</span><span title="39 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">39</span></span><span class="v-visible-sr">39 bronze badges</span>
        </div>
    </div>
</div>

    </div>
    </div>
    
</div>



    <div class="post-layout--right">
        <div id="comments-52910793" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="52910793" data-min-length="15">
            <ul class="comments-list js-comments-list"
                    data-remaining-comments-count="0"
                    data-canpost="false"
                    data-cansee="true"
                    data-comments-unavailable="false"
                    data-addlink-disabled="true">


    <li id="comment-97637894" class="comment js-comment " data-comment-id="97637894">
        <div class="js-comment-actions comment-actions">
            <div class="comment-score js-comment-edit-hide">
            </div>
                    </div>
        <div class="comment-text js-comment-text-and-form">
            <div class="comment-body js-comment-edit-hide">
                
                <span class="comment-copy">You can still make it &quot;start-dev&quot;: &quot;nodemon ./bin/www&quot; if you install it under devDependencies</span>
                
                    &ndash;&nbsp;<a href="/users/2708763/wolfpwner"
                       title="669 reputation"
                       class="comment-user">WoLfPwNeR</a>
                <span class="comment-date" dir="ltr"><span title="2019-04-01 20:07:05Z" class="relativetime-clean">Apr 1 '19 at 20:07</span></span>
                                                            </div>
        </div>
    </li>
            </ul>
	    </div>

        <div id="comments-link-52910793" data-rep=50 data-anon=true>

                    <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”."  href="#" role="button">add a comment</a>
                <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
            <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
        </div>         
    </div>    </div>
</div>

                        <a name='new-answer'></a>
                            <form id="post-form" action="/questions/33879896/answer/submit" method="post" class="js-add-answer-component post-form">
                                <input type="hidden" id="post-id" value="33879896" />
                                <input type="hidden" id="qualityBanWarningShown" name="qualityBanWarningShown" value="false" />
                                <input type="hidden" name="referrer" value="" />
                                <h2 class="space">
                                    Your Answer
                                </h2>



    <script>
        StackExchange.ifUsing("editor", function () {
            StackExchange.using("externalEditor", function () {
                StackExchange.using("snippets", function () {
                    StackExchange.snippets.init();
                });
            });
        }, "code-snippets");
    </script>


<script>
    StackExchange.ready(function() {
        var channelOptions = {
            tags: "".split(" "),
            id: "1"
        };
        initTagRenderer("".split(" "), "".split(" "), channelOptions);
       
        StackExchange.using("externalEditor", function() {
            // Have to fire editor after snippets, if snippets enabled
            if (StackExchange.settings.snippets.snippetsEnabled) {
                StackExchange.using("snippets", function() {
                    createEditor();
                });
            }
            else {
                createEditor();
            }
        });

        function createEditor() {
            StackExchange.prepareEditor({
                heartbeatType: 'answer',
                autoActivateHeartbeat: false,
                convertImagesToLinks: true,
                noModals: true,
                showLowRepImageUploadWarning: true,
                reputationToPostImages: 10,
                bindNavPrevention: true,
                postfix: "",
                imageUploader: {
                brandingHtml: "Powered by \u003ca class=\"icon-imgur-white\" href=\"https://imgur.com/\"\u003e\u003c/a\u003e",
                    contentPolicyHtml: "User contributions licensed under \u003ca href=\"https://creativecommons.org/licenses/by-sa/4.0/\"\u003ecc by-sa 4.0 with attribution required\u003c/a\u003e \u003ca href=\"https://stackoverflow.com/legal/content-policy\"\u003e(content policy)\u003c/a\u003e",
                    allowUrls: true
                },
                onDemand: true,
                discardSelector: ".discard-answer"
                ,immediatelyShowMarkdownHelp:true
            });
            

        }
    });
</script>
<div id="post-editor" class="post-editor js-post-editor">

    <div class="ps-relative">
        
        <div class="wmd-container mb8">
            <div id="wmd-button-bar" class="wmd-button-bar btr-sm"></div>
            <div class="js-stacks-validation">
                <div class="ps-relative">
                    <textarea id="wmd-input"
                              name="post-text"
                              class="wmd-input s-input bar0 js-post-body-field"
                              data-post-type-id="2"
                              cols="92" rows="15"
                              tabindex="101"
                              data-min-length=""></textarea>
                </div>
                <div class="s-input-message mt4 d-none js-stacks-validation-message"></div>
            </div>
        </div>
    </div>

    <aside class="grid ai-start jc-space-between js-answer-help s-notice s-notice__warning pb0 pr4 pt4 mb8 d-none" role="status" aria-hidden="true">
    <div class="grid--cell pt8">
        <p>Thanks for contributing an answer to Stack Overflow!</p><ul><li>Please be sure to <em>answer the question</em>. Provide details and share your research!</li></ul><p>But <em>avoid</em> …</p><ul><li>Asking for help, clarification, or responding to other answers.</li><li>Making statements based on opinion; back them up with references or personal experience.</li></ul><p>To learn more, see our <a href="/help/how-to-answer">tips on writing great answers</a>.</p>
    </div>
    <button class="grid--cell js-answer-help-close-btn s-btn s-btn__muted fc-dark">
        <svg aria-hidden="true" class="svg-icon iconClear" width="18" height="18" viewBox="0 0 18 18"><path d="M15 4.41L13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41z"/></svg>
    </button>
</aside>


    <div id="draft-saved" class="fc-success float-left h24" style="display:none;">Draft saved</div>
    <div id="draft-discarded" class="fc-error float-left h24" style="display:none;">Draft discarded</div>



        <div id="wmd-preview" class="wmd-preview" ></div>
        <div></div>
            <div class="edit-block">
            <input id="fkey" name="fkey" type="hidden" value="9dcd9a24f8faa1e9833318f41ca8bff5a0cc7fa7a257ff63d0fb22b91bd317ad">
            <input id="author" name="author" type="text">
        </div>

</div>

                                <div class="ps-relative">
                                    
                                                <div class="form-item dno new-post-login p0 my16">
                <div class="grid gs16 md:fd-column new-login-form">
                    <div class="grid fd-column w50 md:w-auto gsy gs8 jc-space-between new-login-left">
                        <h3 class="grid--cell fs-title">Sign up or <a id="login-link" href="/users/login?ssrc=question_page&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f33879896%2fhow-to-execute-start-script-with-nodemon%23new-answer">log in</a></h3>
                        <script>
                            StackExchange.ready(function () {
                                StackExchange.helpers.onClickDraftSave('#login-link');
                            });
                        </script>
                        <div class="grid--cell s-btn s-btn__muted s-btn__outlined s-btn__icon google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                            <svg aria-hidden="true" class="svg-icon native iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"/><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"/><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"/><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" fill="#EA4335"/></svg> Sign up using Google
                        </div>
                        <div class="grid--cell s-btn s-btn__muted s-btn__icon facebook-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Facebook&quot;,&quot;New Post&quot;,null,null]">
                            <svg aria-hidden="true" class="svg-icon iconFacebook" width="18" height="18" viewBox="0 0 18 18"><path d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z" fill="#4167B2"/></svg> Sign up using Facebook
                        </div>
                        <div class="grid--cell s-btn s-btn__muted s-btn__outlined s-btn__icon stackexchange-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Navigation&quot;,&quot;New Post&quot;,null,null]">
                            <svg aria-hidden="true" class="svg-icon native iconLogoGlyphXSm" width="18" height="18" viewBox="0 0 18 18"><path d="M14 16v-5h2v7H2v-7h2v5h10z" fill="#BCBBBB"/><path d="M12.09.72l-1.21.9 4.5 6.07 1.22-.9L12.09.71zM5 15h8v-2H5v2zm9.15-5.87L8.35 4.3l.96-1.16 5.8 4.83-.96 1.16zm-7.7-1.47l6.85 3.19.63-1.37-6.85-3.2-.63 1.38zm6.53 5L5.4 11.39l.38-1.67 7.42 1.48-.22 1.46z" fill="#F48024"/></svg> Sign up using Email and Password
                        </div>
                    </div>
                    <input type="hidden" name="use-facebook" class="use-facebook" value="false" />
                    <input type="hidden" name="use-google" class="use-google" value="false" />
                    <button type="button" class="d-none js-submit-openid">Submit</button>
                    <div class="grid gsy gs8 fd-column w50 md:w-auto new-login-right form-item p0">
                                <h3 class="grid--cell fs-title">Post as a guest</h3>
            <div class="grid--cell">
                <div class="grid gs4 gsy fd-column">
                    <label class="s-label" for="display-name">Name</label>
                    <div class="grid ps-relative">
                        <input class="s-input" id="display-name" name="display-name" maxlength="30" type="text" value="" tabindex="105" placeholder="" />
                    </div>
                </div>
            </div>
            <div class="grid--cell">
                <div class="grid gs4 gsy fd-column">
                    <div class="grid--cell">
                        <div class="grid gs2 gsy fd-column">
                            <label class="grid--cell s-label" for="m-address">Email</label>
                            <p class="grid--cell s-description">Required, but never shown</p>
                        </div>
                    </div>
                    <div class="grid ps-relative">
                        <input class="s-input js-post-email-field" id="m-address" name="m-address" type="text" value="" size="40" tabindex="106" placeholder="" />
                    </div>
                </div>
            </div>

                    </div>
                </div>
            </div>
            <script>
                StackExchange.ready(
                    function () {
                        StackExchange.openid.initPostLogin('.new-post-login', 'https%3a%2f%2fstackoverflow.com%2fquestions%2f33879896%2fhow-to-execute-start-script-with-nodemon%23new-answer', 'question_page');
                    }
                );
            </script>
            <noscript>
                        <h3 class="grid--cell fs-title">Post as a guest</h3>
            <div class="grid--cell">
                <div class="grid gs4 gsy fd-column">
                    <label class="s-label" for="display-name">Name</label>
                    <div class="grid ps-relative">
                        <input class="s-input" id="display-name" name="display-name" maxlength="30" type="text" value="" tabindex="105" placeholder="" />
                    </div>
                </div>
            </div>
            <div class="grid--cell">
                <div class="grid gs4 gsy fd-column">
                    <div class="grid--cell">
                        <div class="grid gs2 gsy fd-column">
                            <label class="grid--cell s-label" for="m-address">Email</label>
                            <p class="grid--cell s-description">Required, but never shown</p>
                        </div>
                    </div>
                    <div class="grid ps-relative">
                        <input class="s-input js-post-email-field" id="m-address" name="m-address" type="text" value="" size="40" tabindex="106" placeholder="" />
                    </div>
                </div>
            </div>

            </noscript>

                                </div>

                                                                    <div class="form-submit cbt grid gsx gs4">
                                        <button id="submit-button" class="grid--cell s-btn s-btn__primary s-btn__icon" type="submit" tabindex="120" autocomplete="off">
Post Your Answer                                        </button>
                                        <button class="grid--cell s-btn s-btn__danger discard-answer dno">
                                            Discard
                                        </button>
                                            <p class="privacy-policy-agreement">
                                                By clicking “Post Your Answer”, you agree to our <a href='https://stackoverflow.com/legal/terms-of-service/public' name='tos' target='_blank' class='-link'>terms of service</a>, <a href='https://stackoverflow.com/legal/privacy-policy' name='privacy' target='_blank' class='-link'>privacy policy</a> and <a href='https://stackoverflow.com/legal/cookie-policy' name='cookie' target='_blank' class='-link'>cookie policy</a><input type="hidden" name="legalLinksShown" value="1" />
                                            </p>
                                    </div>
                                    <div class="js-general-error general-error cbt d-none"></div>
                            </form>



                            <h2 class="bottom-notice" data-loc="1">
Not the answer you&#39;re looking for?                                Browse other questions tagged <a href="/questions/tagged/node.js" class="post-tag" title="show questions tagged &#39;node.js&#39;" rel="tag">node.js</a> <a href="/questions/tagged/nodemon" class="post-tag" title="show questions tagged &#39;nodemon&#39;" rel="tag">nodemon</a>  or <a href="/questions/ask">ask your own question</a>.                            </h2>
                </div>
            </div>
                            <div id="sidebar" class="show-votes" role="complementary" aria-label="sidebar">
                <div class="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16" data-tracker="cb=1">
                <div class="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900">
                    The Overflow Blog
                </div>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://stackoverflow.blog/2020/03/10/podcast-mongodb-cto-eliot-horowitz/" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/03/10/podcast-mongodb-cto-eliot-horowitz/&quot;,null,null]">
<svg aria-hidden="true" class="svg-icon va-text-top iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://stackoverflow.blog/2020/03/10/podcast-mongodb-cto-eliot-horowitz/" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/03/10/podcast-mongodb-cto-eliot-horowitz/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 0 })">Podcast: A chat with MongoDB’s CTO, Eliot Horowitz</a>
        </div>
    </li>
            </ul>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://stackoverflow.blog/2020/03/11/building-a-jira-integration-for-stack-overflow-for-teams/" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/03/11/building-a-jira-integration-for-stack-overflow-for-teams/&quot;,null,null]">
<svg aria-hidden="true" class="svg-icon va-text-top iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://stackoverflow.blog/2020/03/11/building-a-jira-integration-for-stack-overflow-for-teams/" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/03/11/building-a-jira-integration-for-stack-overflow-for-teams/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 1 })">Building a Jira integration for Stack Overflow for Teams</a>
        </div>
    </li>
            </ul>
                <div class="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900">
                    Featured on Meta
                </div>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://meta.stackexchange.com/questions/344178/the-q1-2020-community-roadmap-is-on-the-blog" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344178/the-q1-2020-community-roadmap-is-on-the-blog&quot;,null,null]">
<div class="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"></div>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://meta.stackexchange.com/questions/344178/the-q1-2020-community-roadmap-is-on-the-blog" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344178/the-q1-2020-community-roadmap-is-on-the-blog&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 3, position: 2 })">The Q1 2020 Community Roadmap is on the Blog</a>
        </div>
    </li>
            </ul>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://meta.stackexchange.com/questions/344491/an-update-on-creative-commons-licensing" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344491/an-update-on-creative-commons-licensing&quot;,null,null]">
<div class="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"></div>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://meta.stackexchange.com/questions/344491/an-update-on-creative-commons-licensing" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344491/an-update-on-creative-commons-licensing&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 3, position: 3 })">An Update On Creative Commons Licensing</a>
        </div>
    </li>
            </ul>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://meta.stackexchange.com/questions/344586/our-commitment-to-responding-to-meta-and-moderators" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344586/our-commitment-to-responding-to-meta-and-moderators&quot;,null,null]">
<div class="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"></div>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://meta.stackexchange.com/questions/344586/our-commitment-to-responding-to-meta-and-moderators" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/344586/our-commitment-to-responding-to-meta-and-moderators&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 3, position: 4 })">Our Commitment to Responding to Meta and Moderators</a>
        </div>
    </li>
            </ul>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://meta.stackoverflow.com/questions/295650/how-does-the-triage-queue-work" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/295650/how-does-the-triage-queue-work&quot;,null,null]">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://meta.stackoverflow.com/questions/295650/how-does-the-triage-queue-work" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/295650/how-does-the-triage-queue-work&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 5 })">How does the Triage queue work?</a>
        </div>
    </li>
            </ul>
            <ul class="s-sidebarwidget--content s-sidebarwidget__items pt0 pr16 pb0 pl16">
    <li class="s-sidebarwidget--item grid">
        <div class="grid--cell1 fl-shrink0">
                <a href="https://meta.stackoverflow.com/questions/394498/triage-needs-to-be-fixed-urgently-and-users-need-to-be-notified-upon-receiving" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/394498/triage-needs-to-be-fixed-urgently-and-users-need-to-be-notified-upon-receiving&quot;,null,null]">
<div class="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"></div>                </a>
        </div>
        <div class="grid--cell">
            <a href="https://meta.stackoverflow.com/questions/394498/triage-needs-to-be-fixed-urgently-and-users-need-to-be-notified-upon-receiving" class="js-gps-track" title="Triage needs to be fixed urgently, and users need to be notified upon receiving a review ban!" data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/394498/triage-needs-to-be-fixed-urgently-and-users-need-to-be-notified-upon-receiving&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 6, position: 6 })">Triage needs to be fixed urgently, and users need to be notified upon&hellip;</a>
        </div>
    </li>
            </ul>

</div>
<div id="dfp-tsb" class="everyonelovesstackoverflow everyoneloves__top-sidebar"></div><div id="dfp-msb" class="everyonelovesstackoverflow everyoneloves__mid-sidebar"></div><div id="hireme"></div>
                

                    <div class="module sidebar-related">
                        <h4 id="h-related">Related</h4>
                        <div class="related js-gps-related-questions" data-tracker="rq=1">
                            <div class="spacer"><a href="/q/2496710" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">1597</div></a><a href="/questions/2496710/writing-files-in-node-js" class="question-hyperlink">Writing files in Node.js</a></div><div class="spacer"><a href="/q/3133243" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted large">954</div></a><a href="/questions/3133243/how-do-i-get-the-path-to-the-current-script-with-node-js" class="question-hyperlink">How do I get the path to the current script with Node.js?</a></div><div class="spacer"><a href="/q/4351521" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">2350</div></a><a href="/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program" class="question-hyperlink">How do I pass command line arguments to a Node.js program?</a></div><div class="spacer"><a href="/q/4482686" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">1158</div></a><a href="/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js" class="question-hyperlink">Check synchronously if file/directory exists in Node.js</a></div><div class="spacer"><a href="/q/5009324" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted large">981</div></a><a href="/questions/5009324/node-js-nginx-what-now" class="question-hyperlink">Node.js + Nginx - What now?</a></div><div class="spacer"><a href="/q/5062614" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">2197</div></a><a href="/questions/5062614/how-to-decide-when-to-use-node-js" class="question-hyperlink">How to decide when to use Node.js?</a></div><div class="spacer"><a href="/q/5266152" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">1824</div></a><a href="/questions/5266152/how-to-exit-in-node-js" class="question-hyperlink">How to exit in Node.js</a></div><div class="spacer"><a href="/q/6237295" title="Vote score (upvotes - downvotes)"><div class="answer-votes extra-large">1622</div></a><a href="/questions/6237295/how-can-i-update-nodejs-and-npm-to-the-next-versions" class="question-hyperlink">How can I update NodeJS and NPM to the next versions?</a></div><div class="spacer"><a href="/q/16073603" title="Vote score (upvotes - downvotes)"><div class="answer-votes answered-accepted extra-large">1939</div></a><a href="/questions/16073603/how-do-i-update-each-dependency-in-package-json-to-the-latest-version" class="question-hyperlink">How do I update each dependency in package.json to the latest version?</a></div>
                        </div>
                    </div>

                <div id="hot-network-questions" class="module tex2jax_ignore">
    <h4>
        <a href="https://stackexchange.com/questions?tab=hot"
           class="js-gps-track s-link s-link__inherit" 
           data-gps-track="posts_hot_network.click({ item_type:1, location:11 })">
            Hot Network Questions
        </a>
    </h4>
    <ul>
            <li >
                <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="https://worldbuilding.stackexchange.com/questions/171012/how-massive-would-a-planet-need-to-be-to-sustain-negligible-damage-from-impact-w" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How massive would a planet need to be to sustain negligible damage from impact with the Earth?
                </a>

            </li>
            <li >
                <div class="favicon favicon-codegolf" title="Code Golf Stack Exchange"></div><a href="https://codegolf.stackexchange.com/questions/200861/rgs-5-5-computing-the-set-of-all-set-partitions-with-fixed-sizes" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:200 }); posts_hot_network.click({ item_type:2, location:11 })">
                    (RGS 5/5) Computing the set of all set partitions with fixed sizes
                </a>

            </li>
            <li >
                <div class="favicon favicon-academia" title="Academia Stack Exchange"></div><a href="https://academia.stackexchange.com/questions/145196/is-it-acceptable-to-report-private-incident-of-a-phd-candidate-to-the-university" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:415 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Is it acceptable to report private incident of a PhD candidate to the university
                </a>

            </li>
            <li >
                <div class="favicon favicon-photo" title="Photography Stack Exchange"></div><a href="https://photo.stackexchange.com/questions/115055/level-adjusting-images-to-hide-internal-features-detailing" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:61 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Level adjusting images to hide internal features/detailing
                </a>

            </li>
            <li >
                <div class="favicon favicon-boardgames" title="Board &amp; Card Games Stack Exchange"></div><a href="https://boardgames.stackexchange.com/questions/50543/how-can-i-translate-a-magic-card-printed-in-a-language-that-i-dont-know" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:147 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How can I translate a Magic card printed in a language that I don&#39;t know?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-electronics" title="Electrical Engineering Stack Exchange"></div><a href="https://electronics.stackexchange.com/questions/485598/are-alternate-connection-points-on-a-pcb-bad" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:135 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Are alternate connection points on a PCB bad?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-gaming" title="Arqade"></div><a href="https://gaming.stackexchange.com/questions/365021/diablo-iii-cross-platform-partnering" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:41 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Diablo III Cross-platform partnering
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-scifi" title="Science Fiction &amp; Fantasy Stack Exchange"></div><a href="https://scifi.stackexchange.com/questions/228422/short-story-about-man-able-to-stop-time-but-can-not-find-right-moment-of-happine" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:186 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Short story about man able to stop time but can not find right moment of happiness
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-unix" title="Unix &amp; Linux Stack Exchange"></div><a href="https://unix.stackexchange.com/questions/572281/why-awk-not-accept-as-field-seprator" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:106 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Why awk not accept ! as field seprator?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-rpg" title="Role-playing Games Stack Exchange"></div><a href="https://rpg.stackexchange.com/questions/166176/when-did-druids-make-their-first-appearance-in-dd-and-how-do-they-differ-betwe" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:122 }); posts_hot_network.click({ item_type:2, location:11 })">
                    When did Druids make their first appearance in D&amp;D, and how do they differ between editions?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-security" title="Information Security Stack Exchange"></div><a href="https://security.stackexchange.com/questions/227095/is-it-safe-to-send-sensitive-data-in-the-post-body-to-an-azure-function" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:162 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Is it safe to send sensitive data in the post body to an azure function?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-academia" title="Academia Stack Exchange"></div><a href="https://academia.stackexchange.com/questions/145242/why-are-most-cranks-old-men" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:415 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Why are most cranks old men?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-codereview" title="Code Review Stack Exchange"></div><a href="https://codereview.stackexchange.com/questions/238653/reverse-each-number-in-a-list" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:196 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Reverse each number in a list
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-puzzling" title="Puzzling Stack Exchange"></div><a href="https://puzzling.stackexchange.com/questions/94804/vowelburgers-for-the-workers" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:559 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Vowelburgers™ for the Workers
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-history" title="History Stack Exchange"></div><a href="https://history.stackexchange.com/questions/57176/where-are-the-native-american-primary-source-documents" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:324 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Where are the Native American primary source documents?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-serverfault" title="Server Fault"></div><a href="https://serverfault.com/questions/1006461/linux-goes-to-swap-while-plenty-of-ram-installed" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:2 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Linux goes to swap while plenty of RAM installed
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="https://worldbuilding.stackexchange.com/questions/170789/would-modern-age-military-skills-be-useful-during-the-crusades" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Would modern age military skills be useful during the crusades?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-rpg" title="Role-playing Games Stack Exchange"></div><a href="https://rpg.stackexchange.com/questions/166147/would-this-homebrew-rule-on-initiating-combat-be-balanced" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:122 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Would this homebrew rule on initiating combat be balanced?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-gamedev" title="Game Development Stack Exchange"></div><a href="https://gamedev.stackexchange.com/questions/179716/how-could-i-prevent-a-player-from-cheating-by-taking-a-picture-with-their-phone" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:53 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How could I prevent a player from cheating by taking a picture with their phone?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-space" title="Space Exploration Stack Exchange"></div><a href="https://space.stackexchange.com/questions/41876/did-the-astronauts-seated-on-the-space-shuttle-mid-deck-have-responsibilities-du" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:508 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Did the astronauts seated on the space shuttle mid-deck have responsibilities during reentry and landing?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-askubuntu" title="Ask Ubuntu"></div><a href="https://askubuntu.com/questions/1216192/why-is-kubuntu-using-much-more-cpu-than-windows-in-youtube-and-other-web-browsin" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:89 }); posts_hot_network.click({ item_type:2, location:11 })">
                    Why is Kubuntu using much more CPU than Windows in YouTube and other web browsing use?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-tex" title="TeX - LaTeX Stack Exchange"></div><a href="https://tex.stackexchange.com/questions/531991/how-can-one-denote-vectors-using-a-squiggly-line-beneath-them-in-latex" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:85 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How can one denote vectors using a squiggly line beneath them in LaTeX?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="https://worldbuilding.stackexchange.com/questions/170980/a-billion-dead" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                    A billion dead?
                </a>

            </li>
            <li class="dno js-hidden">
                <div class="favicon favicon-stackoverflow" title="Stack Overflow"></div><a href="https://stackoverflow.com/questions/60631023/how-to-initialize-c17-vector-of-pairs-with-optional-element" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:1 }); posts_hot_network.click({ item_type:2, location:11 })">
                    How to initialize C++17 vector of pairs with optional element
                </a>

            </li>
    </ul>

        <a href="#" 
           class="show-more js-show-more js-gps-track" 
           data-gps-track="posts_hot_network.click({ item_type:3, location:11 })">
            more hot questions
        </a>
</div>

    <div id="feed-link" class="js-feed-link">
        <a href="/feeds/question/33879896" title="Feed of this question and its answers">
            <svg aria-hidden="true" class="svg-icon fc-orange-400 iconRss" width="18" height="18" viewBox="0 0 18 18"><path d="M1 3c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0 1 10 10h2.5zm-5 0A7.5 7.5 0 0 0 3 7.5V10a5 5 0 0 1 5 5h2.5zm-5 0A2.5 2.5 0 0 0 3 12.5V15h2.5z"/></svg>
            Question feed
        </a>
    </div>
    <aside class="s-modal js-feed-link-modal" tabindex="-1" role="dialog" aria-labelledby="feed-modal-title" aria-describedby="feed-modal-description" aria-hidden="true">
        <div class="s-modal--dialog js-modal-dialog wmx4" role="document"  data-controller="se-draggable">
            <h1 class="s-modal--header fw-bold js-first-tabbable" id="feed-modal-title" data-target="se-draggable.handle" tabindex="0">
                Subscribe to RSS
            </h1>
            <div class="grid gs4 gsy fd-column">
                <div class="grid--cell">
                    <label class="d-block s-label c-default" for="feed-url">
                        Question feed
                        <p class="s-description mt2" id="feed-modal-description">To subscribe to this RSS feed, copy and paste this URL into your RSS reader.</p>
                    </label>
                </div>
                <div class="grid ps-relative">
                    <input class="s-input" type="text" name="feed-url" id="feed-url" readonly="readonly" value="https://stackoverflow.com/feeds/question/33879896" />
                    <svg aria-hidden="true" class="svg-icon s-input-icon fc-orange-400 iconRss" width="18" height="18" viewBox="0 0 18 18"><path d="M1 3c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0 1 10 10h2.5zm-5 0A7.5 7.5 0 0 0 3 7.5V10a5 5 0 0 1 5 5h2.5zm-5 0A2.5 2.5 0 0 0 3 12.5V15h2.5z"/></svg>
                </div>
            </div>
            <a class="s-modal--close s-btn s-btn__muted js-modal-close js-last-tabbable" href="#" aria-label="Close">
                <svg aria-hidden="true" class="svg-icon iconClearSm" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z"/></svg>
            </a>
        </div>
    </aside>
            </div>
    </div>
<script>StackExchange.ready(function(){$.get('/posts/33879896/ivc/f1ba');});</script>
<noscript><div><img src="/posts/33879896/ivc/f1ba" class="dno" alt="" width="0" height="0"></div></noscript><div style="display:none" id="prettify-lang">lang-js</div></div>


        </div>
    </div>


<script>;try{(function(a){function b(a){return'string'==typeof a?document.getElementById(a):a}function c(a){return a=b(a),!!a&&'none'===getComputedStyle(a).display}function d(a){return!c(a)}function e(a){return!!a}function f(a){return /^\s*$/.test(b(a).innerHTML)}function g(a){var b=a.style;b.height=b.maxHeight=b.minHeight='auto',b.display='none',[].forEach.call(a.children,g)}function h(a,b){var c;return function(){return a&&(c=a.call(b||this,arguments),a=null),c}}function i(a){var b=document.createElement('script');b.src=a,document.body.appendChild(b)}function j(a){return k([],a)}function k(a,b){return a.push=function(a){return b(),delete this.push,this.push(a)},a}function l(){try{return!new Function('return async()=>{};')}catch(a){return!0}}function m(){return'undefined'!=typeof googletag&&!!googletag.apiReady}function n(){m()||(googletag={cmd:j(A)})}function o(){var a=document.createElement('div');a.className='adsbox',a.id='clc-abd',a.style.position='absolute',a.style.pointerEvents='none',a.innerHTML='&nbsp;',document.body.appendChild(a)}function p(){return Object.keys(E.ids)}function r(a){var b=E.ids[a],c=E.slots[b];'function'==typeof c&&(c=c(a));return{path:'/'+B+'/'+D+'/'+b+'/'+C,sizes:c,zone:b}}function q(a){try{var b=a.slot.getSlotElementId(),c=[];b||c.push('id=0');var d=document.getElementById(b);if(!b||d?d.hasAttribute('data-clc-stalled')&&c.push('st=1'):c.push('el=0'),0!==c.length)return void F(c.join('&'));var e=r(b),f=e.zone;if(clc.collapse&&clc.collapse[f]&&a.isEmpty)return g(d),void d.setAttribute('data-clc-ready','true');if(-1!==x.dh.indexOf(a.lineItemId))g(d);else if(a.lineItemId&&(d.setAttribute('data-clc-prefilled','true'),'dfp-msb'==b)){var h=document.getElementById('hireme');g(h)}d.setAttribute('data-clc-ready','true')}catch(a){var i=document.querySelector('#dfp-tsb, #dfp-isb, #clc-tsb');i&&i.setAttribute('data-clc-ready','true'),F('e=1')}}function s(a){return!(clc.collapse&&void 0!==clc.collapse[a])||!!clc.collapse[a]}function t(a,b){'dfp-isb'===a&&b.setTargeting('Sidebar',['Inline']),'dfp-tsb'===a&&b.setTargeting('Sidebar',['Right']);var c=r(a),d=c.path,e=c.sizes,f=c.zone,g=googletag.defineSlot(d,e,a);if(s(f)){var h=!x.ll;g.setCollapseEmptyDiv(!0,h)}g.addService(b),!1}function u(b){var c=a.dfp&&a.dfp.targeting||{};Object.keys(c).forEach(function(a){b.setTargeting(a,c[a])})}function v(a){var g=a.map(b).filter(e);return{eligible:g.filter(f).filter(d),ineligible:g.filter(c)}}function w(b){if(void 0===b&&(b=p()),!m())return n(),void googletag.cmd.push(function(){return w(b)});var c=v(b),d=c.eligible,e=c.ineligible;if(e.forEach(g),0!==d.length){x.abd&&o(),googletag.destroySlots();var f=googletag.pubads();x.sf&&(f.setForceSafeFrame(!0),f.setSafeFrameConfig({allowOverlayExpansion:!0,allowPushExpansion:!0,sandbox:!0})),x.ll?f.enableLazyLoad({fetchMarginPercent:50,renderMarginPercent:50}):f.enableSingleRequest(),a.sreEvent||(f.addEventListener('slotRenderEnded',q),a.sreEvent=!0),u(f),d.forEach(function(a){t(a.id,f),a.setAttribute('data-dfp-zone','true')}),googletag.enableServices(),d.forEach(function(a){googletag.display(a.id)})}}var x=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];for(var d,e=0,f=b;e<f.length;e++)for(var g in d=f[e],d)a[g]=d[g];return a}({"lib":"https://cdn.sstatic.net/clc/clc.min.js?v=d86ede4e666e","style":"https://cdn.sstatic.net/clc/styles/clc.min.css?v=c4f5b80d56c6","u":"https://clc.stackoverflow.com/markup.js","wa":true,"kt":2000,"tto":true,"h":"clc.stackoverflow.com","allowed":"^(((talent\\.)?stackoverflow)|(blog\\.codinghorror)|(serverfault|askubuntu)|([^\\.]+\\.stackexchange))\\.com$","wv":true,"al":false,"dh":[5171832659],"abd":true},a.options||{}),y=h(function(){var a=x.lib;l()&&(a=a.replace(/(\.min)?\.js(\?v=[0-9a-fA-F]+)?$/,'.ie$1.js$2')),i(a)}),z=a.cmd||[];Array.isArray(z)&&(0<z.length?y():k(z,y));var A=h(function(){i('https://www.googletagservices.com/tag/js/gpt.js')}),B='248424177',C=/^\/tags\//.test(location.pathname)||/^\/questions\/tagged\//.test(location.pathname)?'tag-pages':/^\/$/.test(location.pathname)||/^\/home/.test(location.pathname)?'home-page':'question-pages',D=location.hostname;var E={slots:{lb:[[728,90]],mlb:[[728,90]],smlb:[[728,90]],bmlb:[[728,90]],sb:function(a){return'dfp-tsb'===a?[[300,250],[300,600]]:[[300,250]]},"tag-sponsorship":[[730,135]],"mobile-below-question":[[320,50],[300,250]],msb:[[300,250],[300,600]]},ids:{"dfp-tlb":'lb',"dfp-mlb":'mlb',"dfp-smlb":'smlb',"dfp-bmlb":'bmlb',"dfp-tsb":'sb',"dfp-isb":'sb',"dfp-tag":'tag-sponsorship',"dfp-msb":'msb',"dfp-m-aq":'mobile-below-question',"clc-tlb":'lb',"clc-mlb":'mlb',"clc-tsb":'sb'}},F=function(a){new Image().src='https://'+x.h+'/stalled.gif?'+a};(function(){var b=x.al;b&&z.push(function(){return a.load()})})(),n(),a.dfp={load:w},a.options=x,a.cmd=z})(this.clc=this.clc||{})}catch(a){window.console.error(a)}</script>    <script>
        var clc = clc || {};
        clc.collapse = { sb: !0, 'tag-sponsorship': !0, lb:!0, mlb:!0, smlb:!0, bmlb:!0, 'mobile-below-question':!0};
        clc.options = clc.options || {};
        clc.options.sf = !0;
        clc.options.hb = !1;
        clc.options.ll = !1;
        clc.cmd = clc.cmd || [];
        clc.cmd.push(function () { window.clc_request='AnrAYCPYxdcIAAAAAFj3BAICAAAAAgAAAAARAAAAfG5vZGUuanN8bm9kZW1vbnwAErWBgco55xSFrQ'; clc.load(); });
                clc.dfp = clc.dfp || {};
        clc.dfp.targeting = {Registered:['false'],'so-tag':['node.js','nodemon'],'tag-reportable':['node.js','nodemon'],'tag-non-reportable':['node.js','nodemon'],NumberOfAnswers:['11']};
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        googletag.cmd.push(function () { clc.dfp.load(); });
    </script>
    
    <footer id="footer" class="site-footer js-footer" role="contentinfo">
        <div class="site-footer--container">
                <div class="site-footer--logo">

                    
                    <a href="https://stackoverflow.com"><svg aria-hidden="true" class="svg-icon native iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"/><path d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"/></svg></a>
                </div>
            
            <nav class="site-footer--nav">
                    <div class="site-footer--col site-footer--col__visible js-footer-col" data-name="default">
                        <h5 class="-title"><a href="https://stackoverflow.com" class="js-gps-track" data-gps-track="footer.click({ location: 2, link: 15})">Stack Overflow</a></h5>
                        <ul class="-list js-primary-footer-links">
                            <li class="-item"><a href="/questions" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 16})">Questions</a></li>
                                <li class="-item"><a href="https://stackoverflow.com/jobs" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 17})">Jobs</a></li>
                                <li class="-item"><a href="https://stackoverflow.com/jobs/directory/developer-jobs" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 11})">Developer Jobs Directory</a></li>
                                     <li class="-item"><a href="https://stackoverflow.com/jobs/salary" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 28})">Salary Calculator</a></li>
                                                            <li class="-item"><a href="/help" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 3 })">Help</a></li>
                                <li class="-item"><a onclick='StackExchange.switchMobile("on")' class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 12 })">Mobile</a></li>
                        </ul>
                    </div>
                    <div class="site-footer--col site-footer--col__visible js-footer-col" data-name="default">
                        <h5 class="-title"><a href="https://stackoverflowbusiness.com" class="js-gps-track" data-gps-track="footer.click({ location: 2, link: 19 })">Products</a></h5>
                        <ul class="-list">
                            <li class="-item"><a href="https://stackoverflow.com/teams" class="js-gps-track -link" 
                                                 data-ga="[&quot;teams traffic&quot;,&quot;footer - site nav&quot;,&quot;stackoverflow.com/teams&quot;,null,{&quot;dimension4&quot;:&quot;teams&quot;}]"
                                                 data-gps-track="footer.click({ location: 2, link: 29 })">Teams</a></li>
                            <li class="-item"><a href="https://stackoverflow.com/talent" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 20 })">Talent</a></li>
                            <li class="-item"><a href="https://stackoverflow.com/advertising" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 21 })">Advertising</a></li>
                            <li class="-item"><a href="https://stackoverflow.com/enterprise" class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 22 })">Enterprise</a></li>
                        </ul>
                    </div>
                <div class="site-footer--col site-footer--col__visible js-footer-col" data-name="default">
                    <h5 class="-title"><a class="js-gps-track" data-gps-track="footer.click({ location: 2, link: 1 })" href="https://stackoverflow.com/company/about">Company</a></h5>
                    <ul class="-list">
                            <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 1 })" href="https://stackoverflow.com/company/about">About</a></li>
                                                <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 27 })" href="https://stackoverflow.com/company/press">Press</a></li>
                            <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 9 })" href="https://stackoverflow.com/company/work-here">Work Here</a></li>
                        <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 7 })" href="https://stackoverflow.com/legal">Legal</a></li>
                        <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 8 })" href="https://stackoverflow.com/legal/privacy-policy">Privacy Policy</a></li>
                            <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link: 13 })" href="https://stackoverflow.com/company/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="site-footer--col site-footer--categories-nav site-footer--col__visible">
                    <a href="#" class="site-footer--back js-footer-back"><svg aria-hidden="true" class="svg-icon iconArrowLeftAlt" width="18" height="18" viewBox="0 0 18 18"><path d="M10.58 16L12 14.59 6.4 9 12 3.41 10.57 2l-7 7 7 7z"/></svg></a>
                    <div>
                        <h5 class="-title"><a href="https://stackexchange.com" data-gps-track="footer.click({ location: 2, link: 30 })">Stack Exchange<br> Network</a></h5>
                        <ul class="-list">
                            <li class="-item"><a href="#" class="-link _expandable js-footer-category-trigger js-gps-track" data-gps-track="footer.click({ location: 2, link: 24 })" data-target="Technology">Technology</a></li>
                            <li class="-item"><a href="#" class="-link _expandable js-footer-category-trigger js-gps-track" data-gps-track="footer.click({ location: 2, link: 24 })" data-target="Life / Arts">Life / Arts</a></li>
                            <li class="-item"><a href="#" class="-link _expandable js-footer-category-trigger js-gps-track" data-gps-track="footer.click({ location: 2, link: 24 })" data-target="Culture / Recreation">Culture / Recreation</a></li>
                            <li class="-item"><a href="#" class="-link _expandable js-footer-category-trigger js-gps-track" data-gps-track="footer.click({ location: 2, link: 24 })" data-target="Science">Science</a></li>
                            <li class="-item"><a href="#" class="-link _expandable js-footer-category-trigger js-gps-track" data-gps-track="footer.click({ location: 2, link: 24 })" data-target="Other">Other</a></li>

                        </ul>
                    </div>
                </div>
                <div class="site-footer--categories">
                    <div class="site-footer--col site-footer--category js-footer-col" data-name="Technology">
        <ul class="-list">
                <li class="-item"><a href="https://stackoverflow.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional and enthusiast programmers">Stack Overflow</a></li>
                <li class="-item"><a href="https://serverfault.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="system and network administrators">Server Fault</a></li>
                <li class="-item"><a href="https://superuser.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="computer enthusiasts and power users">Super User</a></li>
                <li class="-item"><a href="https://webapps.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="power users of web applications">Web Applications</a></li>
                <li class="-item"><a href="https://askubuntu.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Ubuntu users and developers">Ask Ubuntu</a></li>
                <li class="-item"><a href="https://webmasters.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="pro webmasters">Webmasters</a></li>
                <li class="-item"><a href="https://gamedev.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional and independent game developers">Game Development</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://tex.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users of TeX, LaTeX, ConTeXt, and related typesetting systems">TeX - LaTeX</a></li>
                <li class="-item"><a href="https://softwareengineering.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professionals, academics, and students working within the systems development life cycle">Software Engineering</a></li>
                <li class="-item"><a href="https://unix.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users of Linux, FreeBSD and other Un*x-like operating systems">Unix &amp; Linux</a></li>
                <li class="-item"><a href="https://apple.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="power users of Apple hardware and software">Ask Different (Apple)</a></li>
                <li class="-item"><a href="https://wordpress.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="WordPress developers and administrators">WordPress Development</a></li>
                <li class="-item"><a href="https://gis.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="cartographers, geographers and GIS professionals">Geographic Information Systems</a></li>
                <li class="-item"><a href="https://electronics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="electronics and electrical engineering professionals, students, and enthusiasts">Electrical Engineering</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://android.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="enthusiasts and power users of the Android operating system">Android Enthusiasts</a></li>
                <li class="-item"><a href="https://security.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="information security professionals">Information Security</a></li>
                <li class="-item"><a href="https://dba.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="database professionals who wish to improve their database skills and learn from others in the community">Database Administrators</a></li>
                <li class="-item"><a href="https://drupal.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Drupal developers and administrators">Drupal Answers</a></li>
                <li class="-item"><a href="https://sharepoint.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="SharePoint enthusiasts">SharePoint</a></li>
                <li class="-item"><a href="https://ux.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="user experience researchers and experts">User Experience</a></li>
                <li class="-item"><a href="https://mathematica.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users of Wolfram Mathematica">Mathematica</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://salesforce.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Salesforce administrators, implementation experts, developers and anybody in-between">Salesforce</a></li>
                <li class="-item"><a href="https://expressionengine.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="administrators, end users, developers and designers for ExpressionEngine&#174; CMS">ExpressionEngine&#174; Answers</a></li>
                <li class="-item"><a href="https://pt.stackoverflow.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="programadores profissionais e entusiastas">Stack Overflow em Portugu&#234;s</a></li>
                <li class="-item"><a href="https://blender.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people who use Blender to create 3D graphics, animations, or games">Blender</a></li>
                <li class="-item"><a href="https://networkengineering.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="network engineers">Network Engineering</a></li>
                <li class="-item"><a href="https://crypto.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="software developers, mathematicians and others interested in cryptography">Cryptography</a></li>
                <li class="-item"><a href="https://codereview.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="peer programmer code reviews">Code Review</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://magento.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users of the Magento e-Commerce platform">Magento</a></li>
                <li class="-item"><a href="https://softwarerecs.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people seeking specific software recommendations">Software Recommendations</a></li>
                <li class="-item"><a href="https://dsp.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="practitioners of the art and science of signal, image and video processing">Signal Processing</a></li>
                <li class="-item"><a href="https://emacs.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="those using, extending or developing Emacs">Emacs</a></li>
                <li class="-item"><a href="https://raspberrypi.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users and developers of hardware and software for Raspberry Pi">Raspberry Pi</a></li>
                <li class="-item"><a href="https://ru.stackoverflow.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="программистов">Stack Overflow на русском</a></li>
                <li class="-item"><a href="https://codegolf.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="programming puzzle enthusiasts and code golfers">Code Golf</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://es.stackoverflow.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="programadores y profesionales de la inform&#225;tica">Stack Overflow en espa&#241;ol</a></li>
                <li class="-item"><a href="https://ethereum.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="users of Ethereum, the decentralized application platform and smart contract enabled blockchain">Ethereum</a></li>
                <li class="-item"><a href="https://datascience.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Data science professionals, Machine Learning specialists, and those interested in learning more about the field">Data Science</a></li>
                <li class="-item"><a href="https://arduino.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="developers of open-source hardware and software that is compatible with Arduino">Arduino</a></li>
                <li class="-item"><a href="https://bitcoin.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Bitcoin crypto-currency enthusiasts">Bitcoin</a></li>
                <li class="-item"><a href="https://sqa.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="software quality control experts, automation engineers, and software testers">Software Quality Assurance &amp; Testing</a></li>
                <li class="-item"><a href="https://sound.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="sound engineers, producers, editors, and enthusiasts">Sound Design</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Technology"><ul class="-list">
                <li class="-item"><a href="https://windowsphone.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="enthusiasts and power users of Windows Phone OS">Windows Phone</a></li>
                            <li class="-item">
                    <a href="https://stackexchange.com/sites#technology" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 26 })">
                        <strong>
                            more (27)
                        </strong>
                    </a>
                </li>
        </ul>
    </div>
    <div class="site-footer--col site-footer--category js-footer-col" data-name="Life / Arts">
        <ul class="-list">
                <li class="-item"><a href="https://photo.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional, enthusiast and amateur photographers">Photography</a></li>
                <li class="-item"><a href="https://scifi.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="science fiction and fantasy enthusiasts">Science Fiction &amp; Fantasy</a></li>
                <li class="-item"><a href="https://graphicdesign.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Graphic Design professionals, students, and enthusiasts">Graphic Design</a></li>
                <li class="-item"><a href="https://movies.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="movie and tv enthusiasts">Movies &amp; TV</a></li>
                <li class="-item"><a href="https://music.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="musicians, students, and enthusiasts">Music: Practice &amp; Theory</a></li>
                <li class="-item"><a href="https://worldbuilding.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="writers/artists using science, geography and culture to construct imaginary worlds and settings">Worldbuilding</a></li>
                <li class="-item"><a href="https://video.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="engineers, producers, editors, and enthusiasts spanning the fields of video, and media creation">Video Production</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Life / Arts"><ul class="-list">
                <li class="-item"><a href="https://cooking.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional and amateur chefs">Seasoned Advice (cooking)</a></li>
                <li class="-item"><a href="https://diy.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="contractors and serious DIYers">Home Improvement</a></li>
                <li class="-item"><a href="https://money.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people who want to be financially literate">Personal Finance &amp; Money</a></li>
                <li class="-item"><a href="https://academia.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="academics and those enrolled in higher education">Academia</a></li>
                <li class="-item"><a href="https://law.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="legal professionals, students, and others with experience or interest in law">Law</a></li>
                <li class="-item"><a href="https://fitness.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="physical fitness professionals, athletes, trainers, and those providing health-related needs">Physical Fitness</a></li>
                <li class="-item"><a href="https://gardening.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="gardeners and landscapers">Gardening &amp; Landscaping</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Life / Arts"><ul class="-list">
                <li class="-item"><a href="https://parenting.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="parents, grandparents, nannies and others with a parenting role">Parenting</a></li>
                            <li class="-item">
                    <a href="https://stackexchange.com/sites#lifearts" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 26 })">
                        <strong>
                            more (11)
                        </strong>
                    </a>
                </li>
        </ul>
    </div>
    <div class="site-footer--col site-footer--category js-footer-col" data-name="Culture / Recreation">
        <ul class="-list">
                <li class="-item"><a href="https://english.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="linguists, etymologists, and serious English language enthusiasts">English Language &amp; Usage</a></li>
                <li class="-item"><a href="https://skeptics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="scientific skepticism">Skeptics</a></li>
                <li class="-item"><a href="https://judaism.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="those who base their lives on Jewish law and tradition and anyone interested in learning more">Mi Yodeya (Judaism)</a></li>
                <li class="-item"><a href="https://travel.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="road warriors and seasoned travelers">Travel</a></li>
                <li class="-item"><a href="https://christianity.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="committed Christians, experts in Christianity and those interested in learning more">Christianity</a></li>
                <li class="-item"><a href="https://ell.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="speakers of other languages learning English">English Language Learners</a></li>
                <li class="-item"><a href="https://japanese.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students, teachers, and linguists wanting to discuss the finer points of the Japanese language">Japanese Language</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Culture / Recreation"><ul class="-list">
                <li class="-item"><a href="https://chinese.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students, teachers, and linguists wanting to discuss the finer points of the Chinese language">Chinese Language</a></li>
                <li class="-item"><a href="https://french.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students, teachers, and linguists wanting to discuss the finer points of the French language">French Language</a></li>
                <li class="-item"><a href="https://german.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="speakers of German wanting to discuss the finer points of the language and translation">German Language</a></li>
                <li class="-item"><a href="https://hermeneutics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professors, theologians, and those interested in exegetical analysis of biblical texts">Biblical Hermeneutics</a></li>
                <li class="-item"><a href="https://history.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="historians and history buffs">History</a></li>
                <li class="-item"><a href="https://spanish.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="linguists, teachers, students and Spanish language enthusiasts in general wanting to discuss the finer points of the language">Spanish Language</a></li>
                <li class="-item"><a href="https://islam.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="Muslims, experts in Islam, and those interested in learning more about Islam">Islam</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Culture / Recreation"><ul class="-list">
                <li class="-item"><a href="https://rus.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="лингвистов и энтузиастов русского языка">Русский язык</a></li>
                <li class="-item"><a href="https://russian.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students, teachers, and linguists wanting to discuss the finer points of the Russian language">Russian Language</a></li>
                <li class="-item"><a href="https://gaming.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="passionate videogamers on all platforms">Arqade (gaming)</a></li>
                <li class="-item"><a href="https://bicycles.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people who build and repair bicycles, people who train cycling, or commute on bicycles">Bicycles</a></li>
                <li class="-item"><a href="https://rpg.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="gamemasters and players of tabletop, paper-and-pencil role-playing games">Role-playing Games</a></li>
                <li class="-item"><a href="https://anime.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="anime and manga fans">Anime &amp; Manga</a></li>
                <li class="-item"><a href="https://puzzling.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="those who create, solve, and study puzzles">Puzzling</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Culture / Recreation"><ul class="-list">
                <li class="-item"><a href="https://mechanics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="mechanics and DIY enthusiast owners of cars, trucks, and motorcycles">Motor Vehicle Maintenance &amp; Repair</a></li>
                <li class="-item"><a href="https://boardgames.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people who like playing board games, designing board games or modifying the rules of existing board games">Board &amp; Card Games</a></li>
                <li class="-item"><a href="https://bricks.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="LEGO&#174; and building block enthusiasts">Bricks</a></li>
                <li class="-item"><a href="https://homebrew.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="dedicated home brewers and serious enthusiasts">Homebrewing</a></li>
                <li class="-item"><a href="https://martialarts.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students and teachers of all martial arts">Martial Arts</a></li>
                <li class="-item"><a href="https://outdoors.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people who love being outdoors enjoying nature and wilderness, and learning about the required skills and equipment">The Great Outdoors</a></li>
                <li class="-item"><a href="https://poker.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="serious players and enthusiasts of poker">Poker</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Culture / Recreation"><ul class="-list">
                <li class="-item"><a href="https://chess.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="serious players and enthusiasts of chess">Chess</a></li>
                <li class="-item"><a href="https://sports.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="participants in team and individual sport activities">Sports</a></li>
                            <li class="-item">
                    <a href="https://stackexchange.com/sites#culturerecreation" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 26 })">
                        <strong>
                            more (16)
                        </strong>
                    </a>
                </li>
        </ul>
    </div>
    <div class="site-footer--col site-footer--category js-footer-col" data-name="Science">
        <ul class="-list">
                <li class="-item"><a href="https://mathoverflow.net" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional mathematicians">MathOverflow</a></li>
                <li class="-item"><a href="https://math.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people studying math at any level and professionals in related fields">Mathematics</a></li>
                <li class="-item"><a href="https://stats.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="people interested in statistics, machine learning, data analysis, data mining, and data visualization">Cross Validated (stats)</a></li>
                <li class="-item"><a href="https://cstheory.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="theoretical computer scientists and researchers in related fields">Theoretical Computer Science</a></li>
                <li class="-item"><a href="https://physics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="active researchers, academics and students of physics">Physics</a></li>
                <li class="-item"><a href="https://chemistry.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="scientists, academics, teachers, and students in the field of chemistry">Chemistry</a></li>
                <li class="-item"><a href="https://biology.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="biology researchers, academics, and students">Biology</a></li>
                    </ul></div><div class="site-footer--col site-footer--category js-footer-col" data-name="Science"><ul class="-list">
                <li class="-item"><a href="https://cs.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="students, researchers and practitioners of computer science">Computer Science</a></li>
                <li class="-item"><a href="https://philosophy.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="those interested in the study of the fundamental nature of knowledge, reality, and existence">Philosophy</a></li>
                <li class="-item"><a href="https://linguistics.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="professional linguists and others with an interest in linguistic research and theory">Linguistics</a></li>
                <li class="-item"><a href="https://psychology.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="practitioners, researchers, and students in cognitive science, psychology, neuroscience, and psychiatry">Psychology &amp; Neuroscience</a></li>
                <li class="-item"><a href="https://scicomp.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="scientists using computers to solve scientific problems">Computational Science</a></li>
                            <li class="-item">
                    <a href="https://stackexchange.com/sites#science" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 26 })">
                        <strong>
                            more (8)
                        </strong>
                    </a>
                </li>
        </ul>
    </div>
    <div class="site-footer--col site-footer--category js-footer-col" data-name="Other">
        <ul class="-list">
                <li class="-item"><a href="https://meta.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="meta-discussion of the Stack Exchange family of Q&amp;A websites">Meta Stack Exchange</a></li>
                <li class="-item"><a href="https://stackapps.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="apps, scripts, and development with the Stack Exchange API">Stack Apps</a></li>
                <li class="-item"><a href="https://api.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="programmatic interaction with Stack Exchange sites">API</a></li>
                <li class="-item"><a href="https://data.stackexchange.com" class="-link js-gps-track" data-gps-track="footer.click({ location: 1, link: 25 })" title="querying Stack Exchange data using SQL">Data</a></li>
                    </ul>
    </div>
                </div>
            </nav>
            <div class="site-footer--copyright fs-fine">
                <ul class="-list">
                    <li class="-item"><a class="js-gps-track -link" data-gps-track="footer.click({ location: 2, link:4 })" href="https://stackoverflow.blog?blb=1">Blog</a></li>
                    <li class="-item"><a href="https://www.facebook.com/officialstackoverflow/" class="-link js-gps-track" data-gps-track="footer.click({ location: 2, link: 31 })">Facebook</a></li>
                    <li class="-item"><a href="https://twitter.com/stackoverflow" class="-link js-gps-track" data-gps-track="footer.click({ location: 2, link: 32 })">Twitter</a></li>
                    <li class="-item"><a href="https://linkedin.com/company/stack-overflow" class="-link js-gps-track" data-gps-track="footer.click({ location: 2, link: 33 })">LinkedIn</a></li>
                </ul>

                <p class="mt-auto mb24">
site design / logo &#169; 2020 Stack Exchange Inc; user contributions licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="js-gps-track" data-gps-track="footer.click({ location: 2, link: 34 })" rel="license">cc by-sa 4.0</a>
                            with <a href="https://stackoverflow.blog/2009/06/25/attribution-required/"  class="js-gps-track" data-gps-track="footer.click({ location: 2, link:35 })" rel="license">attribution required</a>.
                    <span id="svnrev">rev&nbsp;2020.3.11.36249</span>
                </p>
            </div>
        </div>

            </footer>
            <script>StackExchange.ready(function () { StackExchange.responsiveness.addSwitcher(); })</script>
    <noscript>
        <div id="noscript-warning">Stack Overflow works best with JavaScript enabled
            <img src="https://pixel.quantserve.com/pixel/p-c1rF4kxgLUzNc.gif" alt="" class="dno">
        </div>
    </noscript>

<script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            StackExchange.ready(function () {

                StackExchange.ga.init({
                    sendTitles: true,
                    tracker: window.ga,
                    trackingCodes: [
                        'UA-108242619-1'
                    ],
                        checkDimension: 'dimension42'
                });



                    StackExchange.ga.setDimension('dimension2', '|node.js|nodemon|');

                    StackExchange.ga.setDimension('dimension3', 'Questions/Show');


                StackExchange.ga.trackPageView();
            });
            
/**/
            
            var _qevents = _qevents || [],
            _comscore = _comscore || [];
            (function() {
                var ssl = 'https:' == document.location.protocol,
                    s = document.getElementsByTagName('script')[0],
                    qc = document.createElement('script');
                 qc.async = true;
                    qc.src = (ssl ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js';
                    s.parentNode.insertBefore(qc, s);
                    _qevents.push({ qacct: "p-c1rF4kxgLUzNc" });
/**/
                 var sc = document.createElement('script');
                    sc.async = true;
                    sc.src = (ssl ? 'https://sb' : 'http://b') + '.scorecardresearch.com/beacon.js';
                    s.parentNode.insertBefore(sc, s);
                    _comscore.push({ c1: "2", c2: "17440561" });
            })();
            

</script>
            
    </body>
    </html>
 `