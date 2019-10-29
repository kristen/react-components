import React from "react";

interface Props {

}

interface State {

}

interface Invoice {
    day: number;
    person: string;
    amount: number;
}

interface Email {
    scheduleDay: number;
    type: string;
}

export class InvoiceEmails extends React.Component<Props, State> {
    state = {
        invoices: [
            {
                day: 0,
                person: "Alice",
                amount: 200
            },
            {
                day: 1,
                person: "Bob",
                amount: 100
            }
        ]
    };

    emails = [
        {
            scheduleDay: -10,
            type: "Upcoming",
        },
        {
            scheduleDay: 0,
            type: "New"
        },
        {
            scheduleDay: 20,
            type: "Reminder"
        },
        {
            scheduleDay: 30,
            type: "Due"
        }
    ];

    scheduleInvoice(invoices: Invoice[]): string[] {
        // ideally this is a flatMap
        const invoiceEmails =  invoices.flatMap(({day, person, amount}) => {
            return this.emails.map(({scheduleDay, type}): {finalScheduleDay: number, invoiceString: string} => {
                const finalScheduleDay = day + scheduleDay;
                const invoiceString =  `${finalScheduleDay}: [${type}] Invoice for ${person} for ${amount} dollars`;
                return {
                    finalScheduleDay,
                    invoiceString,
                }
            })
        });
        return invoiceEmails.sort((invoiceEmailA, invoiceEmailB) => {
            return invoiceEmailA.finalScheduleDay - invoiceEmailB.finalScheduleDay;
        }).map(({invoiceString}) => invoiceString)
    }

    render() {
        return (
            <div>
                <h1>Invoices</h1>
                {this.scheduleInvoice(this.state.invoices)
                    .map(string => <div>{string}</div>)}
            </div>
        )
    }
}