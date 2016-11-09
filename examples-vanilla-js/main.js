$(function () {

    var trumbowyg = window['react-trumbowyg']
    
    var logToConsole = function(e) {
        console.log(e);
    }
    
    var elem = React.createElement(
        trumbowyg.default,
        {
            id: 'tr', //required
            data: 'Hello World!', // optional
            onFocus: logToConsole, // optional
            onBlur: logToConsole, // optional
            onInit: logToConsole, // optional 
            onChange: logToConsole, // optional
            onResize: logToConsole, // optional
            onPaste: logToConsole, // optional
            onOpenFullScreen: logToConsole, // optional
            onCloseFullScreen: logToConsole, // optional
            onClose: logToConsole, // optional
            shouldUseSvgIcons: true // optional
        }        
    );    

    ReactDOM.render(
        elem,
        document.getElementById('root')
    );
})