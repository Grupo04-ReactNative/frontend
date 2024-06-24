import axios, { AxiosResponse } from 'axios';

const apiPersonalidadePokemon = axios.create({
    baseURL: "http://192.168.1.72:8080"
})

export interface PersonalidadePokemonProps {
    sprites: string[],
    name: string,
    frasePersonalidade: string
}

export function getPersonalidadePokemon() : Promise<AxiosResponse<PersonalidadePokemonProps, any>> {
    console.log('Executando requisição');
    const url = "personalidade-pokemon"
    return apiPersonalidadePokemon.get(url);
}




