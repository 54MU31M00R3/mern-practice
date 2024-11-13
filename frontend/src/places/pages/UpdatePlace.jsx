import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageURL: 'https://www.esbnyc.com/sites/default/files/2024-01/entry-prit-goyani-2023-08-17.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'cool building',
        imageURL: 'https://www.esbnyc.com/sites/default/files/2024-01/entry-prit-goyani-2023-08-17.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: 'u2'

    }
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);

    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if(identifiedPlace) {
            setFormData({
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        }, true);
        }

        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = e => {
        e.preventDefault();

        console.log(formState.inputs); //will be sent to the backend
    }

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <Card>
                    <h2>Could Not Find Place!</h2>
                </Card>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className='center'>
                <Card>
                    <h2>Loading...</h2>
                </Card>
            </div>
        )
    }

    return (
        < form className='place-form' onSubmit={placeUpdateSubmitHandler} >
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialIsValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialIsValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form >
    )
}

export default UpdatePlace