Sample Use:
===============

In your head
---



Somewhere in your code 
---

    function shareStatus()
    {
        SocialShare.shareStatus("This was shared from JS+PhoneGap+WP8 Yo!");
    }

    function shareLink()
    {
        SocialShare.shareLink("WP7 PhoneGap Plugins",
                              "https://github.com/purplecabbage/phonegap-plugins/tree/master/WindowsPhone",
                              "Watch for updates here soon! Shared from JavaScript");
    }


In your markup :
---

    <input style="display:block;margin:40px 0px" type="button" onclick="shareLink()" value="Share a Link"/>
    <input style="display:block;margin:40px 0px" type="button" onclick="shareStatus()" value="Update your Status"/>
