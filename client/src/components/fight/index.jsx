import React from 'react';

import { getFighters } from '../../services/domainRequest/fightersRequest';
import NewFighter from '../newFighter';
//import Fighter from '../fighter';
import FighterSelector from '../fighterSelector/fighterSelector';
import { Button } from '@material-ui/core';

import './fight.css';

class Fight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fighters: [],
            fighter1: null,
            fighter2: null,
        };
    }

    async componentDidMount() {
        const fighters = await getFighters();
        if (fighters && !fighters.error) {
            this.setState({ fighters });
        }
    }

    onFightStart = () => {
        const { fighter1, fighter2 } = this.state;
        this.props.onStartFight(fighter1, fighter2);
    };

    onCreate = (fighter) => {
        this.setState({ fighters: [...this.state.fighters, fighter] });
    };

    onFighter1Select = (fighter1) => {
        this.setState({ fighter1 });
    };

    onFighter2Select = (fighter2) => {
        this.setState({ fighter2 });
    };

    getFighter1List = () => {
        const { fighter2, fighters } = this.state;
        if (!fighter2) {
            return fighters;
        }

        return fighters.filter(it => it.id !== fighter2.id);
    };

    getFighter2List = () => {
        const { fighter1, fighters } = this.state;
        if (!fighter1) {
            return fighters;
        }

        return fighters.filter(it => it.id !== fighter1.id);
    };

    render() {
        const { fighter1, fighter2 } = this.state;
        const fighter1Img = 'https://media.giphy.com/media/kdHa4JvihB2gM/giphy.gif';
        const fighter2Img = 'https://i.pinimg.com/originals/46/4b/36/464b36a7aecd988e3c51e56a823dbedc.gif';
        return (
            <div id="wrapper">
                <NewFighter onCreated={this.onCreate}/>
                <div id="fight-wrapper">
                    <div className="wrapper left">
                        <FighterSelector
                            selectedFighter={fighter1}
                            onFighterSelect={this.onFighter1Select}
                            fightersList={this.getFighter1List() || []}
                            fighterImg={fighter1Img}
                        />
                    </div>
                    <div className="wrapper">
                        <Button
                            onClick={this.onFightStart}
                            variant="contained"
                            color="primary"
                            disabled={!(fighter1 && fighter2)}
                        >
                            Start Fight
                        </Button>
                    </div>
                    <div className="wrapper right">
                        <FighterSelector
                            selectedFighter={fighter2}
                            onFighterSelect={this.onFighter2Select}
                            fightersList={this.getFighter2List() || []}
                            fighterImg={fighter2Img}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Fight;
