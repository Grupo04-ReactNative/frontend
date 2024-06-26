import axios, { AxiosResponse } from 'axios';

const apiPersonalidadePokemon = axios.create({
    baseURL: "http://192.168.18.4:8080"
})

export interface PersonalidadePokemonProps {
    sprites: string[],
    name: string,
    frasePersonalidade: string
}

export function getPersonalidadePokemon() : Promise<AxiosResponse<PersonalidadePokemonProps, any>> {
    console.log('Executando requisição para a API PersonalidadePokemon');
    const url = "personalidade-pokemon"
    return apiPersonalidadePokemon.get(url);
}




