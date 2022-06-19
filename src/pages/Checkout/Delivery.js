import React, { useState } from 'react';
import "./Delivery.css";
import { useForm } from 'react-hook-form';
import { Button, Input } from './../../components';

export default function Delivery(props) {

    const [isDroppshipper, setIsDropshipper] = useState(false);
    const [counterText, setCounterText] = useState(0);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container">
            <div className='header'>
                <h1 className="h1">Delivery details</h1>
                <div>
                    <input type="checkbox" onChange={(e) => setIsDropshipper(e.target.checked)} defaultChecked={isDroppshipper}/>
                    <label>Send as Dropshipper</label>
                </div>
            </div>
            <div className='box'>
                <input placeholder="Email" {...register('email', {required: true})} />
                <input placeholder="Dropshipper Name" disabled={!isDroppshipper}/>
            </div>
            <div className='box'>
                <input placeholder="Phone Number" {...register('phoneNumber', { required: true, minLength: 6, maxLength: 20, pattern: /^[0-9]+$/i })}/>
                <input placeholder="Dropshipper Phone Number" disabled={!isDroppshipper } />    
            </div>
            <textarea {...register('address', {required: true, maxLength: 120})} onChange={e => setCounterText(e.target.value.length)}></textarea>
            <div>{120 - (counterText <= 120 ? counterText : 120 )}</div>
        </form>
    )
}