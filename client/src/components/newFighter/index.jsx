import { TextField } from "material-ui"
import { createFighter } from "../../services/domainRequest/fightersRequest";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import './newFighter.css';

export default function NewFighter({onCreated}) {
    const [name, setName] = useState();
    const [health, setHealth] = useState();
    const [power, setPower] = useState();
    const [defense, setDefense] = useState();

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onPowerChange = (event) => {
        const value = event.target.value || event.target.value === 0 ? Number(event.target.value) : null;
        setPower(value);
    };

    const onDefenseChange = (event) => {
        const value = event.target.value || event.target.value === 0 ? Number(event.target.value) : null;
        setDefense(value);
    };

    const onHealthChange = (event) => {
        const value = event.target.value || event.target.value === 0 ? event.target.value : null;
        setHealth(value);
    };

    const onSubmit = async () => {
        const data = await createFighter({ name, health, power, defense });
        if (data && !data.error) {
            onCreated(data);
        }
    };

    return (
        <div id="new-fighter">
            <div>New Fighter</div>
            <TextField onChange={onNameChange} id="name" label="Required" placeholder="Name"/>
            <TextField onChange={onPowerChange} id="power" label="Required" placeholder="Power" type="number"/>
            <TextField onChange={onDefenseChange} id="defense" label="Required" placeholder="Defense" type="number"/>
            <TextField onChange={onHealthChange} id="health" label="Required" placeholder="Health" type="number"/>
            <Button onClick={onSubmit} variant="contained" color="primary">Create</Button>
        </div>
    );
};
