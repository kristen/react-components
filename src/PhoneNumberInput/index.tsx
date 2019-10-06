import React, {ChangeEvent} from 'react';

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
        const digits = value.split('')
            .filter(c => c.match(/\d/));
        const areaCode = digits.slice(0, 3);
        const prefix = digits.slice(3, 6);
        const lineNumber = digits.slice(6, 10);
        const formatParts = ["(", ") ", "-"];

        const formattedValue = [areaCode, prefix, lineNumber]
            .reduce((acc: string[], part: string[], index: number) => {
                if (part.length) {
                    return [...acc, formatParts[index], ...part];
                }
                return acc;
            }, [] as string[]).join('');

        this.setState({ value: formattedValue });
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        )
    }
}
export default PhoneNumberInput;