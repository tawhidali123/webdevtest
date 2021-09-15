import React, {useState, useEffect} from 'react'
import fortuneImg from '../../images/fortune.jpg'
import mmadnessImg from '../../images/mmadness.jpg'
import mmmillionareImg from '../../images/mmmillionaire.jpg'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

export default function List({fortuneState, madnessState, millionaireState}) {
    return (
        <div>
            {!fortuneState ? null : (
                <div style={{margin: '5rem'}}>
                    <Link to='/fortune'>
                        <img src={fortuneImg} />
                    </Link>
                    <Item 
                        name={fortuneState.promotion_name}
                        summary={fortuneState.summary}
                        drawingDateArray={[
                            fortuneState?.drawings[0]?.drawing_date,
                            fortuneState?.drawings[1]?.drawing_date
                        ]}
                    />
                </div>
            )}
            {!madnessState ? null : (
                <div style={{margin: '5rem'}}>
                    <Link to='/madness'>
                        <img src={mmadnessImg} />
                    </Link>
                    <Item 
                        name={madnessState.promotion_name}
                        summary={madnessState.summary}
                        drawingDateArray={[
                            madnessState?.drawings[0]?.drawing_date,
                            madnessState?.drawings[1]?.drawing_date
                        ]}
                    />
                </div>
            )}
            {!millionaireState ? null : (
                <div style={{margin: '5rem'}}>
                    <Link to='millionaire'>
                        <img src={mmmillionareImg} />
                    </Link>
                    <Item 
                        name={millionaireState.promotion_name}
                        summary={millionaireState.summary}
                        drawingDateArray={[
                            millionaireState?.drawings[0]?.drawing_date,
                            millionaireState?.drawings[1]?.drawing_date
                        ]}
                    />
                </div>
            )}
        </div>
    )
}
