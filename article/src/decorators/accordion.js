import React from 'react';

export default OriginalComponent => class accordionComponent extends React.Component {
    state = {
        openElementId: ''
    };



    toggleOpenElement = id => () => {
        this.setState({
            openElementId: id === this.state.openElementId ? '' : id
        });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenElement}/>
    }
}