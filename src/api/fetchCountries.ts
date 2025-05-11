import axiosInstance from "./axiosInstance";

export const fetchCountries = async () => {
    const response = await axiosInstance.get('/Countries', {
        params: {
            languageIsoCode: 'EN',
        }
    });
    return response.data;
}