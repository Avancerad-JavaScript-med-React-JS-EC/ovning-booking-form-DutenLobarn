import React from 'react';


class Form extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { firstName: '', lastName: '' }

        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
    }

    changeFirstName(event){
            this.setState({
                firstName: event.target.value

            })
    };

    changeLastName(event){
        this.setState({
            lastName: event.target.value
        })
    };
    
    hasChange(event){
        console.log(event.target.value);
    };

    render() {
        return(
                    <form className="form-wrapper">
                        <div className="class-wrapper">

                            <label htmlFor="second-class">
                                <input onClick={this.hasChange} defaultChecked type="radio" id="second-class" name="klass" value="2:a klass" />
                                2:a Klass
                            </label>
                            <label htmlFor="first-class">
                                <input onClick={this.hasChange} type="radio" id="first-class" name="klass" value="1:a klass" />
                                1:a Klass
                            </label>
                        </div>

                        <label className="select-wrapper">

                            <div className="form-select">
                                <h4>Antal biljetter</h4>
                                <select className="collum1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            
                            <div className="form-select">
                                <h4>Titel</h4>
                                <select className="collum1">
                                    <option value="mr">Mr.</option>
                                    <option value="mrs">Mrs.</option>
                                    <option value="ms">Ms.</option>
                                    <option value="dr">Dr.</option>
                                </select>
                            </div>

                        </label>

                        <label className="form-name">
                            <h4>Förnamn</h4>
                            <input onChange={this.changeFirstName} type="text" placeholder="Greta" value={this.state.firstName} />
                        </label>

                        <label className="form-name">
                            <h4>Efternamn</h4>
                            <input onChange={this.changeLastName} type="text" placeholder="Thunberg" value={this.state.lastName} />
                        </label>
                        <div className="terms-wrapper">
                        <input type="checkbox" className="check" />
                        <p>Godkänner villkoren</p>
                        </div>

                    </form>
        )
    }
}

export default Form;