export interface IPersonalData {
    fullname: {
        title: string,
        firstName: string,
        lastName: string
    };
    email: string;
    occupation: string;
    address: {
        country: string,
        postcode: string
    };
}
