import axiosInstance from "./axiosInstance"

type Props = {
    countryCode: string;
}
export const fetchHolidaysByCountryCode = async (props: Props) => {
    const response = await axiosInstance.get('/PublicHolidays?&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=DE&subdivisionCode=DE-BE', {
        params: {
            countryCode: props.countryCode,
        }
    });
    console.log('response', response.data);
}