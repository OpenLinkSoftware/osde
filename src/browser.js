
var Browser = {
    isChromeAPI: true,

    isChromeWebExt: true,
    isFirefoxWebExt: false,
    isEdgeWebExt: false,

    api: null,

    openTab : function(uri, tab_index) {
      if (Browser.isEdgeWebExt) {
        if (tab_index!==undefined) 
          Browser.api.tabs.create({url:uri, index:tab_index+1 });
        else
          Browser.api.tabs.getCurrent(
            function(tab) {
              if (tab!==undefined)
                Browser.api.tabs.create({url:uri, index:tab.index+1 });
              else
                Browser.api.tabs.create({url:uri});
            }
          )
      }else
        window.open(uri);
    },

    backgroundOpenTab : function(uri, tab_index) {
      if (tab_index!==undefined) 
        return Browser.api.tabs.create({url:uri, index:tab_index+1 });
      else
        Browser.api.tabs.getCurrent(
          function(tab) {
            if (tab!==undefined)
              return Browser.api.tabs.create({url:uri, index:tab.index+1 });
            else
              return Browser.api.tabs.create({url:uri});
          }
        )
    }

}

try {
  Browser.api = (Browser.isChromeAPI && Browser.isChromeWebExt) ? chrome : browser;
} catch(e) {}
