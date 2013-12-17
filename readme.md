A simple plugin for sharing status updates and links to social networks.  Easy fire and forget will post to user's installed accounts.  User leaves your app to complete the process, and is returned afterwards.


To install using plugman
---
    
From plugin registry:
    
    $ plugman install --project . --platform wp7|wp8 --plugin com.risingj.cordova.socialshare

From the repo:
    
    $ plugman install --project . --platform wp7|wp8 --plugin https://github.com/purplecabbage/social-share.git

From a local clone:
    
    $ plugman install --project . --platform wp7|wp8 --plugin #path_to_local_clone#

To install using cordova-cli
---

From plugin registry:

    $ cordova plugin add com.risingj.cordova.socialshare

From the repo:

    $ cordova plugin add https://github.com/purplecabbage/social-share.git

From a local clone:

    $ cordova plugin add #path_to_local_clone#      

Sample Usage 
===

Somewhere in your code 
---

    function shareStatus()
    {
        SocialShare.shareStatus("This was shared from JS+PhoneGap+WP8 Yo! Using the SocialShare plugin.");
    }

    function shareLink()
    {
        SocialShare.shareLink("SocialShare plugin for Apache Cordova",
                              "https://github.com/purplecabbage/social-share",
                              "Watch for updates here soon! Shared from JavaScript");
    }


In your markup :
---

    <input style="display:block;margin:40px 0px" type="button" onclick="shareLink()" value="Share a Link"/>
    <input style="display:block;margin:40px 0px" type="button" onclick="shareStatus()" value="Update your Status"/>
