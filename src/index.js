import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import './index.css'

ReactDom.render(
    <React.StrictMode>
        <App/>,
    </React.StrictMode>,
    document.getElementById('root')
)

// ReactDom.render(<h1>My app</h1>,
//         document.getElementById('root')
//     )

