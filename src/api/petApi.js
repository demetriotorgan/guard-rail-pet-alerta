import api from "./axios";

export async function listarPets(){

    const {data} = await api.get("/admin/pets");

    return data;

}