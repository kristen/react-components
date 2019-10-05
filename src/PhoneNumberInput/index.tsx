import React from 'react';

interface Props {
}

class PhoneNumberInput extends React.Component<Props> {
    static validCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    constructor(props: Props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: any) {
        const value = event.target.value;
        // filter invalid characters
        const filteredValue = value.split('')
            .filter((char: string) => PhoneNumberInput.validCharacters.includes(char))
            .join('');

        const filteredParts = [
            [filteredValue[0], filteredValue[1], filteredValue[2]],
            [filteredValue[3], filteredValue[4], filteredValue[5]],
            [filteredValue[6], filteredValue[7], filteredValue[8], filteredValue[9]]
        ].map((part: string[]) => part.filter((number: string|undefined) => number !== undefined));
        console.log("filteredParts", filteredParts);
        let formattedValue = '';
        if (filteredParts[0].length >= 1) {
            formattedValue += "(" + filteredParts[0].join('');
        }
        if (filteredParts[1].length >= 1) {
            formattedValue += ") " + filteredParts[1].join('');
        }
        if (filteredParts[2].length >= 1) {
            formattedValue += "-" + filteredParts[2].join('');
        }

        console.log("formattedValue", formattedValue);

        // when 0 characters, nothing, length of string is 0
        // when 1 characters, prefix with open paren, length of string is 2
        // when 2 characters, prefix with open paren, length = 3
        // when 3 characters, prefix with open paren, length = 4
        // when 4 characters, prefix with open paren, (add closing paren, add space => before your 4th character), length = 3+4=7
        // when 5 characters, prefix with open paren, (add closing paren, add space => before your 4th character), length = 8
        // when 6 characters, prefix with open paren, (add closing paren, add space => before your 4th character), length = 9
        // when 7 characters, prefix w/ open paren, (add closing paren, space), then add dash + new character, length = 4 + 7 = 11
        // when 8
        // when 9

        // keep track of deleting
        this.setState({value: formattedValue});
    }
    render() {
        return (
            // @ts-ignore
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
        )
    }
}
export default PhoneNumberInput;