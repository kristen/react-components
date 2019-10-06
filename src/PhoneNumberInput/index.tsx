import React, {ChangeEvent} from 'react';
import {formatPhoneNumber} from "./formatPhoneNumber";

interface Props {}
interface State {
    value: string;
}

class PhoneNumberInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
        this.setState({ value: formatPhoneNumber(value) });
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        )
    }
}
export default PhoneNumberInput;