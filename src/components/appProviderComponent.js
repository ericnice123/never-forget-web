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
            totalSummary: "Total Summary"
        }
    }
    render() {
        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
export default AppProvider;