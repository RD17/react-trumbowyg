import React from 'react'
import ReactDOM from 'react-dom'
import Trumbowyg from 'react-trumbowyg'

import 'react-trumbowyg/dist/trumbowyg.min.css'

ReactDOM.render(
    <Trumbowyg
        buttons={
            [
                ['formatting'],
                'btnGrp-semantic',
                ['link'],
                ['insertImage'],
                'btnGrp-justify',
                'btnGrp-lists',
                ['fullscreen']
            ]
        }
        data='Hello, World!'
        placeholder='Type your text!'
        onChange={() => console.log('Change event fired')} 
    />,
    document.getElementById('root')
)