import React, { Component } from 'react'

// Set Up The Initial Context
const AppContext = React.createContext()

// Create an exportable consumer that can be injected into components
export const AppConsumer = AppContext.Consumer

// Create the provider using a traditional React.Component class
class AppProvider extends Component {
    state = {
        summarySelectionState: {
            currentMonthSummary: "Current Month Summary",
            currentYearSummary: "Current Year Summary",
            totalSummary: "Total Summary",
            currentSelection: "Current Month Summary"
        },
        currentMonthData: {
            monthlyEarning: 6000,
            spendings: {
                food: {
                    total: 118.9,
                    costs: [
                        {
                            description: "hot pot",
                            amount: 50,
                            date: "04/02/2019"
                        },
                        {
                            description: "hot pot",
                            amount: 68.9,
                            date: "04/02/2019"
                        }
                    ]
                },
                entertainment: {
                    total: 80,
                    costs: [
                        {
                            description: "switch game",
                            amount: 40,
                            date: "04/02/2019"
                        },
                        {
                            description: "switch game",
                            amount: 40,
                            date: "04/01/2019"
                        },
                    ]
                },
                housing: {
                    total: 1995.5,
                    costs: [
                        {
                            description: "rent",
                            amount: 1975,
                            date: "04/02/2019"
                        },
                        {
                            description: "gas",
                            amount: 20.5,
                            date: "04/15/2019"
                        }
                    ]
                },
                others: {
                    total: 80,
                    costs: [
                        {
                            description: "book",
                            amount: 40,
                            date: "04/02/2019"
                        },
                        {
                            description: "stuff",
                            amount: 40,
                            date: "04/01/2019"
                        },
                    ]
                }
            }
        },
        currentYearData: {
            data: [
                {
                    month: 1,
                    spendingAmount: 100,
                    earning: 100
                },
                {
                    month: 2,
                    spendingAmount: 100,
                    earning: 100
                }
            ]
        },
        totalSummaryData: {
            data: [
                {
                    year: 2019,
                    totalSpending: 100000,
                    totalEarning: 1000000
                },
            ]
        }
    }
    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <AppContext.Provider value={{
                state: this.state,
                setSummarySelectionState: (selection) => {
                    this.setState({
                        summarySelectionState: {
                            currentMonthSummary: "Current Month Summary",
                            currentYearSummary: "Current Year Summary",
                            totalSummary: "Total Summary",
                            currentSelection: selection
                        }
                    })
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
export default AppProvider;