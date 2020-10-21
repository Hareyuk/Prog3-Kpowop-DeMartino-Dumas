import React from 'react';

const Layout = ({children}) => 
{
    return(
        <div className="App" style={{zIndex: "20"}}>
                {children}
            </div>
        )
}

export default Layout;