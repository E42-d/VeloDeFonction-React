import React from 'react';

function Background() {
    return (
        <div>
     <img src={"/Background.png"} style={{
         width:"100%",
         height:"100%",
         objectFit:"cover",
         position:"fixed",
         zIndex:"-1",
     }}/>
        </div>
    );
}

export default Background;