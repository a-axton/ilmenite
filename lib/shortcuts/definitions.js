module.exports = [
  {
    property: 'width',
    views: 'global',
    shortcuts: [
      {
        value: 'size',
        represents: 'Ti.UI.SIZE'
      },
      {
        value: 'fill',
        represents: 'Ti.UI.FILL'
      }
    ]
  },
  {
    property: 'height',
    views: 'global',
    shortcuts: [
      {
        value: 'size',
        represents: 'Ti.UI.SIZE'
      },
      {
        value: 'fill',
        represents: 'Ti.UI.FILL'
      }
    ]
  },
  {
    property: 'clipMode',
    views: 'global',
    shortcuts: [
      {
        value: 'enabled',
        represents: 'Ti.UI.iOS.CLIP_MODE_ENABLED'
      },
      {
        value: 'disabled',
        represents: 'Ti.UI.iOS.CLIP_MODE_DISABLED'
      },
      {
        value: 'default',
        represents: 'Ti.UI.iOS.CLIP_MODE_DEFAULT'
      }
    ]
  },
  {
    property: 'orientationModes',
    views: ['SplitWindow','NavigationWindow','Window'],
    type: 'array',
    shortcuts: [
      {
        value: 'landscape-left',
        represents: 'Ti.UI.LANDSCAPE_LEFT'
      },
      {
        value: 'landscape-right',
        represents: 'Ti.UI.LANDSCAPE_RIGHT'
      },
      {
        value: 'portrait',
        represents: 'Ti.UI.PORTRAIT'
      },
      {
        value: 'upside-portrait',
        represents: 'Ti.UI.UPSIDE_PORTRAIT'
      }
    ]
  },
  {
    property: 'statusBarStyle',
    views: ['SplitWindow','NavigationWindow','Window'],
    shortcuts: [
      {
        value: 'default',
        represents: 'Ti.UI.iPhone.StatusBar.DEFAULT'
      },
      {
        value: 'gray',
        represents: 'Ti.UI.iPhone.StatusBar.GRAY'
      },
      {
        value: 'grey',
        represents: 'Ti.UI.iPhone.StatusBar.GREY'
      },
      {
        value: 'light-content',
        represents: 'Ti.UI.iPhone.StatusBar.LIGHT_CONTENT'
      },
      {
        value: 'opaque-black',
        represents: 'Ti.UI.iPhone.StatusBar.OPAQUE_BLACK'
      },
      {
        value: 'translucent-black',
        represents: 'Ti.UI.iPhone.StatusBar.TRANSLUCENT_BLACK'
      },
    ]
  },
  {
    property: 'ellipsize',
    views: ['TextArea','TextField','Label'],
    shortcuts: [
      {
        value: 'start',
        represents: 'Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_START'
      },
      {
        value: 'middle',
        represents: 'Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE'
      },
      {
        value: 'end',
        represents: 'Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END'
      },
      {
        value: 'marquee',
        represents: 'Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE'
      },
    ]
  },
  {
    property: 'softKeyboardOnFocus',
    views: 'global',
    shortcuts: [
      {
        value: 'default',
        represents: 'Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS'
      },
      {
        value: 'hide',
        represents: 'Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS'
      },
      {
        value: 'show',
        represents: 'Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS'
      }
    ]
  },
  {
    property: 'selectionStyle',
    views: ['TableViewRow','ListItem'],
    shortcuts: [
      {
        value: 'blue',
        represents: 'Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE'
      },
      {
        value: 'gray',
        represents: 'Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY'
      },
      {
        value: 'none',
        represents: 'Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE'
      }
    ]
  },
  {
    property: 'separatorStyle',
    views: ['ListView','TableView'],
    shortcuts: [
      {
        value: 'none',
        represents: 'Titanium.UI.iPhone.TableViewSeparatorStyle.NONE'
      },
      {
        value: 'single-line',
        represents: 'Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE'
      }
    ]
  },
  {
    property: 'textAlign',
    views: 'global',
    shortcuts: [
      {
        value: 'center',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_CENTER'
      },
      {
        value: 'left',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_LEFT'
      },
      {
        value: 'right',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_RIGHT'
      }
    ]
  },
  {
    property: 'verticalAlign',
    views: 'global',
    shortcuts: [
      {
        value: 'bottom',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_BOTTOM'
      },
      {
        value: 'center',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_CENTER'
      },
      {
        value: 'top',
        represents: 'Titanium.UI.TEXT_ALIGNMENT_TOP'
      }
    ]
  },
  {
    property: 'extendEdges',
    views: ['SplitWindow','NavigationWindow','Window'],
    shortcuts: [
      {
        value: 'all',
        represents: 'Titanium.UI.EXTEND_EDGE_ALL'
      },
      {
        value: 'bottom',
        represents: 'Titanium.UI.EXTEND_EDGE_BOTTOM'
      },
      {
        value: 'left',
        represents: 'Titanium.UI.EXTEND_EDGE_LEFT'
      },
      {
        value: 'none',
        represents: 'Titanium.UI.EXTEND_EDGE_NONE'
      },
      {
        value: 'right',
        represents: 'Titanium.UI.EXTEND_EDGE_RIGHT'
      },
      {
        value: 'top',
        represents: 'Titanium.UI.EXTEND_EDGE_TOP'
      }
    ]
  },
  {
    property: 'decelerationRate',
    views: ['ScrollView'],
    shortcuts: [
      {
        value: 'fast',
        represents: 'Titanium.UI.iOS.SCROLL_DECELERATION_RATE_FAST'
      },
      {
        value: 'normal',
        represents: 'Titanium.UI.iOS.SCROLL_DECELERATION_RATE_NORMAL'
      }
    ]
  },
  {
    property: 'overScrollMode',
    views: ['WebView','TableView','ScrollView','ScrollableView'],
    shortcuts: [
      {
        value: 'always',
        represents: 'Titanium.UI.Android.OVER_SCROLL_ALWAYS'
      },
      {
        value: 'content-scrolls',
        represents: 'Titanium.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS'
      },
      {
        value: 'never',
        represents: 'Titanium.UI.Android.OVER_SCROLL_NEVER'
      }
    ]
  },
  {
    property: 'scrollIndicatorStyle',
    views: ['TableView','ScrollView','ListView'],
    shortcuts: [
      {
        value: 'black',
        represents: 'Titanium.UI.iPhone.ScrollIndicatorStyle.BLACK'
      },
      {
        value: 'default',
        represents: 'Titanium.UI.iPhone.ScrollIndicatorStyle.DEFAULT'
      },
      {
        value: 'white',
        represents: 'Titanium.UI.iPhone.ScrollIndicatorStyle.WHITE'
      }
    ]
  },
  {
    property: 'style',
    views: ['Button'],
    shortcuts: [
      // buttons
      {
        value: 'bar',
        represents: 'Titanium.UI.iPhone.SystemButtonStyle.BAR'
      },
      {
        value: 'bordered',
        represents: 'Titanium.UI.iPhone.SystemButtonStyle.BORDERED'
      },
      {
        value: 'done',
        represents: 'Titanium.UI.iPhone.SystemButtonStyle.DONE'
      },
      {
        value: 'plain',
        represents: 'Titanium.UI.iPhone.SystemButtonStyle.PLAIN'
      }
    ]
  },
  {
    property: 'style',
    views: ['ActivityIndicator'],
    shortcuts: [
      // activity indicator
      {
        value: 'activity-ios-big',
        represents: 'Titanium.UI.iPhone.ActivityIndicatorStyle.BIG'
      },
      {
        value: 'activity-ios-dark',
        represents: 'Titanium.UI.iPhone.ActivityIndicatorStyle.DARK'
      },
      {
        value: 'activity-ios-plain',
        represents: 'Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN'
      },
      {
        value: 'activity-big',
        represents: 'Titanium.UI.ActivityIndicatorStyle.BIG'
      },
      {
        value: 'activity-big-dark',
        represents: 'Titanium.UI.ActivityIndicatorStyle.BIG_DARK'
      },
      {
        value: 'activity-dark',
        represents: 'Titanium.UI.ActivityIndicatorStyle.DARK'
      },
      {
        value: 'activity-plain',
        represents: 'Titanium.UI.ActivityIndicatorStyle.PLAIN'
      }
    ]
  },
  {
    property: 'style',
    views: ['AlertDialog'],
    shortcuts: [
      // alert dialog
      {
        value: 'default',
        represents: 'Titanium.UI.iPhone.AlertDialogStyle.DEFAULT'
      },
      {
        value: 'login-and-password',
        represents: 'Titanium.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT'
      },
      {
        value: 'secure-text-input',
        represents: 'Titanium.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT'
      },
      {
        value: 'plain-text-input',
        represents: 'Titanium.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT'
      }
    ]
  },
  {
    property: 'style',
    views: ['TableView'],
    shortcuts: [
      // table view
      {
        value: 'table-grouped',
        represents: 'Titanium.UI.iPhone.TableViewStyle.GROUPED'
      },
      {
        value: 'table-plain',
        represents: 'Titanium.UI.iPhone.TableViewStyle.PLAIN'
      }
    ]
  },
  {
    property: 'style',
    views: ['ProgressBar'],
    shortcuts: [
      {
        value: 'progress-bar',
        represents: 'Titanium.UI.iPhone.ProgressBarStyle.BAR'
      },
      {
        value: 'progress-default',
        represents: 'Titanium.UI.iPhone.ProgressBarStyle.DEFAULT'
      },
      {
        value: 'progress-plain',
        represents: 'Titanium.UI.iPhone.ProgressBarStyle.PLAIN'
      }
    ]
  },
  {
    property: 'style',
    views: ['Switch'],
    shortcuts: [
      // table view
      {
        value: 'checkbox',
        represents: 'Titanium.UI.Android.SWITCH_STYLE_CHECKBOX'
      },
      {
        value: 'toggle-button',
        represents: 'Titanium.UI.Android.SWITCH_STYLE_TOGGLEBUTTON'
      },
      {
        value: 'switch',
        represents: 'Titanium.UI.Android.SWITCH_STYLE_SWITCH'
      }
    ]
  },
  {
    property: 'type',
    views: ['Picker'],
    shortcuts: [
      {
        value: 'count-down-timer',
        represents: 'Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER'
      },
      {
        value: 'date',
        represents: 'Titanium.UI.PICKER_TYPE_DATE'
      },
      {
        value: 'date-time',
        represents: 'Titanium.UI.PICKER_TYPE_DATE_AND_TIME'
      },
      {
        value: 'plain',
        represents: 'Titanium.UI.PICKER_TYPE_PLAIN'
      },
      {
        value: 'time',
        represents: 'Titanium.UI.PICKER_TYPE_TIME'
      }
    ]
  },
  {
    property: 'systemButton',
    views: ['Button'],
    shortcuts: [
      {
        value: 'action',
        represents: 'Titanium.UI.iPhone.SystemButton.ACTION'
      },
      {
        value: 'activity',
        represents: 'Titanium.UI.iPhone.SystemButton.ACTIVITY'
      },
      {
        value: 'add',
        represents: 'Titanium.UI.iPhone.SystemButton.ADD'
      },
      {
        value: 'bookmarks',
        represents: 'Titanium.UI.iPhone.SystemButton.BOOKMARKS'
      },
      {
        value: 'camera',
        represents: 'Titanium.UI.iPhone.SystemButton.BOOKMARKS'
      },
      {
        value: 'cancel',
        represents: 'Titanium.UI.iPhone.SystemButton.BOOKMARKS'
      },
      {
        value: 'compose',
        represents: 'Titanium.UI.iPhone.SystemButton.BOOKMARKS'
      },
      {
        value: 'contact-add',
        represents: 'Titanium.UI.iPhone.SystemButton.CONTACT_ADD'
      },
      {
        value: 'disclosure',
        represents: 'Titanium.UI.iPhone.SystemButton.DISCLOSURE'
      },
      {
        value: 'done',
        represents: 'Titanium.UI.iPhone.SystemButton.DONE'
      },
      {
        value: 'edit',
        represents: 'Titanium.UI.iPhone.SystemButton.EDIT'
      },
      {
        value: 'fast-forward',
        represents: 'Titanium.UI.iPhone.SystemButton.FAST_FORWARD'
      },
      {
        value: 'fixed-space',
        represents: 'Titanium.UI.iPhone.SystemButton.FIXED_SPACE'
      },
      {
        value: 'flexible-space',
        represents: 'Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE'
      },
      {
        value: 'info-dark',
        represents: 'Titanium.UI.iPhone.SystemButton.INFO_DARK'
      },
      {
        value: 'info-light',
        represents: 'Titanium.UI.iPhone.SystemButton.INFO_LIGHT'
      },
      {
        value: 'organize',
        represents: 'Titanium.UI.iPhone.SystemButton.ORGANIZE'
      },
      {
        value: 'pause',
        represents: 'Titanium.UI.iPhone.SystemButton.PAUSE'
      },
      {
        value: 'play',
        represents: 'Titanium.UI.iPhone.SystemButton.PLAY'
      },
      {
        value: 'refresh',
        represents: 'Titanium.UI.iPhone.SystemButton.REFRESH'
      },
      {
        value: 'reply',
        represents: 'Titanium.UI.iPhone.SystemButton.REPLY'
      },
      {
        value: 'rewind',
        represents: 'Titanium.UI.iPhone.SystemButton.REWIND'
      },
      {
        value: 'save',
        represents: 'Titanium.UI.iPhone.SystemButton.SAVE'
      },
      {
        value: 'spinner',
        represents: 'Titanium.UI.iPhone.SystemButton.SPINNER'
      },
      {
        value: 'stop',
        represents: 'Titanium.UI.iPhone.SystemButton.STOP'
      },
      {
        value: 'trash',
        represents: 'Titanium.UI.iPhone.SystemButton.TRASH'
      }
    ]
  },
  {
    property: 'appearance',
    views: ['TextArea','TextField'],
    shortcuts: [
      {
        value: 'alert',
        represents: 'Titanium.UI.KEYBOARD_APPEARANCE_ALERT'
      },
      {
        value: 'default',
        represents: 'Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT'
      }
    ]
  },
  {
    property: 'autocapitalization',
    views: ['TextArea','TextField','SearchBar'],
    shortcuts: [
      {
        value: 'all',
        represents: 'Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL'
      },
      {
        value: 'none',
        represents: 'Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE'
      },
      {
        value: 'sentences',
        represents: 'Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES'
      },
      {
        value: 'words',
        represents: 'Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS'
      },
      {
        value: 'none',
        represents: 'Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE'
      }
    ]
  },
  {
    property: 'clearButtonMode',
    views: ['TextArea','TextField'],
    shortcuts: [
      {
        value: 'always',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ALWAYS'
      },
      {
        value: 'never',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_NEVER'
      },
      {
        value: 'onblur',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ONBLUR'
      },
      {
        value: 'onfocus',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ONFOCUS'
      }
    ]
  },
  {
    property: 'keyboardType',
    views: ['TextArea','TextField','SearchBar'],
    shortcuts: [
      {
        value: 'appearance-alert',
        represents: 'Titanium.UI.KEYBOARD_APPEARANCE_ALERT'
      },
      {
        value: 'appearance-default',
        represents: 'Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT'
      },
      {
        value: 'ascii',
        represents: 'Titanium.UI.KEYBOARD_ASCII'
      },
      {
        value: 'decimal',
        represents: 'Titanium.UI.KEYBOARD_DECIMAL_PAD'
      },
      {
        value: 'default',
        represents: 'Titanium.UI.KEYBOARD_DEFAULT'
      },
      {
        value: 'email',
        represents: 'Titanium.UI.KEYBOARD_EMAIL'
      },
      {
        value: 'name-phone',
        represents: 'Titanium.UI.KEYBOARD_NAMEPHONE_PAD'
      },
      {
        value: 'numbers-punctuation',
        represents: 'Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION'
      },
      {
        value: 'number-pad',
        represents: 'Titanium.UI.KEYBOARD_NUMBER_PAD'
      },
      {
        value: 'phone-pad',
        represents: 'Titanium.UI.KEYBOARD_PHONE_PAD'
      },
      {
        value: 'url',
        represents: 'Titanium.UI.KEYBOARD_URL'
      }
    ]
  },
  {
    property: 'returnKeyType',
    views: ['TextArea','TextField'],
    shortcuts: [
      {
        value: 'default',
        represents: 'Titanium.UI.RETURNKEY_DEFAULT'
      },
      {
        value: 'done',
        represents: 'Titanium.UI.RETURNKEY_DONE'
      },
      {
        value: 'emergency',
        represents: 'Titanium.UI.RETURNKEY_EMERGENCY_CALL'
      },
      {
        value: 'go',
        represents: 'Titanium.UI.RETURNKEY_GO'
      },
      {
        value: 'google',
        represents: 'Titanium.UI.RETURNKEY_GOOGLE'
      },
      {
        value: 'join',
        represents: 'Titanium.UI.RETURNKEY_JOIN'
      },
      {
        value: 'next',
        represents: 'Titanium.UI.RETURNKEY_NEXT'
      },
      {
        value: 'route',
        represents: 'Titanium.UI.RETURNKEY_ROUTE'
      },
      {
        value: 'search',
        represents: 'Titanium.UI.RETURNKEY_SEARCH'
      },
      {
        value: 'send',
        represents: 'Titanium.UI.RETURNKEY_SEND'
      },
      {
        value: 'yahoo',
        represents: 'Titanium.UI.RETURNKEY_YAHOO'
      }
    ]
  },
  {
    property: 'rightButtonMode',
    views: ['TextField'],
    shortcuts: [
      {
        value: 'always',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ALWAYS'
      },
      {
        value: 'never',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_NEVER'
      },
      {
        value: 'onblur',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ONBLUR'
      },
      {
        value: 'onfocus',
        represents: 'Titanium.UI.INPUT_BUTTONMODE_ONFOCUS'
      }
    ]
  },
  {
    property: 'mediaControlStyle',
    views: ['VideoPlayer'],
    shortcuts: [
      {
        value: 'volume-only',
        represents: 'Titanium.Media.VIDEO_CONTROL_VOLUME_ONLY'
      },
      {
        value: 'default',
        represents: 'Titanium.Media.VIDEO_CONTROL_DEFAULT'
      },
      {
        value: 'embedded',
        represents: 'Titanium.Media.VIDEO_CONTROL_EMBEDDED'
      },
      {
        value: 'fullscreen',
        represents: 'Titanium.Media.VIDEO_CONTROL_FULLSCREEN'
      },
      {
        value: 'hidden',
        represents: 'Titanium.Media.VIDEO_CONTROL_HIDDEN'
      },
      {
        value: 'none',
        represents: 'Titanium.Media.VIDEO_CONTROL_NONE'
      }
    ]
  },
  {
    property: 'mediaTypes',
    views: ['VideoPlayer'],
    shortcuts: [
      {
        value: 'audio',
        represents: 'Titanium.Media.VIDEO_MEDIA_TYPE_AUDIO'
      },
      {
        value: 'none',
        represents: 'Titanium.Media.VIDEO_MEDIA_TYPE_NONE'
      },
      {
        value: 'video',
        represents: 'Titanium.Media.VIDEO_MEDIA_TYPE_VIDEO'
      }
    ]
  },
  {
    property: 'repeatMode',
    views: ['VideoPlayer'],
    shortcuts: [
      {
        value: 'none',
        represents: 'Titanium.Media.VIDEO_REPEAT_MODE_NONE'
      },
      {
        value: 'one',
        represents: 'Titanium.Media.VIDEO_REPEAT_MODE_ONE'
      }
    ]
  },
  {
    property: 'scalingMode',
    views: ['VideoPlayer'],
    shortcuts: [
      {
        value: 'aspect-fill',
        represents: 'Titanium.Media.VIDEO_SCALING_ASPECT_FILL'
      },
      {
        value: 'aspect-fit',
        represents: 'Titanium.Media.VIDEO_SCALING_ASPECT_FIT'
      },
      {
        value: 'mode-fill',
        represents: 'Titanium.Media.VIDEO_SCALING_MODE_FILL'
      },
      {
        value: 'none',
        represents: 'Titanium.Media.VIDEO_SCALING_NONE'
      }
    ]
  },
  {
    property: 'sourceType',
    views: ['VideoPlayer'],
    shortcuts: [
      {
        value: 'file',
        represents: 'Titanium.Media.VIDEO_SOURCE_TYPE_FILE'
      },
      {
        value: 'streaming',
        represents: 'Titanium.Media.VIDEO_SOURCE_TYPE_STREAMING'
      },
      {
        value: 'unknown',
        represents: 'Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN'
      }
    ]
  }
];
