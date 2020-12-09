import React from 'react'
import IndexPage from '../components/Dashboard/indexPage'
import fetch from 'isomorphic-fetch'
const config = require("../config.json")
class Index extends React.Component {
    static async getInitialProps(){
        const data = await fetch(config["kawal-corona"].base_url);
        const items =await data.json();
        return {
            items
        }
    }
    render() {
        const {items} = this.props;

        return (
            <IndexPage isGlobal={true} data={items}/>
        )
    }
}

export default Index;
