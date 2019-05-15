import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import { RadialChart, Hint } from 'react-vis';
import { AppConsumer } from './appProviderComponent';
import { ResponsivePie } from '@nivo/pie'
import "../style/style.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Summary />
            </div>
        )
    }
}

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppConsumer>
                    {(context) => (
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">Never Forget</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title={context.state.summarySelectionState.currentSelection} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.currentMonthSummary)}
                                            href="#action/3.1">
                                            {context.state.summarySelectionState.currentMonthSummary}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.currentYearSummary)}
                                            href="#action/3.2">
                                            {context.state.summarySelectionState.currentYearSummary}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.totalSummary)}
                                            href="#action/3.3">
                                            {context.state.summarySelectionState.totalSummary}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form inline>
                                    <Button variant="outline-warning">SignIn</Button>
                                    <Button variant="outline-success">LogIn</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    )}
                </AppConsumer>
            </div>
        )
    }
}


const data =
    [
        {
            "id": "javascript",
            "label": "javascript",
            "value": 122,
            "color": "hsl(345, 70%, 50%)"
        },
        {
            "id": "go",
            "label": "go",
            "value": 202,
            "color": "hsl(60, 70%, 50%)"
        },
        {
            "id": "ruby",
            "label": "ruby",
            "value": 172,
            "color": "hsl(285, 70%, 50%)"
        },
        {
            "id": "elixir",
            "label": "elixir",
            "value": 219,
            "color": "hsl(240, 70%, 50%)"
        },
        {
            "id": "hack",
            "label": "hack",
            "value": 454,
            "color": "hsl(118, 70%, 50%)"
        }
    ]

class Summary extends Component {

    getTotalSpending() {
        const contextValue = this.context;
        var spendings = contextValue.state.currentMonthData.spendings;
        var total = spendings.food.total + spendings.entertainment.total + spendings.housing.total + spendings.others.total;
        return total;
    }

    getData() {
        const contextValue = this.context;

        var spendings = contextValue.state.currentMonthData.spendings;
        this.list = [];

        console.log(spendings.food);
        console.log(spendings.entertainment);
        console.log(spendings.housing);
        console.log(spendings.others);
    }

    render() {
        return (
            <AppConsumer>
                {(context) => (
                    <Container style={{ height: 600 }}>
                        <MyResponsivePie data={data} />
                    </Container>
                )}
            </AppConsumer>
        )
    }
}


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{
            "top": 100,
            "right": 60,
            "bottom": 90,
            "left": 50
        }}
        innerRadius={0.7}
        padAngle={0.6}
        cornerRadius={5}
        colors={
            [
                "red", "green", "blue", "yellow", "rgba(99, 95, 9)"
            ]
        }
        borderWidth={2}
        borderColor={{
            "from": "color",
            "modifiers": [
                [
                    "darker",
                    0.2
                ]
            ]
        }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{
            "from": "color"
        }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "ruby"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "c"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "go"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "python"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "scala"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "lisp"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "elixir"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "javascript"
                },
                "id": "lines"
            }
        ]}
        legends={[
            {
                "anchor": "bottom",
                "direction": "row",
                "translateY": 56,
                "itemWidth": 100,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 18,
                "symbolShape": "circle",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
    />
)


Summary.contextType = AppConsumer; // This part is important to access context values


export default Home;