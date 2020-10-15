import React from 'react';

const Layout = ({children}) => 
{
    return(
        <div className="App" style={{zIndex: "10"}}>
                {children}
            </div>
        )
}

export default Layout;