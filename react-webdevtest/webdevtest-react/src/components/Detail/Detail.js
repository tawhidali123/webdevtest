import React, {useEffect, useState} from 'react'
import fortuneImg from '../../images/fortune.jpg'
import mmadnessImg from '../../images/mmadness.jpg'
import mmmillionareImg from '../../images/mmmillionaire.jpg'

export default function Detail({offerState}) {
    const [offer, setOffer] = useState();

    useEffect(() => {
        setOffer(offerState)
    }, [offerState])

    const setImage = (offer) => {
        if ((offer.promo_image_url === 'images/fortune.jpg')) {
            return <img src={fortuneImg} />
        } else if (offer.promo_image_url === 'images/mmadness.jpg') {
            return <img src={mmadnessImg} />
        } else if (offer.promo_image_url === 'images/mmmillionaire.jpg') {
            return <img src={mmmillionareImg} />
        }
    }
    console.log(offer)
    return (
        <div>
            {!offer ? null : (
                <div style={{marginTop: '2em'}}>
                    {setImage(offer)}
                    <div>
                        <h2>{offer.promotion_name}</h2>
                        <small>{offer.summary}</small>
                    </div>
                    <div style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        margin: '6rem'
                        }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor: 'rgba(0,0,0,.6)', color: 'white'}}>
                                        Prize
                                    </th>
                                    <th style={{backgroundColor: 'rgba(0,0,0,.6)', color: 'white'}}>
                                        Entry Deadline
                                    </th>
                                    <th style={{backgroundColor: 'rgba(0,0,0,.6)', color: 'white'}}>
                                        Drawing Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!offer ? null : (
                                    offer.drawings.map(item => (
                                        <tr>
                                            <td style={{padding: '17px', backgroundColor: 'rgba(0,0,0,.2)'}}>
                                                {item.prize}
                                            </td>
                                            <td style={{padding: '17px', backgroundColor: 'rgba(0,0,0,.2)'}}>
                                                {item.entry_deadline}
                                            </td>
                                            <td style={{padding: '17px', backgroundColor: 'rgba(0,0,0,.2)'}}>
                                                {Date(item.drawing_date).toString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div style={{width: '75%', margin: '17px auto'}}>
                        <p>{offer.entry_info}</p>
                    </div>
                    <div>
                        <h3>Your Total Tickets Entered: {offer.entries.length}</h3>
                    </div>
                    <div style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        margin: '3rem'
                        }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor: 'rgba(0,0,0,.6)', color: 'white'}}>
                                        Entry Number
                                    </th>
                                    <th style={{backgroundColor: 'rgba(0,0,0,.6)', color: 'white'}}>
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!offer ? null : (
                                    offer.entries.map(item => (
                                        <tr>
                                            <td style={{padding: '17px', backgroundColor: 'rgba(0,0,0,.2)'}}>
                                                {item.entry_number}
                                            </td>
                                            <td style={{padding: '17px', backgroundColor: 'rgba(0,0,0,.2)'}}>
                                                {Date(item.date).toString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
