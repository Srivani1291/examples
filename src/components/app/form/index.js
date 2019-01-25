import React from "react";


class View extends React.Component {
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onAliasChange = this.onAliasChange.bind(this)
        this.onTeamChange = this.onTeamChange.bind(this)



        this.state={
            name: props.name,
            alias: props.alias,
            team: props.team,
        }
        
    }
    onFormSubmit(event){
        event.preventDefault()
        this.props.formSubmitCallback(
            this.state.name,
            this.state.alias,
            this.state.team,
        )
        this.props.history.push('/list')
    }
    onNameChange(event){
        this.setState({name: event.target.value})
    }
    onAliasChange(event){
        this.setState({alias: event.target.value})
    }
    onTeamChange(event){
        this.setState({team: event.target.value})
    }
    render(){
        return (
            
                <form onSubmit={this.onFormSubmit}>
                <h3>view Detail</h3>
                <label>Name:<input type="text" onChange={this.onNameChange}></input></label>
                <label>Alias:<input type="text" onChange={this.onAliasChange}></input></label>
                <label>Team:<input type="text" onChange={this.onTeamChange}></input></label>
                <button>submit</button>
                </form>
            
            )
    }
}
export default View;    