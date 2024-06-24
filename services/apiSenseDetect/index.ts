import axios, { AxiosResponse } from 'axios';

const apiSenseDetect = axios.create({
    baseURL: "http://192.168.18.4:8079/"
})

export interface SenseDetectProps {
    status: string;
}

export function validarInputComSenseDetect(input: string) : Promise<AxiosResponse<SenseDetectProps, any>> {
    console.log('Executando requisição para a API SenseDetect');
    const url = "sensedetect"
    const senseDetectDTO = {
        mensagem: input,
        idioma: 'english'
    }
    return apiSenseDetect.post(url, senseDetectDTO);
}



