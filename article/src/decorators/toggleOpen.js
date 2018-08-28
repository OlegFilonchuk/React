import React from 'react';


export default OriginalComponent => class ToggleableComponent extends React.Component {
    state = {
        isOpen: false
    };



    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (e) => {
        e && e.preventDefault && e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}