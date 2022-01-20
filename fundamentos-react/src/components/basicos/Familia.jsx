import React from "react";

export default (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, (elemento) => {
                    return React.cloneElement(elemento, props)
                })
            }
        </div>
    )
}