export interface Incident{
    id?: string;
    idDevice?: string;
    deviceModel?: string;
    idUser?: string;
    type?: string;
    message?: string;
    idAssignedTo?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}