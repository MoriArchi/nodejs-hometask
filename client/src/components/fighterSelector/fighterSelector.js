import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    makeStyles,
    Select,
    MenuItem,
} from '@material-ui/core';

import './fighterSelection.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Fighter({ fightersList, onFighterSelect, selectedFighter, fighterImg }) {
    const classes = useStyles();
    const [fighter, setFighter] = useState();

    const handleChange = (event) => {
        const fighter = {
            ...event.target.value,
            img: fighterImg,
        };
        // debugger;
        setFighter(fighter);
        onFighterSelect(fighter);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="simple-select-label">Select Fighter</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={fighter}
                    onChange={handleChange}
                >
                    {fightersList.map((it, index) => {
                        return (
                            <MenuItem key={`${index}`} value={it}>
                                {it.name}
                            </MenuItem>
                        );
                    })}
                </Select>
                {selectedFighter ? (
                    <div>
                        <div>Name: {selectedFighter.name}</div>
                        <div>
                            <img className="fighterView" src={fighterImg} alt="fighter" />
                        </div>
                        <div>Health: {selectedFighter.health}</div>
                        <div>Power: {selectedFighter.power}</div>
                        <div>Defense: {selectedFighter.defense}</div>
                    </div>
                ) : null}
            </FormControl>
        </div>
    );
}
