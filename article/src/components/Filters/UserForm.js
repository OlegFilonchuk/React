import React, {PureComponent} from 'react';

class UserForm extends PureComponent {

    state = {
        userName: '',
    };

    handleUserChange = ev => {
        if (ev.target.value.includes(1)) {
            return;
        }
        this.setState({
            userName: ev.target.value
        });
    };

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.userName} onChange={this.handleUserChange}/>
            </div>
        );
    }
}

export default UserForm;