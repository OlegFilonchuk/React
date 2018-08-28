import React from 'react';

export default OriginalComponent => class accordionComponent extends React.Component {
    state = {
        openElementId: null
    };

    toggleOpenElement = id => ev => {
        if (this.state.openElementId === id) {
            this.setState({
                openElementId: null
            });
        } else {
            this.setState({openElementId: id})
        }
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenElement}/>
    }
}