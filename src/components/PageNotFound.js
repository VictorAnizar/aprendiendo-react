import React from "react";
import '../PageNotFound.css'

const PageNotFound = () => {
    return (
        <div id="app">
            <div>403</div>
            <div class="txt">
                Forbidden<span class="blink">_</span>
            </div>
        </div>
    );
}

export default PageNotFound;