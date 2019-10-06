import React, {ChangeEvent} from 'react';

interface Props {
}
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
        const filteredChars = value.split('').filter(c => c.match(/\d/));
        const filteredParts = [filteredChars.slice(0, 3), filteredChars.slice(3, 6), filteredChars.slice(6, 10)];

        let formattedValue = '';
        if (filteredParts[0].length) {
            formattedValue += "(" + filteredParts[0].join('');
        }
        if (filteredParts[1].length) {
            formattedValue += ") " + filteredParts[1].join('');
        }
        if (filteredParts[2].length) {
            formattedValue += "-" + filteredParts[2].join('');
        }

        this.setState({ value: formattedValue });
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        )
    }
}
export default PhoneNumberInput;