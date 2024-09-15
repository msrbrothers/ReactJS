import React from "react";
import { Link } from 'react-router-dom';
import { withRouter, useLocation, useNavigate } from 'react-router-dom';

class EditContact extends React.Component {

    constructor(props) {
        console.log("props  :", props);
        
        super(props);
        this.state = {
            name: '',
            email: '',
            id: ""
        };
    }

    // create the onSubmit function

    editContact = async (e) => {
        const { navigate } = this.props;
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }

        const editContactHandler = await this.props.editContactHandler(this.state);

        if (editContactHandler.error) {
            console.log("editContactHandler ::", editContactHandler);
        } else {
            navigate("/list")
            this.setState({ name: "", email: "" });
        }

    };

    componentDidMount() {
        const { contact } = this.props.location.state || {};
        if (contact) {
            this.setState({
                name: contact.name,
                email: contact.email,
                id: contact.id
            });
        }
    }

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
                <form className="ui form" onSubmit={this.editContact}>
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
                    <button className="ui button blue">Edit Contact</button>
                </form>
            </div>
        )
    }
}

function EditDetailsWrapper(props) {
    
    const navigate = useNavigate()

    console.log("props ::", props);


    const location = useLocation();
    return <EditContact location={location} editContactHandler={props.editContactHandler} navigate={navigate} />;

}

export default EditDetailsWrapper