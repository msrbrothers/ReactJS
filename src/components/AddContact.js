import React from "react";
import { Link} from 'react-router-dom';


class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    // create the onSubmit function

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }

        console.log(this.props);

        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "50px" }}>
                <div className="ui grid">
                    <div className="eight wide column">
                        <h3>Contacts List</h3>
                    </div>
                    <div className="eight wide column">
                        <Link to="/list">
                            <button className="ui button blue right floated">Go To List</button>
                        </Link>

                    </div>
                </div>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter you name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="emil" placeholder="Enter you emil"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />

                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact