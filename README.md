# React-Trumbowyg

React wrapper for [trumbowyg](https://alex-d.github.io/Trumbowyg/ "trumbowyg").

![](demo.gif)

# Table of contents

- [How do I add this to my project?](#how-do-i-add-this-to-my-project)
- [Configure](#configure)
- [Usage](#usage)
- [Props](#props)

# How do I add this to my project?

Install react-trumbowyg via npm:
```
> npm i react-trumbowyg --save
```

# Configure

1. Install jQuery via npm: 
```
> npm i jquery --save
``` 

2. If you are using webpack, add in webpack.config.js:  
```
new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
}) 
```
# Usage
Add Trumbowyg React component in your project 
```
import Trumbowyg from 'react-trumbowyg'

<Trumbowyg/>
```

And don't forget to add default css
```
import 'react-trumbowyg/dist/trumbowyg.min.css'
```

That's it!

# Props
|                                                     Prop                                                                |    Default    |        Type         |
|:------------------------------------------------------------------------------------------------------------------------|:--------------|:--------------------|
| [id](#id)                                                                                                               |               | ```String```        |
| [data](#data)                                                                                                           |               | ```String```        |
| [placeholder](#placeholder)                                                                                             |               | ```String```        |
| [buttons](https://alex-d.github.io/Trumbowyg/documentation.html#button-pane "buttons")                                  |               | ```Array<String>``` |
| [semantic](https://alex-d.github.io/Trumbowyg/documentation.html#semantic "semantic")                                   | ```true```    | ```Bool```          |
| [resetCss](https://alex-d.github.io/Trumbowyg/documentation.html#reset-css "resetCss")                                  | ```false```   | ```Bool```          |
| [removeformatPasted](https://alex-d.github.io/Trumbowyg/documentation.html#remove-format-pasted "removeformatPasted")   | ```false```   | ```Bool```          |
| [autogrow](https://alex-d.github.io/Trumbowyg/documentation.html#auto-adjust-height "autogrow")                         | ```false```   | ```Bool```          |
| [disabled](https://alex-d.github.io/Trumbowyg/documentation.html#enable-disable-edition "disabled")                     | ```false```   | ```Bool```          |
| [onFocus](#onFocus)                                                                                                     |               |                     |
| [onBlur](#onBlur)                                                                                                       |               |                     |
| [onInit](#onInit)                                                                                                       |               |                     |
| [onChange](#onChange)                                                                                                   |               |                     |
| [onResize](#onResize)                                                                                                   |               |                     |
| [onPaste](#onPaste)                                                                                                     |               |                     |
| [onOpenFullScreen](#onOpenFullScreen)                                                                                   |               |                     |
| [onCloseFullScreen](#onCloseFullScreen)                                                                                 |               |                     |
| [onClose](#onClose)                                                                                                     |               |                     |
| [shouldUseSvgIcons](#shouldUseSvgIcons)                                                                                 | ```true```    | ```Bool```          |
| [svgIconsPath](#svgIconsPath)                                                                                           |               | ```String```        |
| [shouldInjectSvgIcons](#shouldInjectSvgIcons)                                                                           | ```true```    | ```Bool```          |

## id
**Type**: ```String```

This id is used by jQuery.

## data
**Type**: ```String```

Text to be entered in the editor by default.

## placeholder
**Type**: ```String```

Add a placeholder.
Placeholder is visible only if the element is empty (no HTML/text).

## Event handlers
### onFocus
Event handler when the focus is on editor
### onBlur
Blur on editor
### onInit
Editor is initialized
### onChange
Change in editor
### onResize
Resize the editor on autogrow
### onPaste
Paste something in the editor
### onOpenFullScreen
Switch to fullscreen mode
### onCloseFullScreen
Leave editor's fullscreen mode
### onClose
Close the editor

## shouldUseSvgIcons
**Type**: ```Bool```
**Default**: ```true```

Should use default svg icons

## svgIconsPath
**Type**: ```String```

The path to your own svg icons

## shouldInjectSvgIcons
**Type**: ```Bool```
**Default**: ```true```

If this prop is false, you should specify the path to your own svg icons in ```svgIconsPath``` prop
