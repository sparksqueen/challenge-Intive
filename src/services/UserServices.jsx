import React, { useContext, useEffect, useState } from 'react';

//funcion fetch que retorna los resultados por consola y pantalla, se llama a ella en UserGrid
export const getUsers = async () => {
    const url = 'https://randomuser.me/api/?results=8';
    console.log('Llamada Fetch ');

    const response = await fetch(url);
    const { results } = await response.json();

    console.log('Resultado : ', results);

    return results;
}