import React from 'react';

export default OriginalComponent => class accordionComponent extends React.Component {
    state = {
        openElementId: ''
    };

    componentDidMount() {
        console.log('---', 'mounted');
    }

    componentDidUpdate() {
        console.log('---', 'updated');
    }

    componentWillUnmount() {
        console.log('---', 'unmounted');
    }

    toggleOpenElement = id => () => {
        this.setState({
            openElementId: id === this.state.openElementId ? '' : id
        });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenElement}/>
    }
}