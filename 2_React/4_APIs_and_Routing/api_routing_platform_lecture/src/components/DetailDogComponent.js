import React from "react";

const DetailDogComponent = (props) => {
    return <p>You are looking at the dog with id = {props.id}</p>;
};

/*
Note: Regardless of what we send down in our url, the type of the parameter will always be a string. If you need it 
to be a number, will you need to convert the value into a number.port default <DetailDogComponent/>
*/