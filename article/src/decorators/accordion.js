import React from 'react';

export default OriginalComponent => class accordionComponent extends React.Component {
    state = {
        openElementId: ''
    };

    toggleOpenElement = id => () => {
        // tried to fix article's closing:

       /* if (this.state.openElementId === id) {
            setTimeout(()=>{
                this.setState(
                    {openElementId: ''}
                    )
            }, 500);
        } else {
            this.setState({
                openElementId: id
            });
        }*/

        this.setState({
            openElementId: id === this.state.openElementId ? '' : id
        });
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenElement}/>
    }
}