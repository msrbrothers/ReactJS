import React from "react";


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

        console.log(this.state);

        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };

    render() {
        return (
            <div className="ui main mt-5" style={{ marginTop: "75px" }}>
                <h3>Add Contact</h3>
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