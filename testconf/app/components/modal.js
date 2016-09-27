import React from 'react';

const customStyles = {
    overlay: {
        position: 'absolute',
        opacity: 0.3,
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    content: {
        position: 'absolute',
        top : '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
    }
};

export class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Modal'
    }
    render() {
        var { children, showmoal, doClose } = this.props;
        return(
            <div>
                {showmoal?<div style={customStyles.overlay}></div>:<div></div>}
                {showmoal?
                    <div style={customStyles.content}>
                        <button onClick={doClose}>x</button>
                        <h3>test modal</h3>
                    </div>:<div></div>}
            </div>
        );
    }
};
